import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const EmptyCart = () => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center col-span-4 mt-10">
            <img src="https://gospeedy.co.in/images/empty.gif" alt="" />
            <h1 className="text-red-500 text-3xl font-semibold">
                Cart is empty
            </h1>
            <Link to="/">
                <Button>Back to home</Button>
            </Link>
        </div>
    );
};

export default EmptyCart;
