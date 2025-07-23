import React, { useState } from 'react';
import { TextInput, Select, Group, Title, Stack } from '@mantine/core';
import { IconSearch, IconStarFilled, IconFlameFilled, IconClockFilled, IconHeartFilled } from '@tabler/icons-react';
import PopularAttractions from '../../components/modules/home/PopularAttractions';

const filterOptions = [
  { label: 'All', value: 'all', icon: null },
  { label: 'Trending', value: 'trending', icon: IconFlameFilled },
  { label: 'Top Rated', value: 'top', icon: IconStarFilled },
  { label: 'Recent', value: 'recent', icon: IconClockFilled },
];

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'Unblocked', label: 'Unblocked' },
  { value: 'Blocked', label: 'Blocked' },
];

const Hotels = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');

  const hotels = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg",
      title: "Solti Hotel",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
      type: "hotel",
      status: "blocked"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahendra_Cave.JPG",
      title: "Hotel Mariott",
      distance: 1.2,
      unit: "km",
      description: "Dark cave for those adventure and exploring enthusiasts.",
      rating: 4.5,
      type:"hotel"
    },
    {
      image: "https://api.luxuryholidaynepal.com/media/blog/banner/how-to-reach-peace-pagoda-pokhara.jpg",
      title: "Hotel Pagoda",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
      type:"hotel"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
      title: "Hotel Waterfall",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
      type:"hotel"
    },
  ];

  // Filtering logic (can be expanded for pills)
  const filtered = hotels.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (status === 'all' || (status === 'Blocked' ? item.status === 'blocked' : item.status !== 'blocked'))
  );

  return (
    <Stack gap="md">
      <Group justify="space-between" align="flex-end" className="mb-xs">
        <div className="w-full">
          <Title order={2} mb="md" className="mb-md">Hotels</Title>
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
              <div className="relative flex-grow w-full sm:w-auto max-w-[400px] ml-0 sm:ml-md sm:mt-0">
                <TextInput
                  placeholder="Search by name"
                  value={search}
                  onChange={e => setSearch(e.currentTarget.value)}
                  size="md"
                  radius="xl"
                  className="min-w-[400px]"
                  leftSection={<IconSearch size={18} className="text-gray-400" />}
                  styles={{ input: { paddingLeft: 38, paddingRight: 16, background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' } }}
                />
              </div>
              {/* Status Dropdown */}
              <Select
                placeholder="Filter by status"
                data={statusOptions}
                value={status}
                onChange={setStatus}
                size="md"
                radius="xl"
                className="min-w-[140px] max-w-[180px] ml-0 sm:ml-md"
                styles={{ input: { background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' } }}
              />
            </div>
          </div>
        </div>
      </Group>
      <div className='h-[77vh] overflow-auto'>
        <PopularAttractions data={filtered} isAdmin={true} />
      </div>
    </Stack>
  );
};

export default Hotels;