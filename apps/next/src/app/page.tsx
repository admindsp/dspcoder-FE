import AiInterviewBasedSection from "@/components/AIbasedInterviewSection/AiInterviewBasedSection";
import CompaniesSection from "@/components/CompaniesSection/CompaniesSection";
import FirmwareSection from "@/components/FirmwareSection/FirmwareSection";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import HomePageBanners from "@/components/HomePageBanners/HomePageBanners";
import HomePageFeatureContent from "@/components/HomePageFeatureContent/HomePageFeatureContent";
import HomePageTestimonials from "@/components/HomePageTestimonials/HomePageTestimonials";
import PracticeEverySection from "@/components/PracticeEverySection/PracticeEverySection";
import PrepareCodingInterview from "@/components/PrepareCodingInterview/PrepareCodingInterview";

export default function Home() {
  return (
    <div className="min-h-screen p-4 bg-[#0e0e0e]">
        {/*<HomePageBanners />
        <HomePageFeatureContent />
        <HomePageTestimonials />*/}
        {/*{ Yaha se kaam start karna hai hai Okay }*/}
        <div className="">  
            <HomeBanner/> {/*✅*/}
            <PrepareCodingInterview/> {/*✅*/}
            <AiInterviewBasedSection/> {/*✅*/}
            <FirmwareSection/> {/*✅*/}
            {/*<PracticeEverySection/>*/}
            <CompaniesSection/>
          </div>
    </div>
  );
}
