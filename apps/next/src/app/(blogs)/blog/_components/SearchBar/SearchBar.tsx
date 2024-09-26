import { Input } from "@dspcoder/ui/components/ui/input";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="my-4">
      <Input
        id="search-bar"
        type="search"
        placeholder="Search blogs..."
        className="pl-10"
      />
    </div>
  );
};

export default SearchBar;
