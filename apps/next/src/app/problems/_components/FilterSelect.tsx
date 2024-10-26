import React, { useEffect, useState, useCallback } from "react";
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
import { useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/utils/createQueryString";

type Props = {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  disabled?: boolean;
};

export const difficulty_label_styles = tv({
  base: "text-black text-xl",
  slots: {
    Easy: "!text-green-500",
    Medium: "!text-yellow-500",
    Hard: "!text-red-500",
  },
});

const FilterSelect = ({ placeholder, options, disabled = false }: Props) => {
  const { Easy, Medium, Hard } = difficulty_label_styles();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    const paramValue = searchParams.get(placeholder.toLowerCase()) || "";
    setSelectedValue(paramValue);
  }, [searchParams, placeholder]);

  const handleFilterChange = useCallback(
    (value: string) => {
      setSelectedValue(value);
      const newQueryString = createQueryString(
        searchParams,
        placeholder.toLowerCase(),
        value.toLowerCase()
      );

      if (value !== selectedValue) {
        router.push(`/problems?${newQueryString}`, { scroll: false });
      }
    },
    [searchParams, placeholder, router, selectedValue]
  );

  return (
    <Select onValueChange={handleFilterChange} value={selectedValue}>
      <SelectTrigger
        disabled={disabled}
        className="bg-grayish px-4 font-semibold text-grayish_text w-full max-h-[32px] lg:min-w-[120px] border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-grayish font-semibold text-grayish_text outline-none ring-offset-0 border-none">
        <SelectGroup>
          {options.map((option) => (
            <SelectItem className="" key={option.value} value={option.value}>
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
