import React, { useState } from 'react';
import { Paper, Stack, Title, Text, Group, Button, Badge, Image, Select, Modal, Grid } from '@mantine/core';
import { Luggage, Calendar, MapPin, Thermometer, Cloud, Sun, Wind, CloudRain, Plus, Filter, Info, Star, Route, Edit, X } from 'lucide-react';

const TripsTab = () => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);

    const trips = [
        {
            id: 1,
            title: 'Pokhara Valley',
            location: 'Pokhara, Nepal',
            startDate: 'May 1, 2025',
            endDate: 'May 8, 2025',
            status: 'current',
            temperature: 23,
            weather: 'Partly Cloudy',
            weatherIcon: Cloud,
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop',
            duration: '8 days',
            forecast: [
                { day: 'Today', icon: Cloud, temp: 23 },
                { day: 'Tomorrow', icon: Cloud, temp: 22 },
                { day: 'Day 3', icon: CloudRain, temp: 21 },
                { day: 'Day 4', icon: Sun, temp: 24 },
                { day: 'Day 5', icon: Cloud, temp: 23 }
            ],
            attractions: [
                { name: 'Phewa Lake', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' },
                { name: 'World Peace Pagoda', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' },
                { name: 'Davis Falls', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop' },
                { name: 'Mahendra Cave', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' }
            ]
        },
        {
            id: 2,
            title: 'Kathmandu',
            location: 'Kathmandu, Nepal',
            startDate: 'May 9, 2025',
            endDate: 'May 15, 2025',
            status: 'upcoming',
            temperature: 26,
            weather: 'Cloudy',
            weatherIcon: Cloud,
            image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
            duration: '7 days',
            forecast: [
                { day: 'Day 1', icon: Cloud, temp: 26 },
                { day: 'Day 2', icon: Sun, temp: 28 },
                { day: 'Day 3', icon: Cloud, temp: 25 },
                { day: 'Day 4', icon: CloudRain, temp: 23 },
                { day: 'Day 5', icon: Sun, temp: 27 }
            ],
            attractions: [
                { name: 'Durbar Square', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' },
                { name: 'Swayambhunath', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' },
                { name: 'Boudhanath', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop' },
                { name: 'Pashupatinath', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' }
            ]
        },
        {
            id: 3,
            title: 'Chitwan National Park',
            location: 'Chitwan, Nepal',
            startDate: 'Apr 22, 2025',
            endDate: 'Apr 30, 2025',
            status: 'past',
            temperature: 30,
            weather: 'Sunny',
            weatherIcon: Sun,
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            duration: '9 days',
            forecast: [
                { day: 'Day 1', icon: Sun, temp: 30 },
                { day: 'Day 2', icon: Sun, temp: 32 },
                { day: 'Day 3', icon: Cloud, temp: 28 },
                { day: 'Day 4', icon: Sun, temp: 31 },
                { day: 'Day 5', icon: Sun, temp: 29 }
            ],
            attractions: [
                { name: 'Jungle Safari', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' },
                { name: 'Elephant Bathing', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop' },
                { name: 'Bird Watching', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' },
                { name: 'Tharu Village', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' }
            ]
        },
        {
            id: 4,
            title: 'Annapurna Circuit',
            location: 'Annapurna, Nepal',
            startDate: 'Apr 10, 2025',
            endDate: 'Apr 20, 2025',
            status: 'past',
            temperature: 18,
            weather: 'Windy',
            weatherIcon: Wind,
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            duration: '11 days',
            forecast: [
                { day: 'Day 1', icon: Wind, temp: 18 },
                { day: 'Day 2', icon: Cloud, temp: 16 },
                { day: 'Day 3', icon: CloudRain, temp: 14 },
                { day: 'Day 4', icon: Sun, temp: 20 },
                { day: 'Day 5', icon: Wind, temp: 17 }
            ],
            attractions: [
                { name: 'Thorong La Pass', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' },
                { name: 'Muktinath Temple', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' },
                { name: 'Manang Village', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop' },
                { name: 'Tilicho Lake', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' }
            ]
        },
        {
            id: 5,
            title: 'Everest Base Camp',
            location: 'Khumbu, Nepal',
            startDate: 'Mar 15, 2025',
            endDate: 'Mar 28, 2025',
            status: 'past',
            temperature: 5,
            weather: 'Snowy',
            weatherIcon: CloudRain,
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            duration: '14 days',
            forecast: [
                { day: 'Day 1', icon: CloudRain, temp: 5 },
                { day: 'Day 2', icon: Wind, temp: 3 },
                { day: 'Day 3', icon: CloudRain, temp: 2 },
                { day: 'Day 4', icon: Sun, temp: 8 },
                { day: 'Day 5', icon: Cloud, temp: 6 }
            ],
            attractions: [
                { name: 'Everest Base Camp', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' },
                { name: 'Kala Patthar', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' },
                { name: 'Namche Bazaar', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop' },
                { name: 'Tengboche Monastery', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' }
            ]
        },
        {
            id: 6,
            title: 'Lumbini Pilgrimage',
            location: 'Lumbini, Nepal',
            startDate: 'Feb 20, 2025',
            endDate: 'Feb 25, 2025',
            status: 'past',
            temperature: 22,
            weather: 'Clear',
            weatherIcon: Sun,
            image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
            duration: '6 days',
            forecast: [
                { day: 'Day 1', icon: Sun, temp: 22 },
                { day: 'Day 2', icon: Sun, temp: 24 },
                { day: 'Day 3', icon: Cloud, temp: 21 },
                { day: 'Day 4', icon: Sun, temp: 23 },
                { day: 'Day 5', icon: Sun, temp: 25 }
            ],
            attractions: [
                { name: 'Maya Devi Temple', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' },
                { name: 'Ashoka Pillar', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop' },
                { name: 'World Peace Pagoda', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop' },
                { name: 'Lumbini Museum', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop' }
            ]
        }
    ];

    const getStatusColor = (status) => {
        const colors = {
            current: 'green',
            upcoming: 'blue',
            past: 'gray'
        };
        return colors[status] || 'gray';
    };

    const getStatusLabel = (status) => {
        const labels = {
            current: 'Current Trip',
            upcoming: 'Upcoming Trip',
            past: 'Past Trip'
        };
        return labels[status] || status;
    };

    const filteredTrips = statusFilter === 'all'
        ? trips
        : trips.filter(trip => trip.status === statusFilter);

    const openModal = (trip) => {
        setSelectedTrip(trip);
        setModalOpened(true);
    };

    const closeModal = () => {
        setModalOpened(false);
        setSelectedTrip(null);
    };

    const TripCard = ({ trip }) => {
        const WeatherIcon = trip.weatherIcon;

        return (
            <Paper className="overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative">
                    <Image
                        src={trip.image}
                        alt={trip.title}
                        height={200}
                        className="object-cover"
                    />

                    <Badge
                        color={getStatusColor(trip.status)}
                        variant="filled"
                        className="absolute top-sm left-sm"
                    >
                        {getStatusLabel(trip.status)}
                    </Badge>

                    {trip.status === 'current' && (
                        <div className="absolute top-sm right-sm">
                            <div className="bg-green-500 w-lg h-lg rounded-full animate-pulse"></div>
                        </div>
                    )}
                </div>

                <div className="p-md">
                    <Title order={4} className="text-gray-900 mb-sm">
                        {trip.title}
                    </Title>

                    <Group gap="xs" className="mb-sm">
                        <MapPin size={14} className="text-gray-400" />
                        <Text size="sm" className="text-gray-600">
                            {trip.location}
                        </Text>
                    </Group>

                    <Group gap="xs" className="mb-md">
                        <Calendar size={14} className="text-gray-400" />
                        <Text size="sm" className="text-gray-600">
                            {trip.startDate} - {trip.endDate}
                        </Text>
                    </Group>

                    <Group justify="space-between" className="mb-md">
                        <Group gap="md">
                            <Group gap="xs">
                                <Thermometer size={14} className="text-orange-500" />
                                <Text size="sm" className="font-medium">
                                    {trip.temperature}°C
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <WeatherIcon size={14} className="text-blue-500" />
                                <Text size="sm" className="text-gray-600">
                                    {trip.weather}
                                </Text>
                            </Group>
                        </Group>
                        <Badge variant="light" size="sm">
                            {trip.duration}
                        </Badge>
                    </Group>

                    <Button
                        fullWidth
                        variant={trip.status === 'current' ? 'filled' : 'light'}
                        color={trip.status === 'current' ? 'green' : 'blue'}
                        onClick={() => openModal(trip)}
                    >
                        {trip.status === 'current' ? 'View Current Trip' : 'View Details'}
                    </Button>
                </div>
            </Paper>
        );
    };

    const TripModal = () => {
        if (!selectedTrip) return null;

        return (
            <Modal
                opened={modalOpened}
                onClose={closeModal}
                size="xl"
                padding="lg"
                radius="md"
                withCloseButton={false}
                className="trip-modal"
            >
                <div className="relative">
                    <Button
                        variant="subtle"
                        size="sm"
                        className="absolute top-0 right-0 z-10"
                        onClick={closeModal}
                    >
                        <X size={16} />
                    </Button>

                    <div className="mb-lg">
                        <div className="flex items-center justify-between mb-md">
                            <Title order={2} className="text-gray-900">
                                {selectedTrip.title}
                            </Title>
                            <Badge
                                color={getStatusColor(selectedTrip.status)}
                                variant="filled"
                                size="lg"
                            >
                                {getStatusLabel(selectedTrip.status)}
                            </Badge>
                        </div>
                    </div>

                    <div className="mb-lg">
                        <Image
                            src={selectedTrip.image}
                            alt={selectedTrip.title}
                            height={300}
                            className="w-full object-cover rounded-md"
                        />
                    </div>

                    <Grid>
                        <Grid.Col span={6}>
                            <Paper className="p-md h-full">
                                <Title order={4} className="text-gray-800 mb-md flex items-center gap-sm">
                                    <Info size={18} />
                                    Trip Information
                                </Title>
                                <Stack gap="sm">
                                    <Group justify="space-between">
                                        <Text className="font-medium text-gray-600">Location:</Text>
                                        <Text className="text-gray-900">{selectedTrip.location}</Text>
                                    </Group>
                                    <Group justify="space-between">
                                        <Text className="font-medium text-gray-600">Dates:</Text>
                                        <Text className="text-gray-900">
                                            {selectedTrip.startDate} - {selectedTrip.endDate}
                                        </Text>
                                    </Group>
                                    <Group justify="space-between">
                                        <Text className="font-medium text-gray-600">Duration:</Text>
                                        <Text className="text-gray-900">{selectedTrip.duration}</Text>
                                    </Group>
                                </Stack>
                            </Paper>
                        </Grid.Col>

                        <Grid.Col span={6}>
                            <Paper className="p-md h-full">
                                <Title order={4} className="text-gray-800 mb-md flex items-center gap-sm">
                                    <Cloud size={18} />
                                    Weather Forecast
                                </Title>
                                <div className="grid grid-cols-5 gap-sm">
                                    {selectedTrip.forecast.map((forecast, index) => {
                                        const ForecastIcon = forecast.icon;
                                        return (
                                            <div key={index} className="text-center">
                                                <Text size="xs" className="text-gray-600 mb-xs">
                                                    {forecast.day}
                                                </Text>
                                                <div className="flex justify-center mb-xs">
                                                    <ForecastIcon size={16} className="text-blue-500" />
                                                </div>
                                                <Text size="sm" className="font-medium">
                                                    {forecast.temp}°C
                                                </Text>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Paper>
                        </Grid.Col>
                    </Grid>

                    <div className="mt-6">
                        <Paper className="p-4">
                            <Title order={4} className="text-gray-800 mb-md flex items-center gap-sm">
                                <MapPin size={18} />
                                Location
                            </Title>
                            <div className="bg-gray-100 rounded-md p-xl text-center">
                                <MapPin size={48} className="text-gray-400 mx-auto mb-sm" />
                                <Text className="text-gray-600">Map would be displayed here</Text>
                            </div>
                        </Paper>
                    </div>

                    <div className="mt-6">
                        <Paper className="p-4">
                            <Title order={4} className="text-gray-800 mb-md flex items-center gap-sm">
                                <Star size={18} />
                                Top Attractions
                            </Title>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                                {selectedTrip.attractions.map((attraction, index) => (
                                    <div key={index} className="text-center">
                                        <Image
                                            src={attraction.image}
                                            alt={attraction.name}
                                            height={120}
                                            className="w-full object-cover rounded-md mb-sm"
                                        />
                                        <Text size="sm" className="font-medium text-gray-700">
                                            {attraction.name}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        </Paper>
                    </div>

                    <div className="mt-lg flex gap-md justify-end">
                        <Button variant="light" leftSection={<Edit size={16} />}>
                            Edit Trip
                        </Button>
                        <Button leftSection={<Route size={16} />}>
                            View Itinerary
                        </Button>
                    </div>
                </div>
            </Modal>
        );
    };

    const stats = {
        current: trips.filter(t => t.status === 'current').length,
        upcoming: trips.filter(t => t.status === 'upcoming').length,
        past: trips.filter(t => t.status === 'past').length,
        total: trips.length
    };

    return (
        <>
            <Stack gap="md">
                <Title order={2} className="text-gray-900 flex items-center gap-sm">
                    <Luggage size={24} />
                    My Trips
                </Title>

                {/* Stats */}
                <Group gap="md" className="mb-md">
                    <Badge variant="light" color="green" size="lg">
                        {stats.current} Current
                    </Badge>
                    <Badge variant="light" color="blue" size="lg">
                        {stats.upcoming} Upcoming
                    </Badge>
                    <Badge variant="light" color="gray" size="lg">
                        {stats.past} Past
                    </Badge>
                    <Badge variant="light" size="lg">
                        {stats.total} Total Trips
                    </Badge>
                </Group>

                {/* Controls */}
                <Group justify="space-between" className="mb-md">
                    <Button leftSection={<Plus size={16} />} color="blue">
                        Plan New Trip
                    </Button>

                    <Group gap="md">
                        <Select
                            placeholder="All Trips"
                            value={statusFilter}
                            onChange={setStatusFilter}
                            data={[
                                { value: 'all', label: 'All Trips' },
                                { value: 'current', label: 'Current Trips' },
                                { value: 'upcoming', label: 'Upcoming Trips' },
                                { value: 'past', label: 'Past Trips' }
                            ]}
                            leftSection={<Filter size={16} />}
                            className="w-40"
                        />
                    </Group>
                </Group>

                {/* Current Trip Highlight */}
                {statusFilter === 'all' && stats.current > 0 && (
                    <div className="mb-md">
                        <Title order={3} className="text-gray-800 mb-md flex items-center gap-sm">
                            <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
                            Current Trip
                        </Title>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                            {trips.filter(trip => trip.status === 'current').map(trip => (
                                <TripCard key={trip.id} trip={trip} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Upcoming Trips */}
                {(statusFilter === 'all' || statusFilter === 'upcoming') && stats.upcoming > 0 && (
                    <div className="mb-md">
                        {statusFilter === 'all' && (
                            <Title order={3} className="text-gray-800 mb-md">
                                Upcoming Trips
                            </Title>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                            {trips.filter(trip => trip.status === 'upcoming').map(trip => (
                                <TripCard key={trip.id} trip={trip} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Past Trips */}
                {(statusFilter === 'all' || statusFilter === 'past') && stats.past > 0 && (
                    <div className="mb-md">
                        {statusFilter === 'all' && (
                            <Title order={3} className="text-gray-800 mb-md">
                                Past Trips
                            </Title>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                            {trips.filter(trip => trip.status === 'past').map(trip => (
                                <TripCard key={trip.id} trip={trip} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Trips (when filtered) */}
                {statusFilter === 'current' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                        {filteredTrips.map(trip => (
                            <TripCard key={trip.id} trip={trip} />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {filteredTrips.length === 0 && (
                    <div className="text-center py-2xl">
                        <Luggage size={48} className="text-gray-300 mx-auto mb-md" />
                        <Title order={3} className="text-gray-500 mb-md">
                            No trips found
                        </Title>
                        <Text className="text-gray-400 mb-md">
                            {statusFilter === 'all'
                                ? "You haven't planned any trips yet."
                                : `No ${statusFilter} trips found.`}
                        </Text>
                        <Button leftSection={<Plus size={16} />}>
                            Plan Your First Trip
                        </Button>
                    </div>
                )}
            </Stack>

            <TripModal />
        </>
    );
};

export default TripsTab;