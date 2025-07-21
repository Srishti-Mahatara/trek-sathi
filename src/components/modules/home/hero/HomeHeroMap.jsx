import React from "react";

const HomeHeroMap = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-full relative max-h-[350px]">
      <img
        src="https://www.hellomondo.com/wp-content/uploads/map-pokhara-nepal-735x526.jpg"
        alt="Map"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export default HomeHeroMap;
