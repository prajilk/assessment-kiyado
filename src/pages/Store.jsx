import { useState, useMemo } from "react";
import { useAllProducts } from "@/api/getAllProducts";
import ProductCard from "@/components/store/ProductCard";
import Header from "@/components/header/Header";
import Filter from "@/components/store/Filter";

export default function Store() {
    const { data: products } = useAllProducts(); // Get all products from the API

    // State to store the selected category
    const [selectedCategory, setSelectedCategory] = useState([]);

    // Memoized function to filter products based on the selected category
    const filteredProducts = useMemo(() => {
        return products?.filter((product) => {
            if (
                selectedCategory.length > 0 &&
                !selectedCategory.includes(product.category)
            ) {
                return false;
            }
            return true;
        });
    }, [selectedCategory, products]);

    function handleCategoryChange(category) {
        // Toggle the category in the selected category state
        setSelectedCategory((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat != category)
                : [...prev, category]
        );
    }

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 md:px-6 py-4">
                <div className="grid md:grid-cols-[240px_1fr] gap-8">
                    <div className="bg-background rounded-lg shadow-sm p-6 pt-3">
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>
                        <div className="grid gap-4">
                            <div>
                                <h3 className="text-base font-medium mb-2">
                                    Category
                                </h3>
                                <Filter
                                    handleCategoryChange={handleCategoryChange}
                                    selectedCategory={selectedCategory}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold">Store</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts?.map((product, i) => (
                                <ProductCard product={product} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
