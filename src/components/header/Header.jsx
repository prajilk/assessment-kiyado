import { Link } from "react-router-dom";
import { ShoppingBagIcon, ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import Search from "./Search";
import { useSelector } from "react-redux";

export default function Header() {
    // Get the cart array from the Redux store
    const cart = useSelector((state) => state.cartReducer);
    return (
        <header className="px-4 lg:px-6 py-5 space-y-5 border-b shadow">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center justify-center">
                    <ShoppingBagIcon className="h-6 w-6" />
                    <span className="sr-only">Simple Ecommerce</span>
                </Link>
                <div className="max-w-sm w-full hidden md:block">
                    <Search />
                </div>
                <nav className="flex gap-4 sm:gap-6">
                    <Link
                        to="/"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Home
                    </Link>
                    <Link
                        to="/store"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Store
                    </Link>
                    <Link to="/cart" className="relative">
                        <ShoppingCart className="w-6 h-6" />
                        <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs">
                            {cart?.length}
                        </Badge>
                    </Link>
                </nav>
            </div>
            <div className="max-w-sm md:hidden">
                <Search />
            </div>
        </header>
    );
}
