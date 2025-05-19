import React, { useState } from "react";

const LocationInfo = () => {
    const [locationData, setLocationData] = useState({
        name: "Pokhara Valley",
        location: "Pokhara",
        country: "Nepal",
        description:
            "Nestled in the foothills of the Annapurna range, Pokhara is Nepal's adventure capital and a gateway to the Himalayas. Known for its tranquil lakes, panoramic mountain views, and vibrant culture, this picturesque valley offers unforgettable experiences for travelers seeking both relaxation and adventure.",
        tags: ["Mountains", "Lakes", "Trekking", "Food"],
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
        }
    });

    return (
        <div className="mb-lg">
            <div className="flex items-center justify-between mb-sm">
                <h1 className="text-2xl font-bold text-gray-900">Current Location</h1>
                <div className="bg-green-400 rounded-full text-xs text-green-800 flex justify-center items-center px-sm py-xxs font-semibold shadow-sm">
                    <span className="inline-block w-[8px] h-[8px] rounded-full bg-green-800 mr-xxs animate-pulse"></span>
                    Live
                </div>
            </div>

            {/* Location image */}
            <div className="rounded-lg overflow-hidden h-[160px] shadow-md relative mb-sm">
                <img
                    src="./images/nepal-village.jpg"
                    alt="Beautiful view of Pokhara"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-xs left-xs bg-black bg-opacity-60 text-white px-xs py-xxs rounded-sm text-sm font-semibold">
                    {locationData.location}, {locationData.country}
                </div>
            </div>

            {/* Location name and description */}
            <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-xs">
                {locationData.name}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-sm">
                {locationData.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-[6px] mb-md">
                {locationData.tags.map((item, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 border border-gray-200 rounded-full py-xxs px-xs text-xs text-primary-dark flex items-center gap-xxs"
                    >
            {item}
          </span>
                ))}
            </div>

            {/* Weather and demographic info in compact format */}
            <div className="bg-gray-50 rounded-lg p-sm border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-xs border-b border-gray-200 pb-xs">
                    <div className="font-semibold text-gray-700">Weather</div>
                    <div className="flex items-center">
            <span className="text-xl font-bold text-primary-dark mr-xs">
              {locationData.weather.temperature}°{locationData.weather.unit}
            </span>
                        <span className="text-xs text-gray-500">
              {locationData.weather.sky}
            </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-xs text-xs">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Population:</span>
                        <span className="font-medium">{locationData.demographic.population}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Language:</span>
                        <span className="font-medium">{locationData.demographic.language}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Time Zone:</span>
                        <span className="font-medium">{locationData.demographic.timeZone}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Currency:</span>
                        <span className="font-medium">{locationData.demographic.currency}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;