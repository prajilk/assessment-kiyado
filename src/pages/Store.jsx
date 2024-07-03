import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAllProducts } from "@/api/getAllProducts";
import ProductCard from "@/components/store/ProductCard";
import Header from "@/components/header/Header";

export default function Store() {
    const { data: products } = useAllProducts();
    const [selectedCategory, setSelectedCategory] = useState([]);

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
                                <div className="grid gap-2">
                                    <Label className="flex items-center gap-2 font-normal cursor-pointer">
                                        <Checkbox
                                            checked={selectedCategory.includes(
                                                "men's clothing"
                                            )}
                                            onCheckedChange={() =>
                                                handleCategoryChange(
                                                    "men's clothing"
                                                )
                                            }
                                        />
                                        Men's Clothing
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox
                                            checked={selectedCategory?.includes(
                                                "jewelery"
                                            )}
                                            onCheckedChange={() =>
                                                handleCategoryChange("jewelery")
                                            }
                                        />
                                        Jewelery
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox
                                            checked={selectedCategory.includes(
                                                "electronics"
                                            )}
                                            onCheckedChange={() =>
                                                handleCategoryChange(
                                                    "electronics"
                                                )
                                            }
                                        />
                                        Electronics
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox
                                            checked={selectedCategory.includes(
                                                "women's clothing"
                                            )}
                                            onCheckedChange={() =>
                                                handleCategoryChange(
                                                    "women's clothing"
                                                )
                                            }
                                        />
                                        Women's Clothing
                                    </Label>
                                </div>
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

function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    );
}
