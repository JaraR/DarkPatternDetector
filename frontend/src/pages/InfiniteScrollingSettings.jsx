import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export function InfiniteScrollingSettings() {
    return (
        <>
            <p>hello Infinite Scrolling!</p>
            <Button asChild>
                <Link to="/">Home</Link>
            </Button>
        </>
    )

}