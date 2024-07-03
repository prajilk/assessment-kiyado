import axios from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

async function getSearchResult(query) {
    if (!query) return null;
    const { data } = await axios.get(`/products?title_like=${query}`);
    return data;
}

export function useSearch(search) {
    return useQuery({
        queryKey: ["search", search],
        queryFn: () => getSearchResult(search)
    })
}