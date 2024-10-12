import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonStoryItem() {
    return (
        <div className="m-auto py-2 grid grid-cols-10 ring-2 mb-2 rounded-lg">
            <div className="col-span-1 flex flex-col justify-around items-center">
                <Skeleton className="h-9 w-6"></Skeleton>
            </div>
            <div className="col-span-9">
                <Skeleton className="h-8 w-full"></Skeleton>
            </div>
        </div>
    );
}