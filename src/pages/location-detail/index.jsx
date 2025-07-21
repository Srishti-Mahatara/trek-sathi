import Itinerary from "../../components/modules/common/Itinerary.jsx";
import Reviews from "../../components/modules/home/Reviews.jsx";
import ReviewsSection from "../../components/modules/home/Reviews.jsx";
import PokharaImage from "../../assets/images/pokhara.jpg"
import {LocationDetailHero} from "../../components/modules/location-detail/LocationDetailHero.jsx";
import {LocationDetailDescription} from "../../components/modules/location-detail/LocationDetailDescription.jsx";
import SideAttractions from "../../components/modules/home/SideAttractions.jsx";
import MapView from "../../components/modules/home/MapView.jsx";
import { useState } from "react";
import PopularAttractions from "../../components/modules/home/PopularAttractions.jsx";

export const LocationDetail = () => {

    const [hotels, setHotels] = useState([
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg",
          title: "Solti Hotel",
          distance: 4,
          unit: "km",
          description: "Beautiful freshwater lake with mountain reflections",
          rating: 4.5,
          type:"hotel"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahendra_Cave.JPG",
          title: "Hotel Mariott",
          distance: 1.2,
          unit: "km",
          description: "Dark cave for those adventure and exploring enthusiasts.",
          rating: 4.5,
          type:"hotel"
        },
        {
          image: "https://api.luxuryholidaynepal.com/media/blog/banner/how-to-reach-peace-pagoda-pokhara.jpg",
          title: "Hotel Pagoda",
          distance: 4,
          unit: "km",
          description: "Beautiful freshwater lake with mountain reflections",
          rating: 4.5,
          type:"hotel"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
          title: "Hotel Waterfall",
          distance: 4,
          unit: "km",
          description: "Beautiful freshwater lake with mountain reflections",
          rating: 4.5,
          type:"hotel"
        },
      ]);

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

       <div className="mt-xl">
        <PopularAttractions data={hotels}/>
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
