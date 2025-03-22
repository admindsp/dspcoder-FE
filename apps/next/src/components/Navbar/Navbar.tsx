import Link from "next/link";
import AuthenticatedSection from "./AuthenticatedSection";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-[#131315] border-b border-[#2B2B2B] text-white  px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-6">
        <Link className="flex gap-2 items-center" href="/">
          <Logo />
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
      </div>
    </nav>
  );
};

export default Navbar;
