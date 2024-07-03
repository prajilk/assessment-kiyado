import { Loader2 } from "lucide-react";

const PageLoading = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[rgb(247,250,252)]">
            <Loader2 className="animate-spin" />
        </div>
    );
};

export default PageLoading;
