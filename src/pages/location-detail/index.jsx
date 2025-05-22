import Itinerary from "../../components/modules/common/Itinerary.jsx";
import Reviews from "../../components/modules/home/Reviews.jsx";
import ReviewsSection from "../../components/modules/home/Reviews.jsx";
import PokharaImage from "../../assets/images/pokhara.jpg"
import {LocationDetailHero} from "../../components/modules/location-detail/LocationDetailHero.jsx";
import {LocationDetailDescription} from "../../components/modules/location-detail/LocationDetailDescription.jsx";
import SideAttractions from "../../components/modules/home/SideAttractions.jsx";
import MapView from "../../components/modules/home/MapView.jsx";

export const LocationDetail = () => {
    return <div className="w-full  bg-gray-100 pt-md px-xl">

        <LocationDetailHero/>

        <LocationDetailDescription/>

        <div className=" bg-gray-100">
            <div className={'h-[60vh] flex  gap-lg'}>
                <div className="w-3/5  shadow-lg rounded-lg  h-[60vh] ">
                    <MapView />
                </div>
                <div className="w-2/5 h-full px-md bg-white rounded-lg shadow-lg overflow-y-auto z-10">
                    <SideAttractions />
                </div>
            </div>
        </div>

        <section className="bg-white rounded-lg shadow-md overflow-hidden mb-lg mt-xl mb-xl">
            <div className="px-lg">
                <div className="flex items-center gap-xs mb-lg">
                    <i className="fas fa-route text-primary text-xl"></i>
                </div>
                <Itinerary />
            </div>
        </section>

        <ReviewsSection/>
    </div>
}
