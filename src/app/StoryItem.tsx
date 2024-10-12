import { useGetStoryDetailsQuery } from "@/services/hackernews";
import { StoryItemDisplay } from "./StoryItemDisplay";
import { SkeletonStoryItem } from "./SkeletonStoryItem";
import ErrorPage from "./ErrorPage";

export default function StoryItem({ storyId }: any) {

    const { data, error, isLoading } = useGetStoryDetailsQuery(storyId);
    if (isLoading) {
        return (
            <SkeletonStoryItem />
        );
    }
    else if (error) {
        return (<ErrorPage message={`Error loading stories!`}/>);
    } else if (data) {
        return (
            <StoryItemDisplay data={data} />
        );
    }
}