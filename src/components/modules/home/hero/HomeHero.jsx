import { useState } from "react";
import HomeHeroLeftSection from "./HomeHeroLeftSection";
import HomeHeroRightSection from "./HomeHeroRightSection";

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
    <section className="bg-white rounded-lg p-lg shadow-md flex flex-col justify-center mb-lgx relative overflow-hidden">
      <div className="absolute top-none right-none w-[160px] h-[160px] bg-primary-light opacity-10 rounded-bl-full z-10"></div>

      <div className="flex items-center justify-between mb-sm relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Current Location
        </h1>
        <div className="bg-green-400 rounded-full text-xs text-green-800 flex justify-center items-center px-sm py-xxs font-semibold shadow-sm">
          <span className="inline-block w-[8px] h-[8px] rounded-full bg-green-800 mr-xxs animate-pulse"></span>
          Live
        </div>
      </div>

      <div className="flex gap-lgx mt-[28px] relative z-10 flex-col lg:flex-row">
        <HomeHeroLeftSection data={data.location} />
        <HomeHeroRightSection
          weather={data.weather}
          demographic={data.demographic}
        />
      </div>
    </section>
  );
};

export default HomeHero;
