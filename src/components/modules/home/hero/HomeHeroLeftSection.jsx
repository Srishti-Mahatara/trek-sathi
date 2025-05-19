import React from "react";

const HomeHeroLeftSection = (props) => {
    const { data } = props;
    return (
        <div className="w-full flex items-center lg:w-1/2">
            <div className="">
                <h2 className="text-3xl font-bold text-gray-900">
                    {data.name}
                </h2>
                <p className="mt-xs text-gray-600 text-sm">
                    {data.description}
                </p>
                <div className="flex flex-wrap gap-xs mt-sm">
                    {data.tags.map((item, index) => (
                        <span
                            key={index}
                            className="px-xs py-xxs cursor-pointer bg-gray-100 border border-gray-200 rounded-full py-0 px-2 text-xs text-primary-dark flex items-center gap-1 transition-all duration-200 hover:bg-primary-light hover:text-white hover:-translate-y-[2px]"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeHeroLeftSection;