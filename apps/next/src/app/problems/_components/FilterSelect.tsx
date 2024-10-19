import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@dspcoder/ui/components/ui/select";
import { tv } from "tailwind-variants";
import { cn } from "@dspcoder/ui/lib/utils";

type Props = {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
};

export const difficulty_label_styles = tv({
  base: "text-black text-xl",
  slots: {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
  },
});

const FilterSelect = ({ placeholder, options }: Props) => {
  const { Easy, Medium, Hard } = difficulty_label_styles();
  return (
    <Select>
      <SelectTrigger className="bg-grayish text-white w-[180px] border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <span
                className={cn(
                  option.label === "Easy" && Easy(),
                  option.label === "Medium" && Medium(),
                  option.label === "Hard" && Hard()
                )}
              >
                {option.label}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterSelect;
