import React from "react";
import LANGUAGE_VERSIONS from "../constants";

type Props = {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const ConfigSelectorMenu = ({
  selectedLanguage,
  setSelectedLanguage,
}: Props) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="bg-[#000000] text-white flex px-4 py-1">
      <div className=" text-sm language-selector-menu w-full flex gap-3 items-center justify-end">
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="text-black border-none px-2 py-1 rounded"
        >
          {Object.entries(LANGUAGE_VERSIONS).map(([language, version]) => (
            <option key={language} value={language}>
              {version}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ConfigSelectorMenu;
