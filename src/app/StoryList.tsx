import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import StoryItem from './StoryItem';

import { useGetStoriesByTypeQuery } from "@/services/hackernews";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import { SkeletonStoryItem } from "./SkeletonStoryItem";

export function StoryLoaderForQuery({ params }: any) {
    const { storyType }: any = params;
    return { storyType: storyType };
}

export function StoryDetailsLoaderForQuery({ params }: any) {
    const { storyId }: any = params;
    return { storyId: storyId};
}

export default function StoryList() {
    const { storyType }: any = useLoaderData();
    const { data, error, isLoading } = useGetStoriesByTypeQuery(storyType);
    const [searchParams, _] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(0);    

    useEffect(()=>{
        let paramValue: number = parseInt(searchParams.get("p") ?? '0');
        setCurrentPage(paramValue);
        window.scrollTo(0, 0);
    }, [searchParams]);

    if (isLoading) {
        return (
            <div className="max-w-screen-lg md:mx-auto">
             <SkeletonStoryItem/>
             <SkeletonStoryItem/>
             <SkeletonStoryItem/>
            </div>
        );
    }
    else if (error) {
        return (<ErrorPage message={`Error loading stories!`}/>);
    } else if (data) {
        const x = parseInt(searchParams.get("p") ?? '0');        
        const listItems = data.slice(x * 30, (x * 30)+30).map((id: string) => <StoryItem key={id} storyId={id}>{id}</StoryItem>);
        
        return (
            <>
                <div className="max-w-screen-lg md:mx-auto">
                    {listItems}
                    <Link className="p-2 block" to={`?p=${(currentPage + 1)}`}>More</Link>
                </div>                
            </>
        );
    }
}

