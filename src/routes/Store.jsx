import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const ProductPage = lazy(() => import("@/pages/ProductPage"));
const Store = lazy(() => import("@/pages/Store"));

const StoreRoute = () => {
    return (
        <Routes>
            <Route index element={<Store />} />
            <Route path=":id" element={<ProductPage />} />
        </Routes>
    );
};

export default StoreRoute;
