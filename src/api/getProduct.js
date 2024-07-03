import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleGetProduct(id) {
    const { data } = await axios.get(`/products/${id}`);
    return data;
}

export function useProduct(id) {
    // React query Logic
    return useQuery({
        queryKey: ["product"],
        queryFn: () => handleGetProduct(id),
        retry: false,
    });
}