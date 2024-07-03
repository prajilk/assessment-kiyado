import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { removeFromCart } from "@/slice/cart";
import { useDispatch } from "react-redux";

const Item = ({ cartItem }) => {
    const dispatch = useDispatch();
    function handleRemoveItem(id) {
        dispatch(removeFromCart(id));
    }
    return (
        <div className="grid grid-cols-[80px_1fr_50px_40px] items-center gap-4 bg-muted/40 rounded-lg p-4">
            <img
                src={cartItem.image}
                alt={cartItem.title}
                width={80}
                height={80}
                className="rounded-md object-cover"
            />
            <div>
                <h3 className="font-medium">{cartItem.title}</h3>
                <p className="text-sm text-muted-foreground">
                    {cartItem.description.slice(0, 30)}
                    ...
                </p>
            </div>
            <b>${cartItem.price}</b>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="flex-shrink-0"
                    onClick={() => handleRemoveItem(cartItem.id)}
                >
                    <Trash2 className="size-4 text-destructive" />
                </Button>
            </div>
        </div>
    );
};

export default Item;
