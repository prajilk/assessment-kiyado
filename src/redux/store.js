import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";

// Create a new Redux store using the configureStore function
const store = configureStore({
    // Define the reducer configuration for the store
    reducer: {
        cartReducer: cartSlice
    }
});

export default store;