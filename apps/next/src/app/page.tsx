import HomeSideCards from "@/components/HomeSideCards/HoneSideCards";

export default function Home() {
  return (
    <main className="flex justify-between">
      <div className="w-3/4 h-screen bg-gray-200">Dashboard</div>
      <div className="w-1/4 bg-gray-200 h-screen border-l-2 border-gray-400 px-4 py-4 border-opacity-50">
        <HomeSideCards />
      </div>
    </main>
  );
}
