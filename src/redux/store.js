import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cart";

const store = configureStore({
    reducer: {
        cartReducer: cartSlice
    }
})

export default store;