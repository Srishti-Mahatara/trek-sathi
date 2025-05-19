
import MapView from "../../components/modules/home/MapView.jsx";
import LocationInfo from "../../components/modules/home/LocationInfo.jsx";
import SideAttractions from "../../components/modules/home/SideAttractions.jsx";
import HomeHero from "../../components/modules/home/hero/HomeHero.jsx";
import Reviews from "../../components/modules/home/Reviews.jsx";
import ReviewsSection from "../../components/modules/home/Reviews.jsx";

const HomePage = () => {
    return (
        <div>
            <div className="relative bg-gray-100 text-gray-900 flex flex-col px-xl pt-md">
                <HomeHero />
            </div>
            <div className=" bg-gray-100 px-xl pb-lg">
                <div className={'h-[60vh] flex  gap-lg'}>
                    <div className="w-3/5  shadow-lg rounded-lg  h-[60vh] ">
                        <MapView />
                    </div>
                    <div className="w-2/5 h-full px-md bg-white rounded-lg shadow-lg overflow-y-auto z-10">
                        <SideAttractions />
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 px-xl pb-lg">
                <ReviewsSection/>

            </div>
        </div>
    );
};

export default HomePage;