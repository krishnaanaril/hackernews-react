import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Share1Icon } from "@radix-ui/react-icons";

export function ShareButton({ storyInfo }: any) {
    const { toast } = useToast();
    async function handleShare() {
        const shareData = {
            title: storyInfo.title,
            text: storyInfo.text ?? storyInfo.title,
            url: storyInfo.url,
        };
        try {
            await navigator.share(shareData);            
        } catch (err) {
            toast({
                description: "An error occurred during share.",
            });
        }
    }

    return (
        <Button variant='ghost' onClick={handleShare}>
            <Share1Icon className="w-5 h-5 fill-current text-orange-400" />
            <span className="pl-2 ">Share</span>
        </Button>
    );
}