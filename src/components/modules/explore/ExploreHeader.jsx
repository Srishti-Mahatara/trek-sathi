import { IconCompassFilled, IconPlus } from "@tabler/icons-react";
import React from "react";

const ExploreHeader = (props) => (
    <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md bg-white p-sm sm:p-md rounded-lg shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[100px] sm:w-[140px] h-[100px] sm:h-[140px] bg-primary-light opacity-5 rounded-none rounded-bl-full z-0"></div>

        <div className="relative z-10 mb-sm sm:mb-none w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-[4px] flex items-center gap-xs sm:gap-sm">
                <IconCompassFilled className="text-primary" size={28} />
                Explore
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
                Discover amazing travel experiences shared by the community
            </p>
        </div>

        <div className="relative z-10 w-full sm:w-auto">
            <button
                className="w-full sm:w-auto bg-primary text-white border-none rounded-md px-[16px] sm:px-[20px] py-msm font-semibold cursor-pointer flex items-center justify-center gap-xs transition-all duration-300 shadow-md hover:bg-primary-dark hover:-translate-y-[2px] hover:shadow-lg"
                onClick={() => props.setAddExperienceModalOpened(true)}
            >
                <IconPlus size={20} />
                Share Experience
            </button>
        </div>
    </section>
);

export default ExploreHeader;
