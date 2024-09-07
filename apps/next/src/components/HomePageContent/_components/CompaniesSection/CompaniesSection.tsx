"use client";
import Image from "next/image";

type CompaniesSectionProp = {
  CompanyBadges: string[];
};

const CompaniesSection = ({ CompanyBadges }: CompaniesSectionProp) => {
  return (
    <div className="flex flex-col gap-10 lg:my-14">
      <p className="text-white text-4xl font-bold w-full text-center line-clamp-2">
        Built by professionals from top companies.
      </p>

      <div className="container">
        <div className="flex justify-around gap-4 bg-[#181818] w-full h-[10rem]  rounded-[2rem]">
          {CompanyBadges.map((companyBadge, index) => (
            <Image
              src={companyBadge}
              alt={`badge-${index}`}
              width={50}
              height={50}
              className="object-none w-[173px] h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompaniesSection;
