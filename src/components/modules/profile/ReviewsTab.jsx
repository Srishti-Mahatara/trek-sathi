import React, { useState } from 'react';
import { Paper, Stack, Title, Text, Group, Button, Badge, Image, Select, TextInput, Progress } from '@mantine/core';
import { MessageCircle, Search, MapPin, Star, Edit, Trash2, ThumbsUp, Share2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const ReviewsTab = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilters, setActiveFilters] = useState([
        { id: 1, label: 'Last 6 Months' },
        { id: 2, label: 'Rating: 4+' }
    ]);

    const reviews = [
        {
            id: 1,
            title: 'Hotel Himalaya',
            category: 'hotel',
            location: 'Kathmandu, Nepal',
            date: 'April 15, 2025',
            rating: 4.0,
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            content: 'The Hotel Himalaya offered breathtaking views of the Kathmandu Valley and surrounding mountain range. The staff was incredibly attentive and the room was comfortable and clean. The only downside was the occasional power outage, but they have backup generators that kick in quickly. The restaurant serves authentic Nepalese cuisine that\'s worth trying. Overall, a great base for exploring the city!',
            photos: [
                'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop'
            ],
            extraPhotos: 2,
            stats: {
                helpful: 24,
                comments: 3
            }
        },
        {
            id: 2,
            title: 'Aegean Taverna',
            category: 'restaurant',
            location: 'Santorini, Greece',
            date: 'March 22, 2025',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop',
            content: 'This cliffside restaurant offered one of the best dining experiences of my life! The fresh seafood was caught that morning, and the Greek salad with local tomatoes and feta was incredible. We arrived just before sunset and watched the sky turn beautiful shades of orange and pink over the caldera. The service was impeccable - our server Nikos recommended the perfect local wine pairing. This place is pricey but absolutely worth it for a special occasion.',
            photos: [
                'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop'
            ],
            extraPhotos: 0,
            stats: {
                helpful: 47,
                comments: 8
            }
        },
        {
            id: 3,
            title: 'Machu Picchu',
            category: 'attraction',
            location: 'Cusco Region, Peru',
            date: 'February 10, 2025',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
            content: 'Visiting Machu Picchu was a bucket list experience that exceeded all expectations. I took the 4-day Inca Trail hike to reach the site, which was challenging but rewarding. Arriving at the Sun Gate at dawn and seeing the ancient city emerge from the morning mist was absolutely magical. Our guide, Carlos, was extremely knowledgeable about Incan history and architecture. My advice: book well in advance (permits sell out months ahead), prepare for all weather conditions, and spend at least 4-5 hours exploring the site.',
            photos: [
                'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop'
            ],
            extraPhotos: 5,
            stats: {
                helpful: 86,
                comments: 12
            }
        },
        {
            id: 4,
            title: 'Serengeti Discovery Safari',
            category: 'tour',
            location: 'Serengeti National Park, Tanzania',
            date: 'January 5, 2025',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
            content: 'This 7-day safari experience was worth every penny. Our guide Joseph had incredible wildlife tracking skills - we managed to see the Big Five within the first three days! The luxury tented camp was comfortable yet authentic, with amazing food and service. Watching the wildebeest migration cross the Mara River was an unforgettable spectacle of nature. The night drives offered a chance to see nocturnal animals like aardvarks and bush babies. I highly recommend adding the hot air balloon ride over the plains at sunrise - expensive but truly a once-in-a-lifetime experience.',
            photos: [
                'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop'
            ],
            extraPhotos: 7,
            stats: {
                helpful: 53,
                comments: 6
            }
        }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            hotel: 'blue',
            restaurant: 'green',
            attraction: 'orange',
            tour: 'purple'
        };
        return colors[category] || 'gray';
    };

    const getCategoryLabel = (category) => {
        const labels = {
            hotel: 'Hotel',
            restaurant: 'Restaurant',
            attraction: 'Attraction',
            tour: 'Tour'
        };
        return labels[category] || category;
    };

    const removeFilter = (filterId) => {
        setActiveFilters(prev => prev.filter(filter => filter.id !== filterId));
    };

    const clearAllFilters = () => {
        setActiveFilters([]);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} size={14} fill="currentColor" className="text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<Star key="half" size={14} fill="currentColor" className="text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={`empty-${i}`} size={14} className="text-gray-300" />);
        }

        return stars;
    };

    const ReviewCard = ({ review }) => {
        return (
            <Paper className="overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-md">
                {/* Review Header */}
                <div className="flex gap-sm p-sm">
                    <div className="relative flex-shrink-0">
                        <Image
                            src={review.image}
                            alt={review.title}
                            width={120}
                            height={80}
                            className="rounded-lg object-cover"
                        />
                        <Badge
                            color={getCategoryColor(review.category)}
                            size="xs"
                            className="absolute top-xs left-xs"
                        >
                            {getCategoryLabel(review.category)}
                        </Badge>
                    </div>

                    <div className="flex-1 min-w-0">
                        <Title order={4} className="text-gray-900 mb-xs">
                            {review.title}
                        </Title>

                        <Group gap="xs" className="mb-xs">
                            <MapPin size={12} className="text-gray-400" />
                            <Text size="sm" className="text-gray-600">
                                {review.location}
                            </Text>
                        </Group>

                        <Text size="sm" className="text-gray-500 mb-xs">
                            Reviewed on {review.date}
                        </Text>

                        <Group gap="xs" className="mb-xs">
                            <div className="flex gap-xxs">
                                {renderStars(review.rating)}
                            </div>
                            <Text size="sm" className="font-medium text-gray-700">
                                {review.rating.toFixed(1)}
                            </Text>
                        </Group>
                    </div>

                    <Group gap="xs" className="flex-shrink-0">
                        <Button variant="subtle" size="xs" className="text-gray-600 hover:text-blue-600">
                            <Edit size={14} />
                            <Text size="xs" className="ml-xxs">Edit</Text>
                        </Button>
                        <Button variant="subtle" size="xs" className="text-gray-600 hover:text-red-600">
                            <Trash2 size={14} />
                            <Text size="xs" className="ml-xxs">Delete</Text>
                        </Button>
                    </Group>
                </div>

                {/* Review Content */}
                <div className="px-sm pb-sm">
                    <Text className="text-gray-700 leading-relaxed mb-sm">
                        {review.content}
                    </Text>

                    {/* Photos */}
                    <div className="flex gap-xs mb-sm overflow-x-auto">
                        {review.photos.map((photo, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Image
                                    src={photo}
                                    alt={`Photo ${index + 1}`}
                                    width={80}
                                    height={60}
                                    className="rounded object-cover"
                                />
                            </div>
                        ))}
                        {review.extraPhotos > 0 && (
                            <div className="flex-shrink-0 w-20 h-15 bg-gray-200 rounded flex items-center justify-center">
                                <Text size="sm" className="text-gray-600 font-medium">
                                    +{review.extraPhotos}
                                </Text>
                            </div>
                        )}
                    </div>

                    {/* Stats */}
                    <Group gap="md" className="text-gray-600">
                        <Group gap="xs" className="cursor-pointer hover:text-blue-600">
                            <ThumbsUp size={14} />
                            <Text size="sm">{review.stats.helpful} people found this helpful</Text>
                        </Group>
                        <Group gap="xs" className="cursor-pointer hover:text-blue-600">
                            <MessageCircle size={14} />
                            <Text size="sm">{review.stats.comments} comments</Text>
                        </Group>
                        <Group gap="xs" className="cursor-pointer hover:text-blue-600">
                            <Share2 size={14} />
                            <Text size="sm">Share</Text>
                        </Group>
                    </Group>
                </div>
            </Paper>
        );
    };

    const Pagination = () => {
        const totalPages = 24;

        return (
            <div className="flex justify-between items-center mt-md">
                <Text size="sm" className="text-gray-600">
                    Showing 4 of 95 reviews
                </Text>

                <Group gap="xs">
                    <Button
                        variant="subtle"
                        size="sm"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    >
                        <ChevronLeft size={16} />
                    </Button>

                    <Button
                        variant={currentPage === 1 ? "filled" : "subtle"}
                        size="sm"
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </Button>

                    <Button
                        variant={currentPage === 2 ? "filled" : "subtle"}
                        size="sm"
                        onClick={() => setCurrentPage(2)}
                    >
                        2
                    </Button>

                    <Button
                        variant={currentPage === 3 ? "filled" : "subtle"}
                        size="sm"
                        onClick={() => setCurrentPage(3)}
                    >
                        3
                    </Button>

                    <Text size="sm" className="text-gray-400 px-xs">...</Text>

                    <Button
                        variant={currentPage === totalPages ? "filled" : "subtle"}
                        size="sm"
                        onClick={() => setCurrentPage(totalPages)}
                    >
                        {totalPages}
                    </Button>

                    <Button
                        variant="subtle"
                        size="sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    >
                        <ChevronRight size={16} />
                    </Button>
                </Group>
            </div>
        );
    };

    return (
        <Stack gap="md">
            <Title order={2} className="text-gray-900 flex items-center gap-xs">
                <MessageCircle size={24} />
                My Reviews
            </Title>

            {/* Filters */}
            <Paper className="p-sm shadow-sm">
                <div className="flex flex-col lg:flex-row gap-sm mb-sm">
                    <div className="flex-1">
                        <TextInput
                            placeholder="Search reviews..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            leftSection={<Search size={16} />}
                            className="w-full"
                        />
                    </div>

                    <Group gap="sm">
                        <Select
                            value={categoryFilter}
                            onChange={setCategoryFilter}
                            data={[
                                { value: 'all', label: 'All Categories' },
                                { value: 'hotels', label: 'Hotels' },
                                { value: 'restaurants', label: 'Restaurants' },
                                { value: 'attractions', label: 'Attractions' },
                                { value: 'tours', label: 'Tours' }
                            ]}
                            className="w-40"
                        />

                        <Select
                            value={sortBy}
                            onChange={setSortBy}
                            data={[
                                { value: 'recent', label: 'Most Recent' },
                                { value: 'rating-high', label: 'Highest Rated' },
                                { value: 'rating-low', label: 'Lowest Rated' }
                            ]}
                            className="w-40"
                        />
                    </Group>
                </div>

                {/* Active Filters */}
                {activeFilters.length > 0 && (
                    <div className="flex flex-wrap gap-xs items-center">
                        {activeFilters.map(filter => (
                            <Badge
                                key={filter.id}
                                variant="light"
                                className="cursor-pointer hover:bg-gray-200"
                                rightSection={
                                    <X
                                        size={12}
                                        className="ml-xxs cursor-pointer hover:text-red-500"
                                        onClick={() => removeFilter(filter.id)}
                                    />
                                }
                            >
                                {filter.label}
                            </Badge>
                        ))}
                        <Button
                            variant="subtle"
                            size="xs"
                            className="text-gray-500 hover:text-gray-700"
                            onClick={clearAllFilters}
                        >
                            Clear All
                        </Button>
                    </div>
                )}
            </Paper>

            {/* Reviews List */}
            <div>
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination />
        </Stack>
    );
};

export default ReviewsTab;