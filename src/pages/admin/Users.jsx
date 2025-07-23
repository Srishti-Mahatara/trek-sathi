import React, { useState } from 'react';
import { TextInput, Select, Group, Title, Stack, Button } from '@mantine/core';
import { IconSearch, IconBan, IconTrash, IconLockOpen } from '@tabler/icons-react';
import { UserTableSelection } from '../../components/modules/admin/Tabs/UserTab/UserTableSelection';

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'Active', label: 'Active' },
  { value: 'Blocked', label: 'Blocked' },
];

const mockUsers = [
  {
    id: '1',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    email: 'rob_wolf@gmail.com',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '2',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    email: 'jj@breaker.com',
    created_at: '2025-02-22',
    status: 'Blocked',
  },
  {
    id: '3',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    email: 'henry@silkeater.io',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '4',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    email: 'bhorsefighter@gmail.com',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '5',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },
];

const Users = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [selection, setSelection] = useState([]);
  const [users, setUsers] = useState(mockUsers);

  // Filtering logic
  const filtered = users.filter(user =>
    (user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())) &&
    (status === 'all' || user.status === status)
  );

  // Global actions
  const handleBlock = () => {
    setUsers(users.map(user => selection.includes(user.id) ? { ...user, status: 'Blocked' } : user));
    setSelection([]);
  };
  const handleUnblock = () => {
    setUsers(users.map(user => selection.includes(user.id) ? { ...user, status: 'Active' } : user));
    setSelection([]);
  };
  const handleDelete = () => {
    setUsers(users.filter(user => !selection.includes(user.id)));
    setSelection([]);
  };

  return (
    <Stack gap="md">
      <Group justify="space-between" align="flex-end" className="mb-xs">
        <div className="w-full">
          <Title order={2} mb="md" className="mb-md">Users</Title>
          <div className="flex flex-col sm:flex-row gap-sm items-center justify-between w-full">
            <div className="flex items-center">
              {/* Search Bar */}
              <div className="relative flex-grow w-full sm:w-auto max-w-[400px] sm:mt-0">
                <TextInput
                  placeholder="Search by name or email"
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
              {/* Global Actions */}
              <div className="flex gap-xs ml-md">
                <Button
                  color="yellow"
                  leftSection={<IconBan size={16} />}
                  size="md"
                  radius="xl"
                  disabled={selection.length === 0}
                  onClick={handleBlock}
                  variant="light"
                >
                  Block
                </Button>
                <Button
                  color="green"
                  leftSection={<IconLockOpen size={16} />}
                  size="md"
                  radius="xl"
                  disabled={selection.length === 0}
                  onClick={handleUnblock}
                  variant="light"
                >
                  Unblock
                </Button>
                <Button
                  color="red"
                  leftSection={<IconTrash size={16} />}
                  size="md"
                  radius="xl"
                  disabled={selection.length === 0}
                  onClick={handleDelete}
                  variant="light"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Group>
      <div className='h-[77vh] overflow-auto'>
        <UserTableSelection data={filtered} selection={selection} setSelection={setSelection} />
      </div>
    </Stack>
  );
};

export default Users;