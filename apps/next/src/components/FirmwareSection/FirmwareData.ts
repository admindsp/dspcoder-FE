import { IconType } from "react-icons";
import { IoLogoJavascript } from "react-icons/io";
import { VscTerminalPowershell } from "react-icons/vsc";
import { VscJson } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { FaPython, FaPhp, FaMarkdown, FaExclamation } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { PiBracketsAngleBold } from "react-icons/pi";
import { DiJava } from "react-icons/di";

interface Language {
    icon: IconType;
    language: string;
    color: string;
}

const data: Language[] = [
    {
        icon: IoLogoJavascript,
        language: "JavaScript",
        color: "yellow",
    },
    {
        icon: SiTypescript,
        language: "TypeScript",
        color: "blue",
    },
    {
        icon: FaPython,
        language: "Python",
        color: "blue",
    },
    {
        icon: TbBrandCSharp,
        language: "C#",
        color: "blue",
    },
    {
        icon: CgCPlusPlus,
        language: "C++",
        color: "blue",
    },
    {
        icon: PiBracketsAngleBold,
        language: "HTML",
        color: "red",
    },
    {
        icon: DiJava,
        language: "Java",
        color: "red",
    },
    {
        icon: VscJson,
        language: "JSON",
        color: "yellow",
    },
    {
        icon: FaPhp,
        language: "PHP",
        color: "purple",
    },
    {
        icon: FaMarkdown,
        language: "Markdown",
        color: "blue",
    },
    {
        icon: VscTerminalPowershell,
        language: "Powershell",
        color: "blue",
    },
    {
        icon: FaExclamation,
        language: "YAML",
        color: "purple",
    },
];

export default data;
