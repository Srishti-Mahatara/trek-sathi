import React, { useState } from 'react';
import { UserTableSelection } from '../../components/modules/admin/Tabs/UserTab/UserTableSelection';
import { TextInput, Select, Group, Paper, Title, Stack } from '@mantine/core';

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'Active', label: 'Active' },
  { value: 'Blocked', label: 'Blocked' },
];

const Users = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');

  // You would pass these as props to UserTableSelection for real filtering
  // For now, just UI

  return (
      <Stack gap="md">
        <Group justify="space-between" align="flex-end">
          <div>
            <Title order={2} mb="md">Users</Title>
            <TextInput
              placeholder="Search by name or email"
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
            <UserTableSelection />
        </div>
      </Stack>
  );
};

export default Users;