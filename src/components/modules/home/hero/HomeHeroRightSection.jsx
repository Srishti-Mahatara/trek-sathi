import React from "react";
import HomeHeroWeather from "./HomeHeroWeather";
import HomeHeroMap from "./HomeHeroMap";

const HomeHeroRightSection = (props) => {
  return (
    <div className="w-full flex flex-col gap-lg mb-lg">
      <HomeHeroWeather
        weather={props.weather}
        demographic={props.demographic}
      />
      {/*<HomeHeroMap />*/}
    </div>
  );
};

export default HomeHeroRightSection;
