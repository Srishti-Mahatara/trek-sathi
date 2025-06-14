import React, { useState } from 'react';
import { Tabs, Paper, Box, Title, Text, Group, Avatar, Stack, Badge } from '@mantine/core';
import { Bookmark, Calendar, Mail, MapPin, MessageCircle, PhoneOutgoing, Route, Settings, Subtitles, Thermometer, User } from 'lucide-react';
import DashboardTab from '../../components/modules/profile/DashboardTab';
import PersonalInfoTab from '../../components/modules/profile/PersonalInfoTab';
import MyPostsTab from '../../components/modules/profile/MyPostsTab';
import BookmarksTab from '../../components/modules/profile/BookmarksTab';
import TripsTab from '../../components/modules/profile/TripsTab';
import SavedItinerariesTab from '../../components/modules/profile/SavedItinerariesTab';
import ReviewsTab from '../../components/modules/profile/ReviewsTab';
import AccountSettingsTab from '../../components/modules/profile/AccountSettingsTab';
import EmailSettingsTab from '../../components/modules/profile/EmailSettingsTab';


const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const userInfo = {
        name: 'Sarah Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        location: 'New York, USA',
        joinDate: 'Joined January 2024',
        followers: 1245,
        following: 342,
        bio: 'Travel enthusiast | Adventure seeker | Photography lover | Always planning my next journey around the world!'
    };

    const stats = [
        { label: 'Total Trips', value: '12' },
        { label: 'Reviews', value: '48' },
        { label: 'Bookmarks', value: '156' },
        { label: 'Itineraries', value: '8' }
    ];

    return (
        <main className="mx-auto px-xs lg:px-xl bg-gray-100 min-h-screen py-md">
            <div className=" mx-auto">
                {/* Profile Header */}
                <Paper className="p-md mb-md shadow-sm">
                    <Group className="flex-col sm:flex-row items-start sm:items-center gap-md">
                        <Avatar
                            src={userInfo.avatar}
                            size={120}
                            radius="xl"
                            className="border-4 border-white shadow-md"
                        />
                        <div className="flex-1">
                            <Title order={2} className="text-gray-900 mb-xs">{userInfo.name}</Title>
                            <Group gap="md" className="mb-sm">
                                <Group gap="xs">
                                    <MapPin size={18} className="text-gray-500" />
                                    <Text size="sm" className="text-gray-600">{userInfo.location}</Text>
                                </Group>
                                <Group gap="xs">
                                    <Calendar size={18} className="text-gray-500" />
                                    <Text size="sm" className="text-gray-600">{userInfo.joinDate}</Text>
                                </Group>
                            </Group>
                            <Text className="text-gray-700 mb-md">{userInfo.bio}</Text>
                            <Group gap="md">
                                <Group gap="xs">
                                    <Text fw={600}>{userInfo.followers}</Text>
                                    <Text size="sm" className="text-gray-600">Followers</Text>
                                </Group>
                                <Group gap="xs">
                                    <Text fw={600}>{userInfo.following}</Text>
                                    <Text size="sm" className="text-gray-600">Following</Text>
                                </Group>
                            </Group>
                        </div>
                    </Group>
                </Paper>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-md mb-md">
                    {stats.map((stat) => (
                        <Paper key={stat.label} className="p-md text-center shadow-sm">
                            <Text fw={700} size="xl" className="text-primary mb-xs">{stat.value}</Text>
                            <Text size="sm" className="text-gray-600">{stat.label}</Text>
                        </Paper>
                    ))}
                </div>

                {/* Tabs */}
                <Paper className="shadow-sm bg-gray-100">
                    <Tabs value={activeTab} onChange={setActiveTab} className='flex '>
                        <Tabs.List className="border-b border-gray-20 w-[300px] bg-white h-fit">
                            <Tabs.Tab value="dashboard" className='w-full py-sm' leftSection={<Thermometer size={18} />}>
                                Dashboard
                            </Tabs.Tab>
                            <Tabs.Tab value="personal-info" className='w-full py-sm' leftSection={<User size={18} />}>
                                Personal Info
                            </Tabs.Tab>
                            <Tabs.Tab value="posts" className='w-full py-sm' leftSection={<PhoneOutgoing size={18} />}>
                                My Posts
                            </Tabs.Tab>
                            <Tabs.Tab value="bookmarks" className='w-full py-sm' leftSection={<Bookmark size={18} />}>
                                Bookmarks
                            </Tabs.Tab>
                            <Tabs.Tab value="trips" className='w-full py-sm' leftSection={<Subtitles size={18} />}>
                                My Trips
                            </Tabs.Tab>
                            <Tabs.Tab value="itineraries" className='w-full py-sm' leftSection={<Route size={18} />}>
                                Saved Itineraries
                            </Tabs.Tab>
                            <Tabs.Tab value="reviews" className='w-full py-sm' leftSection={<MessageCircle size={18} />}>
                                My Reviews
                            </Tabs.Tab>
                            <Tabs.Tab value="settings" className='w-full py-sm' leftSection={<Settings size={18} />}>
                                Account Settings
                            </Tabs.Tab>
                            <Tabs.Tab value="newsletter" className='w-full py-sm' leftSection={<Mail size={18} />}>
                                Email Preferences
                            </Tabs.Tab>
                        </Tabs.List>

                        <div className='w-full'>
                            <Tabs.Panel value="dashboard" className="p-md">
                                <DashboardTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="personal-info" className="p-md">
                                <PersonalInfoTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="posts" className="p-md">
                                <MyPostsTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="bookmarks" className="p-md">
                                <BookmarksTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="trips" className="p-md">
                                <TripsTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="itineraries" className="p-md">
                                <SavedItinerariesTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="reviews" className="p-md">
                                <ReviewsTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="settings" className="p-md">
                                <AccountSettingsTab />
                            </Tabs.Panel>

                            <Tabs.Panel value="newsletter" className="p-md">
                                <EmailSettingsTab />
                            </Tabs.Panel>
                        </div>


                    </Tabs>
                </Paper>
            </div>
        </main>
    );
};

export default ProfilePage; 