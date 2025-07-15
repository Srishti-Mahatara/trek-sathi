import React from "react";

const HomeHeroLeftSection = (props) => {
    const { data } = props;
    return (
        <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden h-[320px] shadow-lg relative">
                <img
                    src="https://www.adventurevisiontreks.com/uploads/pokhara-view-from-world-peace-stupa.jpg"
                    alt="Beautiful view of a Nepalese village"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-normal left-normal bg-black bg-opacity-60 text-white px-xs py-xxs rounded-sm text-sm font-semibold z-10">
                    {data.location}, {data.country}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>

            <div className="mt-md">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-xs">
                    {data.name}
                </h2>
                <p className="mt-xs text-gray-600 leading-relaxed text-base">
                    {data.description}
                </p>
                <div className="flex flex-wrap gap-[10px] mt-sm">
                    {data.tags.map((item, index) => (
                        <span
                            key={index}
                            className="cursor-pointer bg-gray-100 border border-gray-200 rounded-full py-xxs px-xs text-xs text-primary-dark flex items-center gap-xxs transition-all duration-200 hover:bg-primary-light hover:text-white hover:-translate-y-[2px]"
                        >
              {/* <i className="fas fa-mountain"></i> */}
                            {item}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeHeroLeftSection;
