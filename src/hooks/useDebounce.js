import { useEffect, useState } from "react";

export function useDebounce(value, delay = 500) {
    // Initialize the debounced value with the initial value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}