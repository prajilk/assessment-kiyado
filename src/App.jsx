import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import queryConfig from "./config/react-query";
import PageLoading from "./components/common/PageLoading";
import Error404 from "./components/common/Error404";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

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
                        <Route path="/store" element={<Store />} />
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
