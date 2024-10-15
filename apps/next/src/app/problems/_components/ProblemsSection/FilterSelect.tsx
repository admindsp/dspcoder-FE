import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@dspcoder/ui/components/ui/select";

import getLabelStyle from "@/utils/problems";


type Props = {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
};

const FilterSelect = ({ placeholder, options }: Props) => {
  return (
    <Select>
      <SelectTrigger className="bg-grayish text-white w-[180px] border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder={placeholder}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <span className={getLabelStyle(option.label)}>
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
