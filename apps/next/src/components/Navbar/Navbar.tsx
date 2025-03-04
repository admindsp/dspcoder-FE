import Link from "next/link";
import AuthenticatedSection from "./AuthenticatedSection";
import { FaBlog } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-[#131315] border-b border-[#2B2B2B] text-white py-3 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-6">
        <Link className="flex gap-2 items-center" href="/">
          <Logo />
          <span className="font-bold text-lg text-white">DSPCODER</span>
        </Link>

        <div className="h-6 border-l border-[#2B2B2B]" />

        <Link
          href="/problems"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
        >
          Problems
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <AuthenticatedSection />

        {/* <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-300 hover:text-white gap-2 transition-all duration-300"
        >
          <FaBlog className="text-xl" /> Blog
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
