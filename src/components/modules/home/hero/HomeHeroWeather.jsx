import { IconCloudFilled } from "@tabler/icons-react";

const HomeHeroWeather = (props) => {
  const { weather, demographic } = props;
  return (
    <div className=" flex justify-between rounded-lg p-md border border-gray-200 bg-gradient-to-r from-white to-gray-100 shadow-md transition-transform duration-200 hover:-translate-y-[5px]">
      <div className="flex flex-col gap-xxs">
        <div className="text-xl font-bold text-gray-800">Weather</div>
        <div className="text-5xl font-extrabold text-primary-dark ">
          {weather.temperature}°{weather.unit}
        </div>
        <div className="text-gray-500 font-medium flex items-center gap-xs">
          <IconCloudFilled className="text-primary-light" /> {weather.sky}
        </div>

        <div className="text-sm text-gray-500 mt-xxs">
          H: {weather.highestTemperature}°{weather.unit} | L:{" "}
          {weather.lowestTemperature}°{weather.unit}
        </div>
      </div>
      <div className="flex flex-col justify-between w-[40%]">
        <div className="flex text-base justify-between py-xs border-b border-dashed border-gray-200">
          <span className="text-gray-500 font-medium">
            <i className="fas fa-users"></i> Population:
          </span>
          <span className="text-gray-800 font-semibold">
            {demographic.population}
          </span>
        </div>
        <div className="flex text-base justify-between py-xs border-b border-dashed border-gray-200">
          <span className="text-gray-500 font-medium">
            <i className="fas fa-language"></i> Language:
          </span>
          <span className="text-gray-800 font-semibold">
            {demographic.language}
          </span>
        </div>
        <div className="flex text-base justify-between py-xs border-b border-dashed border-gray-200">
          <span className="text-gray-500 font-medium">
            <i className="fas fa-clock"></i> Time Zone:
          </span>
          <span className="text-gray-800 font-semibold">
            {demographic.timeZone}
          </span>
        </div>
        <div className="flex text-base justify-between py-xs">
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
