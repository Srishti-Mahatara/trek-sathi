import React, { useState } from "react";
import {Button, Rating} from "@mantine/core";
import {
    IconBookmarkFilled,
    IconMapPin,
    IconMapPinFilled,
} from "@tabler/icons-react";

const SideAttractions = () => {
    const [attractions, setAttractions] = useState([
        {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "Phewa Lake",
            distance: 4,
            unit: "km",
            description: "Beautiful freshwater lake with mountain reflections",
            rating: 4.5,
        },
        {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "Mahendra Cave",
            distance: 1.2,
            unit: "km",
            description: "Dark cave for those adventure and exploring enthusiasts.",
            rating: 4.5,
        },
        {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "World Peace Pagoda",
            distance: 4,
            unit: "km",
            description: "Beautiful freshwater lake with mountain reflections",
            rating: 4.5,
        },
        {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "Davis Falls",
            distance: 4,
            unit: "km",
            description: "Beautiful freshwater lake with mountain reflections",
            rating: 4.5,
        },
        {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "Davis Falls",
            distance: 4,
            unit: "km",
            description: "Beautiful freshwater lake with mountain reflections",
            rating: 4.5,
        }, {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "Davis Falls",
            distance: 4,
            unit: "km",
            description: "Beautiful freshwater lake with mountain reflections",
            rating: 4.5,
        }, {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "Davis Falls",
            distance: 4,
            unit: "km",
            description: "Beautiful freshwater lake with mountain reflections",
            rating: 4.5,
        }, {
            image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
            title: "Davis Falls",
            distance: 4,
            unit: "km",
            description: "Beautiful freshwater lake with mountain reflections",
            rating: 4.5,
        },
    ]);

    return (
        <div className={'relative pb-md'}>
            <div className="text-2xl z-10 py-xs sticky top-none font-bold bg-white w-full text-gray-800 mb-sm flex items-center gap-[6px] ">
                <IconMapPinFilled size={24} className="text-primary" />  Nearby Attractions
            </div>

            <div className="space-y-sm h-full overflow-y-auto pr-xs">
                {attractions.map((item, index) => (
                    <AttractionItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

// Compact version of attraction card for sidebar
const AttractionItem = ({ data }) => {
    return (
        <div className="bg-white py-sm px-sm rounded-md overflow-hidden shadow-md border border-gray-100 flex gap-xs hover:shadow-lg transition-all duration-200">
            <div className="w-2/5 h-[140px] overflow-hidden">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover rounded-md drop-shadow-xs"
                />
            </div>
            <div className="w-3/5 p-xs pr-none relative">
                <h3 className="text-xl font-semibold text-gray-800 mb-xxs truncate">
                    {data.title}
                </h3>
                <p className="text-gray-500 text-md mb-xs flex items-center gap-xxs">
                    <IconMapPin size={12} /> {data.distance} {data.unit} away
                </p>
                <div className="flex items-center gap-xxs">
                    <Rating size="sm" defaultValue={data.rating} fractions={2} readOnly />
                    <span className="text-gray-700 mt-[2px] text-md">{data.rating}</span>
                </div>

                <Button variant={''} size={'xs'} className={'mt-xs absolute right-xs bottom-none'} color={"#00838f"}>Details</Button>
                <IconBookmarkFilled size={22} className={'text-primary  absolute right-xs top-xxs'} />
            </div>
        </div>
    );
};

export default SideAttractions;