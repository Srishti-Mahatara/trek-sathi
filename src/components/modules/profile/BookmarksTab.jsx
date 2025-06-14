import React, { useState } from 'react';
import { Paper, Stack, Title, Text, Group, Button, Select, Badge, Image, ActionIcon, TextInput } from '@mantine/core';
import { Bookmark, Search, Grid3X3, List, MapPin, Star, Calendar, Trash2, Share, Luggage, Hotel, Utensils, Map, Activity } from 'lucide-react';

const BookmarksTab = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [activePage, setActivePage] = useState(1);

    const bookmarks = [
        {
            id: 1,
            title: 'Santorini Island',
            location: 'Cyclades, Greece',
            type: 'attraction',
            savedDate: '2025-04-02',
            savedAgo: '2 days ago',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
            notes: 'Beautiful white buildings and amazing sunset views. Must visit during summer.',
            typeIcon: Map
        },
        {
            id: 2,
            title: 'Hotel Himalaya',
            location: 'Kathmandu, Nepal',
            type: 'hotel',
            savedDate: '2025-03-12',
            savedAgo: '3 weeks ago',
            rating: 4.0,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
            notes: 'Great mountain views and excellent service. Traditional Nepalese architecture.',
            typeIcon: Hotel
        },
        {
            id: 3,
            title: 'Sushi Koyama',
            location: 'Tokyo, Japan',
            type: 'hotel',
            savedDate: '2025-03-12',
            savedAgo: '3 weeks ago',
            rating: 4.0,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
            notes: 'Great mountain views and excellent service. Traditional Nepalese architecture.',
            typeIcon: Hotel
        },
        {
            id: 4,
            title: 'Bali Cooking Class',
            location: 'Ubud, Bali, Indonesia',
            type: 'activity',
            savedDate: '2025-02-10',
            savedAgo: '3 months ago',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
            notes: 'Learn to cook authentic Balinese dishes. Includes market visit and recipe book.',
            typeIcon: Activity
        },
        {
            id: 5,
            title: 'Machu Picchu',
            location: 'Cusco Region, Peru',
            type: 'attraction',
            savedDate: '2025-01-15',
            savedAgo: '4 months ago',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop',
            notes: 'Book Inca Trail permits well in advance. Best visited during dry season (May-Oct).',
            typeIcon: Map
        },
        {
            id: 6,
            title: 'La Boqueria Market',
            location: 'Barcelona, Spain',
            type: 'restaurant',
            savedDate: '2024-12-05',
            savedAgo: '5 months ago',
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
            notes: 'Amazing food market with fresh produce and local delicacies. Try the fruit smoothies!',
            typeIcon: Utensils
        }
    ];

    const getTypeColor = (type) => {
        const colors = {
            attraction: 'blue',
            hotel: 'green',
            restaurant: 'orange',
            activity: 'purple'
        };
        return colors[type] || 'gray';
    };

    const getTypeLabel = (type) => {
        const labels = {
            attraction: 'Attraction',
            hotel: 'Hotel',
            restaurant: 'Restaurant',
            activity: 'Activity'
        };
        return labels[type] || type;
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        return (
            <Group gap={2}>
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
                {hasHalfStar && <Star size={14} className="fill-yellow-400/50 text-yellow-400" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={i} size={14} className="text-gray-300" />
                ))}
                <Text size="sm" className="ml-1 font-medium">{rating}</Text>
            </Group>
        );
    };

    const BookmarkCard = ({ bookmark }) => {
        const TypeIcon = bookmark.typeIcon;

        return (
            <Paper className="overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative">
                    <Image
                        src={bookmark.image}
                        alt={bookmark.title}
                        height={200}
                        className="object-cover"
                    />

                    <Badge
                        color={getTypeColor(bookmark.type)}
                        variant="filled"
                        className="absolute top-2 left-2"
                        leftSection={<TypeIcon size={12} />}
                    >
                        {getTypeLabel(bookmark.type)}
                    </Badge>

                    {/* Hover Actions */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Group gap="xs">
                            <ActionIcon size="sm" variant="filled" color="red" className="bg-red-500/80 hover:bg-red-500">
                                <Trash2 size={14} />
                            </ActionIcon>
                            <ActionIcon size="sm" variant="filled" color="blue" className="bg-blue-500/80 hover:bg-blue-500">
                                <Luggage size={14} />
                            </ActionIcon>
                            <ActionIcon size="sm" variant="filled" color="green" className="bg-green-500/80 hover:bg-green-500">
                                <Share size={14} />
                            </ActionIcon>
                        </Group>
                    </div>

                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <MapPin size={12} />
                        {bookmark.location}
                    </div>
                </div>

                <div className="p-md">
                    <Title order={4} className="text-gray-900 mb-sm">
                        {bookmark.title}
                    </Title>

                    <Group justify="space-between" className="mb-sm">
                        <Group gap="xs">
                            <Calendar size={14} className="text-gray-400" />
                            <Text size="xs" className="text-gray-500">
                                Saved {bookmark.savedAgo}
                            </Text>
                        </Group>
                        {renderStars(bookmark.rating)}
                    </Group>

                    <Text size="sm" className="text-gray-600 line-clamp-2">
                        {bookmark.notes}
                    </Text>
                </div>
            </Paper>
        );
    };

    const BookmarkListItem = ({ bookmark }) => {
        const TypeIcon = bookmark.typeIcon;

        return (
            <Paper className="p-md shadow-sm hover:shadow-md transition-shadow group">
                <Group gap="md">
                    <Image
                        src={bookmark.image}
                        alt={bookmark.title}
                        width={80}
                        height={60}
                        className="object-cover rounded"
                    />

                    <div className="flex-1">
                        <Group justify="space-between" className="mb-xs">
                            <Title order={5} className="text-gray-900">
                                {bookmark.title}
                            </Title>
                            <Badge
                                color={getTypeColor(bookmark.type)}
                                variant="light"
                                leftSection={<TypeIcon size={12} />}
                            >
                                {getTypeLabel(bookmark.type)}
                            </Badge>
                        </Group>

                        <Group gap="md" className="mb-xs">
                            <Group gap="xs">
                                <MapPin size={14} className="text-gray-400" />
                                <Text size="sm" className="text-gray-600">{bookmark.location}</Text>
                            </Group>
                            <Group gap="xs">
                                <Calendar size={14} className="text-gray-400" />
                                <Text size="sm" className="text-gray-500">Saved {bookmark.savedAgo}</Text>
                            </Group>
                            {renderStars(bookmark.rating)}
                        </Group>

                        <Text size="sm" className="text-gray-600 line-clamp-1">
                            {bookmark.notes}
                        </Text>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Group gap="xs">
                            <ActionIcon size="sm" variant="light" color="red">
                                <Trash2 size={14} />
                            </ActionIcon>
                            <ActionIcon size="sm" variant="light" color="blue">
                                <Luggage size={14} />
                            </ActionIcon>
                            <ActionIcon size="sm" variant="light" color="green">
                                <Share size={14} />
                            </ActionIcon>
                        </Group>
                    </div>
                </Group>
            </Paper>
        );
    };

    const stats = {
        countries: 12,
        cities: 24,
        total: bookmarks.length
    };

    return (
        <Stack gap="md">
            <Title order={2} className="text-gray-900 flex items-center gap-sm">
                <Bookmark size={24} />
                My Bookmarks
            </Title>

            {/* Stats */}
            <Group gap="md" className="mb-md">
                <Badge variant="light" size="lg" leftSection={<Map size={16} />}>
                    {stats.countries} Countries
                </Badge>
                <Badge variant="light" size="lg" leftSection={<MapPin size={16} />}>
                    {stats.cities} Cities
                </Badge>
                <Badge variant="light" size="lg" leftSection={<Bookmark size={16} />}>
                    {stats.total} Total Bookmarks
                </Badge>
            </Group>

            {/* Controls */}
            <Group justify="space-between" className="mb-md">
                <Group gap="md">
                    <TextInput
                        placeholder="Search your bookmarks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        leftSection={<Search size={16} />}
                        className="w-64"
                    />
                    <Select
                        placeholder="All Types"
                        value={typeFilter}
                        onChange={setTypeFilter}
                        data={[
                            { value: 'all', label: 'All Types' },
                            { value: 'attraction', label: 'Attractions' },
                            { value: 'restaurant', label: 'Restaurants' },
                            { value: 'hotel', label: 'Hotels' },
                            { value: 'activity', label: 'Activities' }
                        ]}
                        className="w-36"
                    />
                    <Select
                        placeholder="Any Time"
                        value={dateFilter}
                        onChange={setDateFilter}
                        data={[
                            { value: 'all', label: 'Any Time' },
                            { value: 'week', label: 'Last Week' },
                            { value: 'month', label: 'Last Month' },
                            { value: '3months', label: 'Last 3 Months' },
                            { value: 'year', label: 'Last Year' }
                        ]}
                        className="w-36"
                    />
                </Group>

                <Group gap="xs">
                    <ActionIcon
                        size="lg"
                        variant={viewMode === 'grid' ? 'filled' : 'light'}
                        onClick={() => setViewMode('grid')}
                    >
                        <Grid3X3 size={18} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        variant={viewMode === 'list' ? 'filled' : 'light'}
                        onClick={() => setViewMode('list')}
                    >
                        <List size={18} />
                    </ActionIcon>
                </Group>
            </Group>

            {/* Bookmarks Display */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                    {bookmarks.map(bookmark => (
                        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                    ))}
                </div>
            ) : (
                <Stack gap="sm">
                    {bookmarks.map(bookmark => (
                        <BookmarkListItem key={bookmark.id} bookmark={bookmark} />
                    ))}
                </Stack>
            )}

            {/* Pagination */}
            <Group justify="center" gap="xs" className="mt-md">
                {[1, 2, 3].map(page => (
                    <Button
                        key={page}
                        size="sm"
                        variant={activePage === page ? "filled" : "subtle"}
                        onClick={() => setActivePage(page)}
                    >
                        {page}
                    </Button>
                ))}
                <Text size="sm" className="text-gray-500">...</Text>
                <Button size="sm" variant="subtle">8</Button>
            </Group>
        </Stack>
    );
};

export default BookmarksTab;