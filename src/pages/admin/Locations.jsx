import React, { useState } from 'react';
import { UserTableSelection } from '../../components/modules/admin/Tabs/UserTab/UserTableSelection';
import { TextInput, Select, Group, Paper, Title, Stack } from '@mantine/core';
import PopularAttractions from '../../components/modules/home/PopularAttractions';

const Locations = () => {
  const [search, setSearch] = useState('');

  
  const [attractions, setAttractions] = useState([
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg",
      title: "Phewa Lake",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
      type:"attraction",
      status:'blocked'
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahendra_Cave.JPG",
      title: "Mahendra Cave",
      distance: 1.2,
      unit: "km",
      description: "Dark cave for those adventure and exploring enthusiasts.",
      rating: 4.5,
      type:"attraction"
    },
    {
      image: "https://api.luxuryholidaynepal.com/media/blog/banner/how-to-reach-peace-pagoda-pokhara.jpg",
      title: "World Peace Pagoda",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
      type:"attraction"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
      title: "Davis Falls",
      distance: 4,
      unit: "km",
      description: "Beautiful freshwater lake with mountain reflections",
      rating: 4.5,
      type:"attraction"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
        title: "Davis Falls",
        distance: 4,
        unit: "km",
        description: "Beautiful freshwater lake with mountain reflections",
        rating: 4.5,
        type:"attraction"
      },    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
        title: "Davis Falls",
        distance: 4,
        unit: "km",
        description: "Beautiful freshwater lake with mountain reflections",
        rating: 4.5,
        type:"attraction"
      },    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
        title: "Davis Falls",
        distance: 4,
        unit: "km",
        description: "Beautiful freshwater lake with mountain reflections",
        rating: 4.5,
        type:"attraction"
      },    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
        title: "Davis Falls",
        distance: 4,
        unit: "km",
        description: "Beautiful freshwater lake with mountain reflections",
        rating: 4.5,
        type:"attraction"
      },    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Davis_Falls_and_the_visitors.jpg/500px-Davis_Falls_and_the_visitors.jpg",
        title: "Davis Falls",
        distance: 4,
        unit: "km",
        description: "Beautiful freshwater lake with mountain reflections",
        rating: 4.5,
        type:"attraction"
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
            <PopularAttractions data={attractions} isAdmin={true}/>
        </div>
      </Stack>
  );
};

export default Locations;