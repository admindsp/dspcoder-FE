import React from "react";

const NavbarSkeleton = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex gap-6 overflow-hidden min-h-10 max-h-12 sticky">
      <div className="w-24 flex justify-center items-center object-contain">
        <span className="font-bold">DSPCODER</span>
      </div>

      <div className="flex justify-between w-full items-center">
        <p className="font-sans font-semibold hover:text-gray-300 transition-all text-sm">
          Problems Page
        </p>
        <div className="icons flex gap-3 items-center">
          <p className="inline-flex justify-center items-center gap-2 bg-[#616828] hover:bg-[#4d531f] px-2 py-1 rounded-md transition-all duration-300">
            Blog
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;
