import { IconCloudFilled } from "@tabler/icons-react";

const HomeHeroWeather = (props) => {
  const { weather, demographic } = props;
  return (
      <div className="flex justify-between rounded-lg p-sm px-md border border-gray-200 bg-gradient-to-r from-white to-gray-100 shadow-md transition-transform duration-200 ">
        <div className="flex flex-col gap-0">
          <div className="text-lg font-bold text-gray-800">Weather</div>
          <div className="text-4xl font-extrabold text-primary-dark">
            {weather.temperature}°{weather.unit}
          </div>
          <div className="text-gray-500 font-medium flex items-center gap-xs">
            <IconCloudFilled className="text-primary-light" /> {weather.sky}
          </div>

          <div className="text-xs text-gray-500 mt-[2px]">
            H: {weather.highestTemperature}°{weather.unit} | L: {weather.lowestTemperature}°{weather.unit}
          </div>
          <div className="text-xs text-gray-500 mt-[2px] flex gap-xs">
            <span><i className="fas fa-globe"></i> Lat: {demographic.latitude}</span>
            <span><i className="fas fa-globe"></i> Long: {demographic.longitude}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[40%]">
          <div className="flex text-sm justify-between py-1 border-b border-dashed border-gray-200">
          <span className="text-gray-500 font-medium">
            <i className="fas fa-users"></i> Population:
          </span>
            <span className="text-gray-800 font-semibold">
            {demographic.population}
          </span>
          </div>
          <div className="flex text-sm justify-between py-1 border-b border-dashed border-gray-200">
          <span className="text-gray-500 font-medium">
            <i className="fas fa-language"></i> Language:
          </span>
            <span className="text-gray-800 font-semibold">
            {demographic.language}
          </span>
          </div>
          <div className="flex text-sm justify-between py-1 border-b border-dashed border-gray-200">
          <span className="text-gray-500 font-medium">
            <i className="fas fa-clock"></i> Time Zone:
          </span>
            <span className="text-gray-800 font-semibold">
            {demographic.timeZone}
          </span>
          </div>
          <div className="flex text-sm justify-between py-1">
          <span className="text-gray-500 font-medium">
            <i className="fas fa-money-bill-wave"></i> Currency:
          </span>
            <span className="text-gray-800 font-semibold">
            {demographic.currency}
          </span>
          </div>
        </div>
      </div>
  );
};

export default HomeHeroWeather;