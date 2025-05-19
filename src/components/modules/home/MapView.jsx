import React from "react";

const MapView = () => {
    return (
        <div className="h-full w-full relative rounded-lg overflow-hidden shadow-lg">
            {/* Giant map container */}
            <div className="w-full h-full bg-gray-200">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3e/GNOME_Maps_3.32_screenshot.png"
                    alt="Interactive Map"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Map controls */}
            {/*<div className="absolute top-md right-md bg-white shadow-lg rounded-lg p-sm flex flex-col gap-xs">*/}
            {/*    <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">*/}
            {/*        <i className="fas fa-plus text-gray-700"></i>*/}
            {/*    </button>*/}
            {/*    <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">*/}
            {/*        <i className="fas fa-minus text-gray-700"></i>*/}
            {/*    </button>*/}
            {/*    <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">*/}
            {/*        <i className="fas fa-location-arrow text-gray-700"></i>*/}
            {/*    </button>*/}
            {/*</div>*/}

            {/* Current location marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white shadow-lg pulse-animation">
                    <i className="fas fa-map-marker-alt text-white text-xs"></i>
                </div>
            </div>
        </div>
    );
};

export default MapView;