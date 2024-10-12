import { Link, useLoaderData } from "react-router-dom";
import Comment from "./Comment";
import { useEffect } from "react";
import { getDocumentTitle, timeAgo } from "@/lib/helpers";
import { useGetStoryDetailsQuery } from "@/services/hackernews";
import { ArrowLeftIcon, ChatBubbleIcon, ClockIcon, PersonIcon } from "@radix-ui/react-icons";

import { ShareButton } from "./ShareButton";
import ErrorPage from "./ErrorPage";
import { SkeletonStoryItem } from "./SkeletonStoryItem";

export default function StoryDetails() {
    const { storyId }: any = useLoaderData();
    const { data, error, isLoading } = useGetStoryDetailsQuery(storyId);

    useEffect(() => {
        if (data)
            document.title = getDocumentTitle(data.title);
    }, [data]);

    if (isLoading) {
        return (
            <div className="max-w-screen-lg md:mx-auto">
                <SkeletonStoryItem />
                <SkeletonStoryItem />
                <SkeletonStoryItem />
            </div>
        );
    }
    else if (error) {
        return (<ErrorPage message={`Error loading stories!`} />);
    } else if (data) {
        const comments = data.kids?.map((id: string) => <Comment key={id} commentId={id}></Comment>);
        const description = (<p className="my-4 leading-7" dangerouslySetInnerHTML={{ __html: data.text }}>
        </p>)
        const topContent = data.type === "comment"
            ? (
                <Link className="mb-2 flex flex-row" to={`/storydetails/${data.parent}`}>
                    <ArrowLeftIcon className="w-5 h-5 fill-current text-orange-400" />
                    <span className="pl-2">Back to parent</span>
                </Link>
            )
            : (
                <Link className="hover:underline underline-offset-4" to={data.url ?? `/storydetails/${data.id}`}>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        {data.title}
                    </h2>
                </Link>
            )

        return (
            <div className="max-w-screen-lg md:mx-auto">
                <div className="mb-2 mx-2 p-2 ring-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <div>
                        {topContent}
                        {description}
                    </div>
                    <div>
                        <div className="py-2 flex flex-row flex-wrap">
                            <div className="flex flex-row items-center">
                                <ClockIcon className="w-5 h-5 fill-current text-orange-400" />
                                <span className="pl-2 pr-4">{timeAgo(data.time)} ago</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <PersonIcon className="w-5 h-5 fill-current text-orange-400" />
                                <span className="pl-2 pr-4">{data.by}</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <ChatBubbleIcon className="w-5 h-5 fill-current text-orange-400" />
                                <Link className="pl-2 pr-4 underline underline-offset-2" to={`/storydetails/${data.id}`}>
                                    <span>{data.descendants ?? 0} comments</span>
                                </Link>
                            </div>
                            <div className="flex flex-row items-center">
                                <ShareButton storyInfo={data} />
                            </div>
                        </div>
                    </div>
                </div>
                {comments}
            </div>
        );
    }
}