import EmptyCart from "@/components/cart/EmptyCart";
import Item from "@/components/cart/Item";
import { Show } from "@/components/common/Show";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { emptyCart } from "@/slice/cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Cart() {
    const cartArray = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const totalPrice = Math.ceil(
        cartArray?.reduce((acc, curr) => acc + curr.price, 0)
    );

    function handleCheckout() {
        toast.success("Order placed successfully!");
        dispatch(emptyCart());
    }

    return (
        <>
            <Show>
                <Show.When isTrue={cartArray.length !== 0}>
                    <Header />
                    <div className="container mx-auto px-4 md:px-6 py-8">
                        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                        <div className="grid md:grid-cols-[1fr_300px] gap-8">
                            <div className="space-y-6">
                                {cartArray?.map((cartItem, i) => (
                                    <Item key={i} cartItem={cartItem} />
                                ))}
                            </div>
                            <div className="bg-muted/40 rounded-lg p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium">
                                        ${totalPrice}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Shipping</span>
                                    <span className="font-medium">$0.00</span>
                                </div>
                                <hr />
                                <div className="flex items-center justify-between font-medium text-lg">
                                    <span>Total</span>
                                    <span>${totalPrice}</span>
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <Button size="lg" onClick={handleCheckout}>
                                        Proceed to Checkout
                                    </Button>
                                    <Link to="/store" className="w-full">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full"
                                        >
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Show.When>
                <Show.Else>
                    <Header />
                    <EmptyCart />
                </Show.Else>
            </Show>
        </>
    );
}
