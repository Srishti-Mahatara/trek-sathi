import {
  Icon2fa,
  IconBellRinging,
  IconBuilding,
  IconChartBar,
  IconDatabaseImport,
  IconFingerprint,
  IconImageInPicture,
  IconKey,
  IconLogout,
  IconMap,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
  IconUsers,
} from '@tabler/icons-react';
import { Code, Group, Divider, Text } from '@mantine/core';
import classes from './AdminSidebar.module.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconChartBar },
  { link: '/dashboard/users', label: 'Users', icon: IconUsers },
  { link: '/dashboard/locations', label: 'Locations', icon: IconMap },
  { link: '/dashboard/hotels', label: 'Hotels', icon: IconBuilding },
  { link: '/dashboard/posts', label: 'Posts', icon: IconImageInPicture },
];

export function AdminSidebar() {
  const location = useLocation();

  const links = data.map((item) => {
    const isActive = location.pathname === item.link;
    return (
      <Link
        className={classes.link}
        data-active={isActive || undefined}
        to={item.link}
        key={item.label}
        aria-label={item.label}
        style={{
          background: isActive ? 'var(--mantine-color-blue-light)' : undefined,
          color: isActive ? 'var(--mantine-color-blue-7)' : undefined,
          fontWeight: isActive ? 700 : 500,
        }}
      >
        <item.icon className={classes.linkIcon} stroke={isActive ? 2 : 1.5} color={isActive ? 'var(--mantine-color-blue-7)' : 'var(--mantine-color-gray-6)'} />
        <span>{item.label}</span>
      </Link>
    );
  });

  return (
    <nav className={classes.navbar} aria-label="Admin sidebar navigation">
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Text fw={700} size="lg" color="blue.7">Admin Panel</Text>
          <Code fw={700} color="blue">v3.1.2</Code>
        </Group>
        <Text size="xs" color="gray.6" mb="sm" mt="md" style={{ letterSpacing: 1, textTransform: 'uppercase' }}>
          Navigation
        </Text>
        {links}
      </div>
      <div className={classes.footer}>
        <a href="#" className={classes.link} aria-label="Logout" style={{ color: 'var(--mantine-color-red-7)' }} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} color="var(--mantine-color-red-7)" />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}