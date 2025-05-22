import React from "react";
import {
    IconMapPinFilled,
    IconZoomIn,
    IconZoomOut,
    IconTarget,
    IconMaximize,
    IconBuildingCastle,
    IconTrees,
    IconFrustum
} from "@tabler/icons-react";

const MapView = () => {
    // Simulated attraction pins with offsets
    const attractions = [
        { icon: <IconBuildingCastle className="text-white text-xs" />, offsetX: "-84", offsetY: "-40", label: "Castle" },
        { icon: <IconFrustum className="text-white text-xs" />, offsetX: "32", offsetY: "-78", label: "Museum" },
        { icon: <IconTrees className="text-white text-xs" />, offsetX: "-36", offsetY: "90", label: "Park" },
    ];

    return (
        <div className="h-full w-full relative rounded-lg overflow-hidden shadow-lg">
            {/* Map background */}
            <div className="w-full h-full bg-gray-200">
                <img
                    src="https://www.hellomondo.com/wp-content/uploads/map-pokhara-nepal-735x526.jpg"
                    alt="Interactive Map"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Central Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white shadow-lg pulse-animation">
                    <IconMapPinFilled className="text-white text-xs" />
                </div>
            </div>

            {/* Nearby Attractions */}
            {attractions.map((attraction, index) => (
                <div
                    key={index}
                    className="absolute z-10"
                    style={{
                        top: `calc(50% + ${attraction.offsetY}px)`,
                        left: `calc(50% + ${attraction.offsetX}px)`,
                    }}
                >
                    <div
                        className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white shadow hover:scale-110 transition-transform"
                        title={attraction.label}
                    >
                        {attraction.icon}
                    </div>
                </div>
            ))}

            {/* Map Controls */}
            <div className="absolute top-xs right-xs flex flex-col space-y-xs bg-white/80 backdrop-blur-md p-xs rounded-lg shadow-md z-20">
                <button className="p-xxs hover:bg-gray-100 rounded">
                    <IconZoomIn size={20} className="text-gray-700" />
                </button>
                <button className="p-xxs hover:bg-gray-100 rounded">
                    <IconZoomOut size={20} className="text-gray-700" />
                </button>
                <button className="p-xxs hover:bg-gray-100 rounded">
                    <IconTarget size={20} className="text-gray-700" />
                </button>
                <button className="p-xxs hover:bg-gray-100 rounded">
                    <IconMaximize size={20} className="text-gray-700" />
                </button>
            </div>
        </div>
    );
};

export default MapView;
