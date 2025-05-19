import React, { useState } from "react";
import HomeHeroLeftSection from "./HomeHeroLeftSection";
import HomeHeroRightSection from "./HomeHeroRightSection";
import {IconCircle, IconCircleFilled} from "@tabler/icons-react";

const HomeHero = () => {
  const [data, setData] = useState({
    location: {
      name: "Pokhara Valley",
      location: "Pokhara",
      country: "Nepal",
      description:
        "Nestled in the foothills of the Annapurna range, Pokhara is Nepal's adventure capital and a gateway to the Himalayas. Known for its tranquil lakes, panoramic mountain views, and vibrant culture, this picturesque valley offers unforgettable experiences for travelers seeking both relaxation and adventure.",
      tags: ["Mountains", "Lakes", "Trekking", "Food"],
    },

    weather: {
      temperature: 23,
      unit: "C",
      sky: "Partly Cloudy",
      highestTemperature: 25,
      lowestTemperature: 18,
    },

    demographic: {
      population: 350000,
      language: "Nepali",
      timeZone: "GMT +5:45",
      currency: "NPR",
    },
  });

  
  return (
    <section className="">
      <div className="text-3xl font-bold text-gray-900 mb-sm flex items-center justify-between">
        {data.location.name}

        <span className="text-white bg-primary text-sm px-xs py-xxs rounded-lg flex gap-xs items-center"><IconCircleFilled size={12}/> Live</span>
      </div>

      <div className="absolute top-none right-none w-[160px] h-[160px] bg-primary-light opacity-10 rounded-bl-full z-10"></div>

      {/*<div className="flex items-center justify-between mb-sm relative z-10">*/}
      {/*  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">*/}
      {/*    Current Location*/}
      {/*  </h1>*/}
      {/*  <div className="bg-green-400 rounded-full text-xs text-green-800 flex justify-center items-center px-sm py-xxs font-semibold shadow-sm">*/}
      {/*    <span className="inline-block w-[8px] h-[8px] rounded-full bg-green-800 mr-xxs animate-pulse"></span>*/}
      {/*    Live*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="flex gap-lgx mt-[28px] relative z-10 flex-col lg:flex-row">*/}
      {/*  <HomeHeroLeftSection data={data.location} />*/}

      {/*</div>*/}

      <HomeHeroRightSection
          weather={data.weather}
          demographic={data.demographic}
      />
    </section>
  );
};

export default HomeHero;
