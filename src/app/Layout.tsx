import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom'
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Toaster } from '@/components/ui/toaster';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Footer } from './Footer';

export default function Layout() {
    const [curr, setCurr] = useState<string>('');
    let { storyType } = useParams();

    function capitalizeFirstLetter(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    useEffect(() => {
        if (storyType) {
            setCurr(storyType);
            document.title = `${capitalizeFirstLetter(storyType)} | HackerNews - React`;
        }
    }, [storyType]);

    return (
        <>
            <div className='sticky top-0 flex flex-row justify-around max-w-screen-lg md:mx-auto'>
                <div className='w-full p-2 flex flex-row items-center justify-between mx-2 my-4 rounded-full bg-opacity-50 backdrop-blur-lg'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className='md:hidden' variant="ghost">
                                <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={'left'} className='w-1/2'>
                            <SheetHeader>
                                <SheetTitle>Hacker News | Menu</SheetTitle>
                                <SheetDescription className='hidden'>
                                    Navigation links for hacker news.
                                </SheetDescription>
                            </SheetHeader>
                            <nav className='text-xl font-bold'>
                                <ul>
                                    <li className={`mx-2 my-6 ${curr === 'top' ? 'underline underline-offset-8' : ''}`}>
                                        <Link to="story/top">
                                            Top
                                        </Link>
                                    </li>
                                    <li className={`mx-2 my-6 ${curr === 'new' ? 'underline underline-offset-8' : ''}`}>
                                        <Link to="story/new">
                                            New
                                        </Link>
                                    </li>
                                    <li className={`mx-2 my-6 ${curr === 'best' ? 'underline underline-offset-8' : ''}`}>
                                        <Link to="story/best">
                                            Best
                                        </Link>
                                    </li>
                                    <li className={`mx-2 my-6 ${curr === 'ask' ? 'underline underline-offset-8' : ''}`}>
                                        <Link to="story/ask">
                                            Ask
                                        </Link>
                                    </li>
                                    <li className={`mx-2 my-6 ${curr === 'show' ? 'underline underline-offset-8' : ''}`}>
                                        <Link to="story/show">
                                            Show
                                        </Link>
                                    </li>
                                    <li className={`mx-2 my-6 ${curr === 'job' ? 'underline underline-offset-8' : ''}`}>
                                        <Link to="story/job">
                                            Job
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <nav className="hidden md:block ml-2 p-4 md:flex justify-center text-2xl font-bold">
                        <ul>
                            <li className={`inline mx-2 ${curr === 'top' ? 'underline underline-offset-8' : ''}`}>
                                <Link to="story/top">
                                    Top
                                </Link>
                            </li>
                            <li className={`inline mx-2 ${curr === 'new' ? 'underline underline-offset-8' : ''}`}>
                                <Link to="story/new">
                                    New
                                </Link>
                            </li>
                            <li className={`inline mx-2 ${curr === 'best' ? 'underline underline-offset-8' : ''}`}>
                                <Link to="story/best">
                                    Best
                                </Link>
                            </li>
                            <li className={`inline mx-2 ${curr === 'ask' ? 'underline underline-offset-8' : ''}`}>
                                <Link to="story/ask">
                                    Ask
                                </Link>
                            </li>
                            <li className={`inline mx-2 ${curr === 'show' ? 'underline underline-offset-8' : ''}`}>
                                <Link to="story/show">
                                    Show
                                </Link>
                            </li>
                            <li className={`inline mx-2 ${curr === 'job' ? 'underline underline-offset-8' : ''}`}>
                                <Link to="story/job">
                                    Job
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='mr-4 flex flex-col justify-around'>
                        <ModeToggle></ModeToggle>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </>
    );
}