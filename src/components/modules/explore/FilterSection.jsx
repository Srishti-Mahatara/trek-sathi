import { IconClockFilled, IconFlameFilled, IconHeartFilled, IconSearch, IconStarFilled } from "@tabler/icons-react";
import { useState } from "react";

export const FiltersSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = [
        { name: 'All', icon: null },
        { name: 'Trending', icon: IconFlameFilled },
        { name: 'Top Rated', icon: IconStarFilled },
        { name: 'Recent', icon: IconClockFilled },
        { name: 'Favorites', icon: IconHeartFilled },
    ];

    return (
        <section className="bg-white rounded-lg px-md py-sm flex flex-col sm:flex-row justify-between items-center gap-sm mb-md shadow-sm">
            {/* Filters - Scrollable on mobile */}
            <div className="flex gap-sm overflow-x-auto w-full sm:w-auto pb-xs sm:pb-none">
                {filters.map((filter) => {
                    const IconComponent = filter.icon;
                    return (
                        <div
                            key={filter.name}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`cursor-pointer font-medium px-sm py-xs rounded-md transition-all duration-200 flex items-center gap-xs whitespace-nowrap ${activeFilter === filter.name
                                ? 'text-white bg-primary bg-opacity-10 font-semibold'
                                : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                                }`}
                        >
                            {IconComponent && <IconComponent size={20} />}
                            {filter.name}
                        </div>
                    );
                })}
            </div>

            {/* Search - Full width on mobile */}
            <div className="relative flex w-full sm:w-auto">
                <input
                    type="text"
                    placeholder="Search experiences..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="py-[10px] px-sm border border-gray-200 rounded-full w-full sm:w-[380px] text-sm transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(0,131,143,0.2)]"
                />
                <button className="absolute right-[10px] top-1/2 transform -translate-y-1/2 bg-transparent border-none text-gray-500 cursor-pointer hover:text-primary">
                    <IconSearch size={16} />
                </button>
            </div>
        </section>
    );
};
