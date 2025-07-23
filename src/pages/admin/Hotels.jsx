import React, { useState } from 'react';
import { UserTableSelection } from '../../components/modules/admin/Tabs/UserTab/UserTableSelection';
import { TextInput, Select, Group, Paper, Title, Stack } from '@mantine/core';
import PopularAttractions from '../../components/modules/home/PopularAttractions';

const Hotels = () => {
  const [search, setSearch] = useState('');

  
  const [hotels, setHotels] = useState([
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg",
      title: "Solti Hotel",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
      type:"hotel",
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
  ]);

  const statusOptions = [
    { value: 'all', label: 'All' },
    { value: 'Unblocked', label: 'Unblocked' },
    { value: 'Blocked', label: 'Blocked' },
  ];
  
  const [status, setStatus] = useState('all');


  return (
      <Stack gap="md">
        <Group justify="space-between" align="flex-end">
          <div>
            <Title order={2} mb="md">Locations</Title>
            <TextInput
              placeholder="Search by name"
              value={search}
              onChange={e => setSearch(e.currentTarget.value)}
              size="md"
              radius="md"
              style={{ minWidth: 500, maxWidth: 620 }}
            />
          </div>
          <Select
            placeholder="Filter by status"
            data={statusOptions}
            value={status}
            onChange={setStatus}
            size="md"
            radius="md"
            style={{ minWidth: 180 }}
          />
        </Group>
        <div className='h-[77vh] overflow-auto'>
            <PopularAttractions data={hotels} isAdmin={true}/>
        </div>
      </Stack>
  );
};

export default Hotels;