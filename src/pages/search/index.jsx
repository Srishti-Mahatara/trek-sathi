import { useState } from "react";
import { TextInput, Group, Title, Stack, Select } from "@mantine/core";
import { IconSearch, IconStarFilled, IconFlameFilled, IconClockFilled, IconHeartFilled } from "@tabler/icons-react";
import PopularAttractions from "../../components/modules/home/PopularAttractions";

const mockData = [
  { id: 1, title: "Phewa Lake", type: "place", image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg", description: "Beautiful freshwater lake with mountain reflections", rating: 4.5, distance: 4, unit: "km" },
  { id: 2, title: "Hotel Lakeside Retreat", type: "hotel", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400", description: "A beautiful lakeside hotel with stunning views and modern amenities.", rating: 4.7, distance: 2, unit: "km" },
  { id: 3, title: "Mahendra Cave", type: "place", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahendra_Cave.JPG", description: "Dark cave for those adventure and exploring enthusiasts.", rating: 4.2, distance: 1.2, unit: "km" },
  { id: 4, title: "World Peace Pagoda", type: "place", image: "https://api.luxuryholidaynepal.com/media/blog/banner/how-to-reach-peace-pagoda-pokhara.jpg", description: "Buddhist stupa with panoramic views", rating: 4.8, distance: 4, unit: "km" },
  { id: 5, title: "Hotel Mountain View", type: "hotel", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400", description: "Modern hotel with mountain views and great amenities.", rating: 4.6, distance: 3.5, unit: "km" },
];

const filterOptions = [
  { label: 'All', value: 'all', icon: null },
  { label: 'Trending', value: 'trending', icon: IconFlameFilled },
  { label: 'Top Rated', value: 'top', icon: IconStarFilled },
  { label: 'Recent', value: 'recent', icon: IconClockFilled },
  { label: 'Favorites', value: 'favorites', icon: IconHeartFilled },
];

const sortOptions = [
  { value: 'rating-desc', label: 'Rating: High to Low' },
  { value: 'rating-asc', label: 'Rating: Low to High' },
  { value: 'name-asc', label: 'Name: A-Z' },
  { value: 'name-desc', label: 'Name: Z-A' },
];

const typeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'hotel', label: 'Hotels' },
  { value: 'place', label: 'Places' },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState('all');
  const [sort, setSort] = useState('rating-desc');
  const [type, setType] = useState('all');

  let filtered = mockData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) &&
    (type === 'all' || item.type === type)
  );

  // Sorting logic
  if (sort === 'rating-desc') filtered = filtered.sort((a, b) => b.rating - a.rating);
  if (sort === 'rating-asc') filtered = filtered.sort((a, b) => a.rating - b.rating);
  if (sort === 'name-asc') filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === 'name-desc') filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));

  return (
    <Stack gap="xl" className="px-xl pt-md">
      <Group justify="space-between" align="flex-end" className="mb-xs">
        <div className="w-full">
          <Title order={2} mb="md" className="mb-md">Search Places & Hotels</Title>
          <div className="flex flex-col sm:flex-row gap-sm items-center justify-between w-full">
            {/* Filter Pills */}
            <div className="flex gap-xs overflow-x-auto pb-xs w-full sm:w-auto">
              {filterOptions.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-md py-xs rounded-full font-medium flex items-center gap-xs transition-all duration-200 whitespace-nowrap border border-gray-200 shadow-sm ${activeFilter === filter.value ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-primary-light hover:text-primary'}`}
                  >
                    {IconComponent && <IconComponent size={18} />}
                    {filter.label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center">
                {/* Search Bar */}
              <div className="relative flex-grow w-full sm:w-auto max-w-[400px] ml-0 sm:ml-md  sm:mt-0">
              <TextInput
                placeholder="Search by name..."
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                size="md"
                radius="xl"
                className="min-w-[400px]"
                leftSection={<IconSearch size={18} className="text-gray-400" />}
                styles={{ input: { paddingLeft: 38, paddingRight: 16, background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' } }}
              />
            </div>
            {/* Type Dropdown */}
            <Select
              data={typeOptions}
              value={type}
              onChange={setType}
              size="md"
              radius="xl"
              className="min-w-[140px] max-w-[180px] ml-0 sm:ml-md"
              styles={{ input: { background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' } }}
            />
            {/* Sort Dropdown */}
            <Select
              data={sortOptions}
              value={sort}
              onChange={setSort}
              size="md"
              radius="xl"
              className="min-w-[180px] max-w-[220px] ml-0 sm:ml-md"
              styles={{ input: { background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' } }}
            />
            </div>
            
          </div>
        </div>
      </Group>
      <div className="h-[77vh] overflow-auto">
        <PopularAttractions data={filtered} search={true} />
      </div>
    </Stack>
  );
};

export default SearchPage; 