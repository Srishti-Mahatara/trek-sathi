
import MapView from "../../components/modules/home/MapView.jsx";
import LocationInfo from "../../components/modules/home/LocationInfo.jsx";
import SideAttractions from "../../components/modules/home/SideAttractions.jsx";
import HomeHero from "../../components/modules/home/hero/HomeHero.jsx";
import Reviews from "../../components/modules/home/Reviews.jsx";
import ReviewsSection from "../../components/modules/home/Reviews.jsx";
import {LocationDetailDescription} from "../../components/modules/location-detail/LocationDetailDescription.jsx";
import {HomeInfoComponent} from "../../components/modules/home/HomeInfoComponent.jsx";
import PopularAttractions from "../../components/modules/home/PopularAttractions.jsx";
import Itinerary from "../../components/modules/common/Itinerary.jsx";

const HomePage = () => {

    return (
        <div className={'bg-gray-100 pt-md'}>
            <div className="relative bg-gray-100 text-gray-900 flex flex-col px-xl ">
                <HomeHero />
                <PopularAttractions />
                <Itinerary />
            </div>


            {/*<div className=" bg-gray-100 px-xl pb-lg">*/}
            {/*    <div className={'h-[60vh] flex  gap-lg'}>*/}
            {/*        <div className="w-3/5  shadow-lg rounded-lg  h-[60vh] ">*/}
            {/*            <MapView />*/}
            {/*        </div>*/}
            {/*        <div className="w-2/5 h-full px-md bg-white rounded-lg shadow-lg overflow-y-auto z-10">*/}
            {/*            <SideAttractions />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={'px-xl bg-gray-100 mt-sm'}>
                <HomeInfoComponent/>
            </div>


            <div className="bg-gray-100 px-xl pb-lg mt-2xl">
                <ReviewsSection/>
            </div>
        </div>
    );
};

export default HomePage;
