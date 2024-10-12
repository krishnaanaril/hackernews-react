import { timeAgo } from "@/lib/helpers";
import { useGetStoryDetailsQuery } from "@/services/hackernews";
import { ChatBubbleIcon, ClockIcon, PersonIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { SkeletonStoryItem } from "./SkeletonStoryItem";

export default function Comment({ commentId }: any) {    

    const { data, error, isLoading } = useGetStoryDetailsQuery(commentId);

    if (isLoading) {
        return (<SkeletonStoryItem/>);
    }
    else if (error) {
        return (<ErrorPage message={`Error loading comments!`}/>);
    } else if (data && !data.deleted && !data.dead) {
        return (
            <div className="mb-2 mx-2 p-2 ring-2 rounded-lg">
                <div className="flex flex-row">                    
                    <div className="flex flex-row items-center">
                        <PersonIcon className="w-5 h-5 fill-current text-orange-400"/>
                        <span className="pl-2 pr-4">{data.by}</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <ClockIcon className="w-5 h-5 fill-current text-orange-400"/>
                        <span className="pl-2 pr-4">{timeAgo(data.time)} ago</span>
                    </div>
                </div>
                <p className="my-4 leading-7 text-wrap break-words" dangerouslySetInnerHTML={{ __html: data.text }}>
                </p>
                <div className="flex flex-row items-center">
                    <ChatBubbleIcon  className="w-5 h-5 fill-current text-orange-400"/>
                    <Link className="pl-2 pr-4 underline underline-offset-2" to={`/storydetails/${data.id}`}>
                        <span>{data.kids?.length ?? 0} comments</span>
                    </Link>
                </div>
            </div>
        );
    };
}