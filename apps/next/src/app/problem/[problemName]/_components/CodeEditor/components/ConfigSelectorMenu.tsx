import React from "react";
import {
  CODE_SNIPPETS,
  LANGUAGE_VERSIONS,
} from "../../../../../../constants/constants";

type Props = {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const ConfigSelectorMenu = ({
  selectedLanguage,
  setSelectedLanguage,
  setValue,
}: Props) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
    setValue(CODE_SNIPPETS[event.target.value as keyof typeof CODE_SNIPPETS]);
  };

  return (
    <div className="bg-[#000000] text-white flex px-4 py-2 ">
      <div className=" text-sm language-selector-menu w-full flex gap-3 items-center justify-end">
        <p className="text-gray-400 font-bold text-xs">Language</p>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="border-none px-2 py-1 rounded outline-none text-xs bg-gray-600 text-white transition-all"
        >
          {Object.entries(LANGUAGE_VERSIONS).map(([language, version]) => (
            <option
              className="outline-none transition-all absolute"
              key={language}
              value={language}
            >
              {version.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ConfigSelectorMenu;
