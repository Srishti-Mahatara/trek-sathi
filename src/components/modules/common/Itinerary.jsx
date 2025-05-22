import React, { useState } from "react";
import {IconRoute} from "@tabler/icons-react";

const Itinerary = () => {
  const [itineraries, setItineraries] = useState([
    {
      id: 1,
      time: "8:00 AM",
      title: "Sunrise at Sarangkot",
      description: "Witness breathtaking sunrise views of the Himalayan range",
    },
    {
      id: 2,
      time: "10:30 AM",
      title: "Boat Tour on Phewa Lake",
      description: "Witness breathtaking sunrise views of the Himalayan range",
    },
    {
      id: 3,
      time: "1:00 PM",
      title: "Lunch at Lakeside",
      description: "Enjoy local Nepali cuisine at a lakeside restaurant",
    },
    {
      id: 4,
      time: "3:00 PM",
      title: "Visit Peace Pagoda",
      description: "Hike to the World Peace Pagoda for panoramic views",
    },

    {
      id: 5,
      time: "7:00 PM",
      title: "Dinner and Cultural Show",
      description: "Experience traditional Nepali dance and music",
    },
  ]);

  return (
    <section className="animate-[fadeIn_0.8s_ease-out_forwards] ">
      <h2 className="text-3xl font-bold text-gray-800 mb-md flex items-center gap-[10px]">
        <IconRoute className={"text-primary"}/> Suggested Itinerary
      </h2>
      <div className="relative mb-lgx">
        <div className="absolute bottom-none left-[98px] h-[calc(100%-8px)] w-[2px] bg-primary-light"></div>

        {itineraries.map((item, index) => (
          <div className="flex mb-md relative" key={index}>
            <div className="absolute left-[94px] top-xs w-[10px] h-[10px] rounded-full bg-primary border-2 border-white z-10"></div>
            <div className="w-[80px] font-semibold text-gray-700 text-right pr-lgx flex-shrink-0">
              {item.time}
            </div>
            <div className="bg-white rounded-md p-sm ml-lgx flex-grow shadow-md border-l-4 border-primary-light transition-transform duration-200 hover:translate-x-[10px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-xs">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-xs leading-normal">
                {item.description}
              </p>
              <button className="bg-transparent border border-primary text-primary rounded-sm px-xs py-xxs text-sm font-medium transition-all duration-200 flex items-center gap-xxs w-fit hover:bg-primary hover:text-white">
                <i className="fas fa-plus"></i> Add to My Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
