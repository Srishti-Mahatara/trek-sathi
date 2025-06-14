import React from 'react';
import { Paper, Stack, Title, Text, Group, ThemeIcon } from '@mantine/core';
import {
  Gauge,
  MapPin,
  Heart,
  Route,
  Bell,
  Bookmark,
  MessageCircle,
  Plane
} from 'lucide-react';

const DashboardTab = () => {
  const stats = [
    {
      icon: MapPin,
      value: '3',
      label: 'Upcoming Trips',
      color: 'blue'
    },
    {
      icon: Heart,
      value: '12',
      label: 'Saved Places',
      color: 'red'
    },
    {
      icon: Route,
      value: '5',
      label: 'Itineraries',
      color: 'green'
    },
    {
      icon: Bell,
      value: '8',
      label: 'Notifications',
      color: 'yellow'
    }
  ];

  const activities = [
    {
      icon: Bookmark,
      description: 'You bookmarked',
      highlight: 'Santorini Island',
      time: '2 days ago',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      description: 'You reviewed',
      highlight: 'Hotel Himalaya, Kathmandu',
      time: '5 days ago',
      color: 'green'
    },
    {
      icon: Plane,
      description: 'You completed your trip to',
      highlight: 'Pokhara, Nepal',
      time: '1 week ago',
      color: 'purple'
    }
  ];

  const StatCard = (props) => {
    const Icon = props.icon;
    return (
      <Paper className="p-md shadow-sm hover:shadow-md transition-shadow">
        <Group gap="md">
          <ThemeIcon
            size="xl"
            radius="md"
            variant="light"
            color={props.color}
            className="flex-shrink-0"
          >
            <Icon size={24} />
          </ThemeIcon>
          <div>
            <Text size="xl" fw={700} className="text-gray-900">
              {props.value}
            </Text>
            <Text size="sm" className="text-gray-600">
              {props.label}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  };

  const ActivityItem = (props) => {
    const Icon = props.icon;
    return (
      <div className="flex items-start gap-md p-sm hover:bg-gray-50 rounded transition-colors">
        <ThemeIcon
          size="md"
          radius="md"
          variant="light"
          color={props.color}
          className="flex-shrink-0 mt-xs"
        >
          <Icon size={16} />
        </ThemeIcon>
        <div className="flex-1">
          <Text size="sm" className="text-gray-700">
            {props.description} <Text component="span" fw={600}>{props.highlight}</Text>
          </Text>
          <Text size="xs" className="text-gray-500 mt-xs">
            {props.time}
          </Text>
        </div>
      </div>
    );
  };

  return (
    <Stack gap="md">
      <Title order={2} className="text-gray-900 flex items-center gap-sm">
        <Gauge size={24} />
        Dashboard
      </Title>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            color={stat.color}
          />
        ))}
      </div>

      {/* Recent Activity */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-900 mb-md">
          Recent Activity
        </Title>
        <Stack gap="xs">
          {activities.map((activity, index) => (
            <ActivityItem
              key={index}
              icon={activity.icon}
              description={activity.description}
              highlight={activity.highlight}
              time={activity.time}
              color={activity.color}
            />
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default DashboardTab;