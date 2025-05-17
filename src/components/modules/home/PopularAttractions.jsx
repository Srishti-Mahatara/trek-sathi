import React, { useState } from "react";
import AttractionCard from "../../common/AttractionCard";

const PopularAttractions = () => {
  const [attractions, setAttractions] = useState([
    {
      image: "./images/phewa-lake.webp",
      title: "Phewa Lake",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
    },
    {
      image: "./images/phewa-lake.webp",
      title: "Mahendra Cave",
      distance: 1.2,
      unit: "km",
      description: "Dark cave for those adventure and exploring enthusiasts.",
      rating: 4.5,
    },
    {
      image: "./images/phewa-lake.webp",
      title: "World Peace Pagoda",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
    },
    {
      image: "./images/phewa-lake.webp",
      title: "Davis Falls",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
    },
  ]);

  return (
    <section className="mb-lgx animate-[fadeIn_0.8s_ease-out_forwards]">
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
