import { useState } from 'react';
import cx from 'clsx';
import { Avatar, Badge, Button, Checkbox, Group, ScrollArea, Table, Text } from '@mantine/core';
import classes from './UserTableSelection.module.css';
import React from 'react';
import { IconBan, IconTrash, IconLockOpen } from '@tabler/icons-react';

const data = [
  {
    id: '1',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    email: 'rob_wolf@gmail.com',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '2',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    email: 'jj@breaker.com',
    created_at: '2025-02-22',
    status: 'Blocked',
  },
  {
    id: '3',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    email: 'henry@silkeater.io',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '4',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    email: 'bhorsefighter@gmail.com',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },
  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    email: 'jeremy@foot.dev',
    created_at: '2025-02-22',
    status: 'Active',
  },
];

export function UserTableSelection() {
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.email}</Table.Td>
        <Table.Td>{item.created_at}</Table.Td>
        <Table.Td><Badge color={item.status === 'Active' ? 'green' : 'red'}>{item.status}</Badge></Table.Td>
        <Table.Td>
            {item.status === 'Blocked' ? (
              <Button
                color="green"
                leftSection={<IconLockOpen size={16} />}
                variant="light"
                size="xs"
                aria-label="Unblock user"
                style={{ marginRight: 8 }}
              >
                Unblock
              </Button>
            ) : (
              <Button
                color="yellow"
                leftSection={<IconBan size={16} />}
                variant="light"
                size="xs"
                aria-label="Block user"
                style={{ marginRight: 8 }}
              >
                Block
              </Button>
            )}
            <Button
              color="red"
              leftSection={<IconTrash size={16} />}
              variant="light"
              size="xs"
              aria-label="Delete user"
            >
              Delete
            </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
              />
            </Table.Th>
            <Table.Th>User</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Joined On</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}