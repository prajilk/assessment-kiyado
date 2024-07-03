import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import queryConfig from "./config/react-query";

import PageLoading from "./components/common/PageLoading";
import Error404 from "./components/common/Error404";
import Footer from "./components/footer/Footer";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const StoreRoute = lazy(() => import("./routes/Store"));

const queryClient = new QueryClient({
    defaultOptions: queryConfig,
});

function App() {
    return (
        <Suspense fallback={<PageLoading />}>
            <div className="App min-h-screen flex flex-col">
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="*" element={<Error404 />} />
                        <Route path="/" element={<Home />} />
                        <Route path="store/*" element={<StoreRoute />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </QueryClientProvider>
                <Footer />
            </div>
            <Toaster position="top-right" />
        </Suspense>
    );
}

export default App;
