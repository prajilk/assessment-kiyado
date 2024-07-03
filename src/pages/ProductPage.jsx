import { useProduct } from "@/api/getProduct";
import Error404 from "@/components/common/Error404";
import PageLoading from "@/components/common/PageLoading";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function ProductPage() {
    // Get the cart array from the Redux store
    const cartArray = useSelector((state) => state.cartReducer);

    // Getting the product ID from the URL parameters
    const { id } = useParams();

    const { data: product, isLoading, error } = useProduct(id); // Get product by its id from the API

    const queryClient = useQueryClient();

    // Invalidating the product query when the ID changes
    useEffect(() => {
        queryClient.invalidateQueries(["product"]);
    }, [id]);

    const dispatch = useDispatch();

    // Function to handle adding the product to the cart
    function handleAddToCart() {
        dispatch(
            addToCart({
                id: product?.id,
                title: product?.title,
                description: product?.description,
                image: product?.image,
                price: product?.price,
            })
        );
        toast.success("Product added to cart successfully!");
    }

    if (isLoading) {
        return <PageLoading />;
    }

    if (error) {
        return <Error404 />;
    }

    return (
        <>
            <Header />
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
                <div className="grid gap-4">
                    <div className="grid gap-4">
                        <img
                            src={product?.image}
                            alt={product?.title}
                            width={600}
                            height={900}
                            className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
                        />
                    </div>
                </div>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <h1 className="font-bold text-3xl">{product?.title}</h1>
                    </div>
                    <div className="text-4xl font-bold">${product?.price}</div>
                    {cartArray?.find((item) => item.id === product?.id) ? (
                        <Link to="/cart" className="w-full">
                            <Button
                                size="sm"
                                variant="outline"
                                className="w-full"
                            >
                                Go to cart
                            </Button>
                        </Link>
                    ) : (
                        <Button onClick={handleAddToCart} size="lg">
                            Add to Cart
                        </Button>
                    )}
                    <hr />
                    <div className="grid gap-4 text-sm leading-loose">
                        <h2 className="font-bold text-lg">Product Details</h2>
                        <p>{product?.description}</p>
                        <h2 className="font-bold text-lg">Product Category</h2>
                        <span className="font-medium capitalize">
                            {product?.category}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
