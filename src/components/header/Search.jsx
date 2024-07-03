import { useState } from "react";
import { Frown } from "lucide-react";
import { useSearch } from "@/api/search";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "../ui/input";
import { useNavigate } from "react-router";

const Search = () => {
    const navigate = useNavigate();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const debouncedSearchKeyword = useDebounce(searchKeyword);

    const { data, isLoading } = useSearch(debouncedSearchKeyword);

    function handleClickLink(id) {
        console.log(id);
        navigate(`/store/${id}`);
        setShowDropdown(false);
    }

    return (
        <div
            className="relative max-w-sm w-full space-y-1"
            tabIndex={0}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setShowDropdown(false)}
        >
            <Input
                type="text"
                placeholder="Search..."
                value={searchKeyword}
                onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    !showDropdown && setShowDropdown(true);
                }}
                className="bg-muted"
            />
            <div
                className={`scrollbar-thin absolute z-[9999] max-h-[500px] min-h-fit w-full overflow-y-scroll rounded-xl bg-white p-4 shadow-lg ${
                    !showDropdown && "hidden"
                }`}
            >
                {!searchKeyword ? (
                    <div>Search Products...</div>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data && data.length !== 0 ? (
                    data.map((item, i) => (
                        <div
                            onClick={() => handleClickLink(item.id)}
                            className="flex cursor-pointer gap-3 border-b px-1 py-2 duration-500 hover:bg-gray-100"
                            key={i}
                        >
                            <div className="relative h-14 w-14 flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.title + "Image"}
                                    className="bg-gray-100"
                                />
                            </div>
                            <div>
                                <h1 className="cutoff-text font-medium">
                                    {item.title}
                                </h1>
                                <p className="font-Roboto text-sm text-muted-foreground">
                                    {23}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    data && (
                        <div className="flex flex-col items-center justify-center gap-2 py-10">
                            <Frown
                                className="animate-bounce text-gray-300"
                                size={40}
                            />
                            <h1 className="text-muted-foreground">
                                Sorry, No matches were found.
                            </h1>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Search;
