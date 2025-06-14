import React, { useState } from 'react';
import { Paper, Stack, Title, Text, Group, Button, Badge, Image, Select, Progress } from '@mantine/core';
import { Route, Plus, Filter, Calendar, MapPin, Mountain, Clock, CheckCircle, Camera, Building, Utensils, Edit, Heart, Trash2, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const SavedItinerariesTab = () => {
    const [sortBy, setSortBy] = useState('date-desc');
    const [filterBy, setFilterBy] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const itineraries = [
        {
            id: 1,
            title: 'Annapurna Base Camp Trek',
            location: 'Nepal',
            dates: 'May 10 - May 22, 2025',
            destinations: 'Kathmandu → Pokhara → Annapurna',
            status: 'upcoming',
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            isFavorite: false,
            stats: [
                { icon: Clock, label: '12 days' },
                { icon: Mountain, label: '4,130m altitude' },
                { icon: CheckCircle, label: 'Guide arranged' }
            ],
            progress: 70,
            hasProgress: true
        },
        {
            id: 2,
            title: 'Pokhara Weekend Getaway',
            location: 'Pokhara',
            dates: 'April 15 - April 17, 2025',
            destinations: 'Pokhara City → Phewa Lake → Peace Pagoda',
            status: 'past',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop',
            isFavorite: true,
            stats: [
                { icon: Calendar, label: '3 days' },
                { icon: MapPin, label: '5 locations' },
                { icon: Camera, label: '46 photos' }
            ],
            progress: 0,
            hasProgress: false
        },
        {
            id: 3,
            title: 'Kathmandu Cultural Tour',
            location: 'Kathmandu',
            dates: 'June 5 - June 8, 2025',
            destinations: 'Durbar Square → Pashupatinath → Boudhanath',
            status: 'upcoming',
            image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
            isFavorite: false,
            stats: [
                { icon: Calendar, label: '4 days' },
                { icon: Building, label: '7 temples' },
                { icon: Utensils, label: 'Food tour' }
            ],
            progress: 30,
            hasProgress: true
        },
        {
            id: 4,
            title: 'Everest Base Camp Adventure',
            location: 'Khumbu',
            dates: 'March 15 - March 30, 2025',
            destinations: 'Lukla → Namche → EBC',
            status: 'past',
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            isFavorite: true,
            stats: [
                { icon: Clock, label: '16 days' },
                { icon: Mountain, label: '5,364m altitude' },
                { icon: Camera, label: '127 photos' }
            ],
            progress: 0,
            hasProgress: false
        },
        {
            id: 5,
            title: 'Chitwan Safari Experience',
            location: 'Chitwan',
            dates: 'July 20 - July 24, 2025',
            destinations: 'Chitwan National Park → Sauraha',
            status: 'upcoming',
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            isFavorite: false,
            stats: [
                { icon: Calendar, label: '5 days' },
                { icon: Camera, label: 'Wildlife photography' },
                { icon: CheckCircle, label: 'Safari booked' }
            ],
            progress: 85,
            hasProgress: true
        }
    ];

    const [itinerariesData, setItinerariesData] = useState(itineraries);

    const getStatusColor = (status) => {
        const colors = {
            upcoming: 'blue',
            past: 'gray'
        };
        return colors[status] || 'gray';
    };

    const getStatusLabel = (status) => {
        const labels = {
            upcoming: 'Upcoming',
            past: 'Past'
        };
        return labels[status] || status;
    };

    const toggleFavorite = (id) => {
        setItinerariesData(prev =>
            prev.map(itinerary =>
                itinerary.id === id
                    ? { ...itinerary, isFavorite: !itinerary.isFavorite }
                    : itinerary
            )
        );
    };

    const sortItineraries = (itineraries, sortBy) => {
        const sorted = [...itineraries];
        switch (sortBy) {
            case 'date-desc':
                return sorted.sort((a, b) => new Date(b.dates.split(' - ')[0]) - new Date(a.dates.split(' - ')[0]));
            case 'date-asc':
                return sorted.sort((a, b) => new Date(a.dates.split(' - ')[0]) - new Date(b.dates.split(' - ')[0]));
            case 'name-asc':
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            case 'name-desc':
                return sorted.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return sorted;
        }
    };

    const filterItineraries = (itineraries, filterBy) => {
        switch (filterBy) {
            case 'upcoming':
                return itineraries.filter(item => item.status === 'upcoming');
            case 'past':
                return itineraries.filter(item => item.status === 'past');
            case 'favorites':
                return itineraries.filter(item => item.isFavorite);
            default:
                return itineraries;
        }
    };

    const filteredAndSortedItineraries = sortItineraries(
        filterItineraries(itinerariesData, filterBy),
        sortBy
    );

    const ItineraryCard = ({ itinerary }) => {
        return (
            <Paper className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                    <div className="absolute top-msm left-msm right-msm flex justify-between items-start z-10">
                        <Badge
                            color={getStatusColor(itinerary.status)}
                            variant="filled"
                        >
                            {getStatusLabel(itinerary.status)}
                        </Badge>
                        <Group gap="xs">
                            <Button
                                variant="subtle"
                                size="xs"
                                className="bg-white/80 hover:bg-white text-gray-700"
                                title="Edit"
                            >
                                <Edit size={14} />
                            </Button>
                            <Button
                                variant="subtle"
                                size="xs"
                                className={`${itinerary.isFavorite
                                    ? 'bg-red-500 hover:bg-red-600 text-white'
                                    : 'bg-white/80 hover:bg-white text-gray-700'
                                    }`}
                                title={itinerary.isFavorite ? 'Unfavorite' : 'Favorite'}
                                onClick={() => toggleFavorite(itinerary.id)}
                            >
                                <Heart
                                    size={14}
                                    fill={itinerary.isFavorite ? 'currentColor' : 'none'}
                                />
                            </Button>
                            <Button
                                variant="subtle"
                                size="xs"
                                className="bg-white/80 hover:bg-white text-gray-700"
                                title="Delete"
                            >
                                <Trash2 size={14} />
                            </Button>
                        </Group>
                    </div>

                    <div className="relative">
                        <Image
                            src={itinerary.image}
                            alt={itinerary.title}
                            height={220}
                            className="object-cover"
                        />
                        <div className="absolute bottom-msm right-msm">
                            <Badge variant="filled" className="bg-black/50 text-white">
                                {itinerary.location}
                            </Badge>
                        </div>
                    </div>
                </div>

                <div className="p-sm">
                    <Title order={4} className="text-gray-900 mb-msm">
                        {itinerary.title}
                    </Title>

                    <Group gap="xs" className="mb-xs">
                        <Calendar size={14} className="text-gray-400" />
                        <Text size="sm" className="text-gray-600">
                            {itinerary.dates}
                        </Text>
                    </Group>

                    <Group gap="xs" className="mb-sm">
                        <MapPin size={14} className="text-gray-400" />
                        <Text size="sm" className="text-gray-600 line-clamp-1">
                            {itinerary.destinations}
                        </Text>
                    </Group>

                    <div className="grid grid-cols-1 gap-xs mb-sm">
                        {itinerary.stats.map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                                <Group key={index} gap="xs">
                                    <StatIcon size={14} className="text-blue-500" />
                                    <Text size="sm" className="text-gray-700">
                                        {stat.label}
                                    </Text>
                                </Group>
                            );
                        })}
                    </div>

                    {itinerary.hasProgress && (
                        <div className="mb-sm">
                            <Text size="sm" className="text-gray-600 mb-xs">
                                Trip preparations: {itinerary.progress}% complete
                            </Text>
                            <Progress
                                value={itinerary.progress}
                                size="sm"
                                color="blue"
                                className="w-full"
                            />
                        </div>
                    )}

                    <Group justify="space-between">
                        <Button variant="light" size="sm" className="flex-1">
                            View Details
                        </Button>
                        <Button variant="subtle" size="sm">
                            <Share2 size={16} />
                        </Button>
                    </Group>
                </div>
            </Paper>
        );
    };

    const EmptyState = () => (
        <div className="text-center py-2xl col-span-full">
            <Route size={64} className="text-gray-300 mx-auto mb-sm" />
            <Title order={3} className="text-gray-500 mb-xs">
                No Itineraries Found
            </Title>
            <Text className="text-gray-400 mb-md">
                Your filtered search didn't match any saved itineraries.
            </Text>
            <Button leftSection={<Plus size={16} />}>
                Create New Itinerary
            </Button>
        </div>
    );

    const Pagination = () => {
        const totalPages = 3;

        return (
            <Group justify="center" gap="xs" className="mt-xl">
                <Button
                    variant="subtle"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                >
                    <ChevronLeft size={16} />
                </Button>

                {[1, 2, 3].map(page => (
                    <Button
                        key={page}
                        variant={currentPage === page ? "filled" : "subtle"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </Button>
                ))}

                <Button
                    variant="subtle"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                >
                    <ChevronRight size={16} />
                </Button>
            </Group>
        );
    };

    return (
        <Stack gap="md">
            <Title order={2} className="text-gray-900 flex items-center gap-xs">
                <Route size={24} />
                Saved Itineraries
            </Title>

            {/* Filters and Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-sm mb-md">
                <Group gap="md">
                    <div className="flex  items-center gap-xxs">
                        <Text size="sm" className="font-medium text-gray-700">Sort by:</Text>
                        <Select
                            value={sortBy}
                            onChange={setSortBy}
                            data={[
                                { value: 'date-desc', label: 'Date (Newest First)' },
                                { value: 'date-asc', label: 'Date (Oldest First)' },
                                { value: 'name-asc', label: 'Name (A-Z)' },
                                { value: 'name-desc', label: 'Name (Z-A)' }
                            ]}
                            className=""
                        />
                    </div>

                    <div className="flex items-center gap-xxs">
                        <Text size="sm" className="font-medium text-gray-700">Filter by:</Text>
                        <Select
                            value={filterBy}
                            onChange={setFilterBy}
                            data={[
                                { value: 'all', label: 'All Itineraries' },
                                { value: 'upcoming', label: 'Upcoming' },
                                { value: 'past', label: 'Past' },
                                { value: 'favorites', label: 'Favorites' }
                            ]}
                            leftSection={<Filter size={16} />}
                        />
                    </div>
                </Group>

                <Button leftSection={<Plus size={16} />} color="blue">
                    Create New Itinerary
                </Button>
            </div>

            {/* Itineraries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                {filteredAndSortedItineraries.length > 0 ? (
                    filteredAndSortedItineraries.map(itinerary => (
                        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
                    ))
                ) : (
                    <EmptyState />
                )}
            </div>

            {/* Pagination */}
            {filteredAndSortedItineraries.length > 0 && <Pagination />}
        </Stack>
    );
};

export default SavedItinerariesTab;