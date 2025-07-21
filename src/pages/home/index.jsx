
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
import { useState } from "react";

const HomePage = () => {

    const [attractions, setAttractions] = useState([
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg",
          title: "Phewa Lake",
          distance: 4,
          unit: "km",
          description: "Beautiful freshwater lake with mountain reflections",
          rating: 4.5,
          type:"attraction"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahendra_Cave.JPG",
          title: "Mahendra Cave",
          distance: 1.2,
          unit: "km",
          description: "Dark cave for those adventure and exploring enthusiasts.",
          rating: 4.5,
          type:"attraction"
        },
        {
          image: "https://api.luxuryholidaynepal.com/media/blog/banner/how-to-reach-peace-pagoda-pokhara.jpg",
          title: "World Peace Pagoda",
          distance: 4,
          unit: "km",
          description: "Beautiful freshwater lake with mountain reflections",
          rating: 4.5,
          type:"attraction"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
          title: "Davis Falls",
          distance: 4,
          unit: "km",
          description: "Beautiful freshwater lake with mountain reflections",
          rating: 4.5,
          type:"attraction"
        },
      ]);


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

    return (
        <div className={'bg-gray-100 pt-md'}>
            <div className="relative bg-gray-100 text-gray-900 flex flex-col px-xl ">
                <HomeHero />
                <PopularAttractions data={attractions}/>
                <PopularAttractions data={hotels}/>
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
