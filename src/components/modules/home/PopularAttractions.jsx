import React, { useState } from "react";
import AttractionCard from "../../common/AttractionCard";
import {useNavigate} from "react-router";

const PopularAttractions = () => {
  const [attractions, setAttractions] = useState([
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg",
      title: "Phewa Lake",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahendra_Cave.JPG",
      title: "Mahendra Cave",
      distance: 1.2,
      unit: "km",
      description: "Dark cave for those adventure and exploring enthusiasts.",
      rating: 4.5,
    },
    {
      image: "https://api.luxuryholidaynepal.com/media/blog/banner/how-to-reach-peace-pagoda-pokhara.jpg",
      title: "World Peace Pagoda",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
      title: "Davis Falls",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
    },
  ]);


  return (
    <section className="animate-[fadeIn_0.8s_ease-out_forwards]">
      <h2 className="text-3xl font-bold text-gray-800 mb-md flex items-center gap-[10px]">
        <i className="fas fa-star text-primary"></i> Popular Attractions Nearby
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md mb-lgx">
        {attractions.map((item, index) => (
          <AttractionCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularAttractions;
