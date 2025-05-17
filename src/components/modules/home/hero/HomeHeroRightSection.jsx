import React from "react";
import HomeHeroWeather from "./HomeHeroWeather";
import HomeHeroMap from "./HomeHeroMap";

const HomeHeroRightSection = (props) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-lg">
      <HomeHeroWeather
        weather={props.weather}
        demographic={props.demographic}
      />
      <HomeHeroMap />
    </div>
  );
};

export default HomeHeroRightSection;
