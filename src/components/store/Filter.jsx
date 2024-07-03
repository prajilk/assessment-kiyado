import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const Filter = ({ selectedCategory, handleCategoryChange }) => {
    return (
        <div className="grid gap-2">
            <Label className="flex items-center gap-2 font-normal cursor-pointer">
                <Checkbox
                    checked={selectedCategory.includes("men's clothing")}
                    onCheckedChange={() =>
                        handleCategoryChange("men's clothing")
                    }
                />
                Men's Clothing
            </Label>
            <Label className="flex items-center gap-2 font-normal cursor-pointer">
                <Checkbox
                    checked={selectedCategory?.includes("jewelery")}
                    onCheckedChange={() => handleCategoryChange("jewelery")}
                />
                Jewelery
            </Label>
            <Label className="flex items-center gap-2 font-normal cursor-pointer">
                <Checkbox
                    checked={selectedCategory.includes("electronics")}
                    onCheckedChange={() => handleCategoryChange("electronics")}
                />
                Electronics
            </Label>
            <Label className="flex items-center gap-2 font-normal cursor-pointer">
                <Checkbox
                    checked={selectedCategory.includes("women's clothing")}
                    onCheckedChange={() =>
                        handleCategoryChange("women's clothing")
                    }
                />
                Women's Clothing
            </Label>
        </div>
    );
};

export default Filter;
