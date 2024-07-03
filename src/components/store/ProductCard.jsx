import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/cartSlice";

const ProductCard = ({ product }) => {
    // Get the cart array from the Redux store
    const cartArray = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

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

    return (
        <div
            key={product.id}
            className="bg-background rounded-lg shadow-sm overflow-hidden flex flex-col"
        >
            <img
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-60 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    {product.description.slice(0, 20)}...
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-base font-semibold">
                        ${product.price}
                    </span>
                    {cartArray?.find((item) => item.id === product.id) ? (
                        <Link to="/cart">
                            <Button size="sm" variant="outline">
                                Go to cart
                            </Button>
                        </Link>
                    ) : (
                        <Button size="sm" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
