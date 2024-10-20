import Link from "next/link";
import AuthenticatedSection from "./AuthenticatedSection";
import { FaBlog } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex gap-6 overflow-hidden min-h-10 max-h-12 sticky">
      <div className="w-24 flex justify-center items-center object-contain">
        <Link href="/">
          <span className="font-bold">DSPCODER</span>
        </Link>
      </div>

      <div className="flex justify-between w-full items-center">
        <Link
          href="/problems"
          className="font-sans font-semibold hover:text-gray-300 transition-all text-sm"
        >
          Problems
        </Link>
        <div className="icons flex gap-3 items-center">
          <AuthenticatedSection />
          <Link
            className="inline-flex justify-center items-center gap-2 bg-[#616828] hover:bg-[#4d531f] px-2 py-1 rounded-md transition-all duration-300"
            href="/blog"
          >
            Blog <FaBlog />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
