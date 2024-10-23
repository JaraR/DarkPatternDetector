import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AutoplaySettings() {
    return (
        <>
            <p>hello Autoplay!</p>
            <Button asChild>
                <Link to="/">Home</Link>
            </Button>
        </>
    )
}