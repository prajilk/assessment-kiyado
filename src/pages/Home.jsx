import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Featured from "@/components/featured/Featured";

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <main className="flex-1">
                <Hero />
                <Featured />
            </main>
        </div>
    );
}
