import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleGetProducts(limit) {
    const { data } = await axios.get("/products", { params: limit ? { _limit: limit } : {} });
    return data;
}

export function useAllProducts(limit) {
    // React query Logic
    return useQuery({
        queryKey: ["products"],
        queryFn: () => handleGetProducts(limit),
        retry: false,
    });
}