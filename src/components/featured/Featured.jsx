import { useAllProducts } from "@/api/getAllProducts";
import ProductCard from "../store/ProductCard";

const Featured = () => {
    const { data: products } = useAllProducts(3);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Featured Products
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Discover our curated selection of the best products
                            for your home, office, and lifestyle.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                    {products?.map((product, i) => (
                        <ProductCard product={product} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
