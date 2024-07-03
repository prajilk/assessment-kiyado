import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <img
                        src="/shopping.svg"
                        alt="Hero"
                        className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Discover the Best Products for Your Lifestyle
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Explore our curated collection of high-quality
                                products that will elevate your everyday
                                experience.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href="/store"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
