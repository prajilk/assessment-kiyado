import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the cart reducer
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // Add an item to the cart
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        // Remove an item from the cart
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        },
        // Empty the entire cart
        emptyCart: (state) => {
            return state = []
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;