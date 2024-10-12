import { timeAgo } from "@/lib/helpers";
import { ChatBubbleIcon, ClockIcon, PersonIcon, TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { ShareButton } from "./ShareButton";

export function StoryItemDisplay({ data } : any) {
    return (
        <div className="m-auto mx-2 py-2 grid grid-cols-10 ring-2 mb-2 rounded-lg">
                <div className="col-span-1 flex flex-col justify-center items-center">
                    <TriangleUpIcon className="w-6 h-6 fill-current text-orange-400" />
                    <span className="font-bold">{data.score}</span>
                    <TriangleDownIcon className="w-6 h-6 fill-current text-orange-400" />
                </div>
                <div className="col-span-9 items-center">
                    <div className="ml-4 font-bold text-xl">
                        <Link className="underline underline-offset-4" to={data.url ?? `/storydetails/${data.id}`} target="_blank">
                            <h4 className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight">{data.title}</h4>
                        </Link>
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <div className="px-4 my-2 flex flex-row items-center">
                            <ClockIcon className="w-5 h-5 fill-current text-orange-400" />
                            <span className="pl-2">{timeAgo(data.time)} ago</span>
                        </div>
                        <div className="px-4 my-2 hidden md:flex flex-row items-center">
                            <PersonIcon className="w-5 h-5 fill-current text-orange-400" />
                            <span className="pl-2">{data.by}</span>
                        </div>
                        <div className="px-4 my-2 flex flex-row items-center">
                            <ChatBubbleIcon className="w-5 h-5 fill-current text-orange-400" />
                            <Link className="pl-2 underline underline-offset-2" to={`/storydetails/${data.id}`}>
                                <span>{data.descendants ?? 0}</span>
                                <span className="hidden md:inline"> comments</span>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center">
                            <ShareButton storyInfo={data}/>
                        </div>
                    </div>
                </div>
            </div>
    );
}