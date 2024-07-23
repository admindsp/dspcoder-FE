import HomePageBanners from "@/components/HomePageBanners/HomePageBanners";
import HomePageFeatureContent from "@/components/HomePageFeatureContent/HomePageFeatureContent";
import HomePageTestimonials from "@/components/HomePageTestimonials/HomePageTestimonials";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="">
        <HomePageBanners />
        <HomePageFeatureContent />
        <HomePageTestimonials />
      </div>
    </div>
  );
}
