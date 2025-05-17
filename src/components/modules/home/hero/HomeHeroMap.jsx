import React from "react";

const HomeHeroMap = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-full relative">
      <div id="googleMap" className="w-full h-[300px] rounded-md"></div>
      <img
        src="/api/placeholder/400/320"
        alt="Map"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute bottom-sm left-sm bg-white bg-opacity-90 text-primary-dark px-xs py-xxs rounded-sm text-xs font-semibold shadow-sm">
        Interactive Map
      </div>
    </div>
  );
};

export default HomeHeroMap;
