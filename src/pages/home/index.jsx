import Itinerary from "../../components/modules/common/Itinerary.jsx";
import HomeHero from "../../components/modules/home/hero/HomeHero.jsx";
import PopularAttractions from "../../components/modules/home/PopularAttractions.jsx";

const HomePage = () => {
  return (
    <div>
      <main className="px-[10%] py-lgx min-h-[calc(100vh-70px)] relative bg-gray-100 text-gray-900">
        <HomeHero />
        <PopularAttractions />
        <Itinerary />
      </main>
    </div>
  );
};

export default HomePage;
