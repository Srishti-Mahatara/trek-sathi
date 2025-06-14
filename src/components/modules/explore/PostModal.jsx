import { IconSun, IconCloud, IconCloudRain } from '@tabler/icons-react';
import { Modal, Badge, Grid, Button, useMantineTheme } from '@mantine/core';
import {
    IconInfoCircleFilled,
    IconCloudFilled,
    IconMapPinFilled,
    IconStarFilled,
    IconCamera,
    IconBulb,
    IconHeartFilled,
    IconMessageFilled,
    IconBookmark
} from '@tabler/icons-react';
import Itinerary from '../common/Itinerary';

export const PostModal = ({ post, opened, onClose }) => {
    const theme = useMantineTheme();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < theme.breakpoints.sm;

    const weatherForecast = [
        { day: 'Sun', icon: IconSun, temp: '26°C' },
        { day: 'Mon', icon: IconSun, temp: '28°C' },
        { day: 'Tue', icon: IconCloud, temp: '25°C' },
        { day: 'Wed', icon: IconCloudRain, temp: '21°C' },
        { day: 'Thu', icon: IconSun, temp: '27°C' },
        { day: 'Fri', icon: IconCloud, temp: '24°C' },
        { day: 'Sat', icon: IconCloud, temp: '23°C' },
    ];

    const nearbyAttractions = [
        { name: 'Ancient Temple', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=100&fit=crop' },
        { name: 'Local Market', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=100&fit=crop' },
        { name: 'Scenic Viewpoint', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=100&fit=crop' },
        { name: 'Cultural Center', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=100&fit=crop' },
        { name: 'Botanical Gardens', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200&h=100&fit=crop' },
        { name: 'Historic Museum', image: 'https://images.unsplash.com/photo-1564502076011-0f3507e0d9c7?w=200&h=100&fit=crop' },
        { name: 'Beach Promenade', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=100&fit=crop' },
        { name: 'Art Gallery', image: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=200&h=100&fit=crop' }
    ];

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            size={{ base: '100%', sm: '90%', md: '80%', lg: '70%' }}
            padding={0}
            radius="lg"
            centered
            withCloseButton={false}
            overlayProps={{ blur: 7, opacity: 0.7 }}
            fullScreen={isMobile}
        >
            <div className="relative">
                {/* Modal Header */}
                <div className="px-sm sm:px-md py-sm sm:py-md border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900">{post.location}</h2>
                    <Badge
                        className="bg-primary-light text-white px-xs sm:px-sm py-xxs sm:py-msm rounded-full text-[10px] sm:text-xs font-semibold"
                        variant="filled"
                    >
                        Featured
                    </Badge>
                </div>

                {/* Modal Body */}
                <div className="px-sm sm:px-md py-sm sm:py-md">
                    {/* Main Image */}
                    <div className="rounded-md overflow-hidden h-[250px] sm:h-[400px] mb-sm sm:mb-md">
                        <img
                            src={post.image}
                            alt={post.location}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info Grid */}
                    <Grid className="mb-sm sm:mb-md">
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                            <div className="bg-gray-100 p-sm sm:p-[20px] rounded-md">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-xs sm:mb-sm flex items-center gap-xxs sm:gap-xs">
                                    <IconInfoCircleFilled className="text-primary mb-xxs" size={18} />
                                    Travel Information
                                </h3>
                                <div className="space-y-xxs sm:space-y-msm">
                                    <div className="flex gap-xxs sm:gap-xs">
                                        <span className="text-gray-600 font-medium text-sm sm:text-base">Duration:</span>
                                        <span className="text-gray-800 font-semibold text-sm sm:text-base">5 days</span>
                                    </div>
                                    <div className="flex gap-xxs sm:gap-xs">
                                        <span className="text-gray-600 font-medium text-sm sm:text-base">Shared By:</span>
                                        <span className="text-gray-800 font-semibold text-sm sm:text-base">Sarah Johnson</span>
                                    </div>
                                    <div className="flex gap-xxs sm:gap-xs">
                                        <span className="text-gray-600 font-medium text-sm sm:text-base">Season:</span>
                                        <span className="text-gray-800 font-semibold text-sm sm:text-base">Summer</span>
                                    </div>
                                </div>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                            <div className="bg-gray-100 p-sm sm:p-[20px] rounded-md mt-sm sm:mt-0">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-xs sm:mb-sm flex items-center gap-xxs sm:gap-xs">
                                    <IconCloudFilled className="text-primary" size={20} />
                                    Weather Forecast
                                </h3>
                                <div className="flex justify-between mt-xs sm:mt-sm overflow-x-auto">
                                    {weatherForecast.map((day, index) => {
                                        const IconComponent = day.icon;
                                        return (
                                            <div key={index} className="text-center flex-1 min-w-[40px] sm:min-w-[50px]">
                                                <div className="text-xs sm:text-sm text-gray-600 mb-xxs sm:mb-xs">{day.day}</div>
                                                <IconComponent className="text-yellow-500 mx-auto mb-xxs sm:mb-xs" size={28} />
                                                <div className="text-sm sm:text-base font-semibold text-gray-800">{day.temp}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>

                    {/* Map Section */}
                    <div className="mb-sm sm:mb-md">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-xs sm:mb-sm flex items-center gap-xxs sm:gap-xs">
                            <IconMapPinFilled className="text-primary" size={18} />
                            Location & Map
                        </h3>
                        <div className="h-[200px] sm:h-[300px] rounded-md overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop"
                                alt="Map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Nearby Attractions */}
                    <div className="mb-sm sm:mb-md">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-xs sm:mb-sm flex items-center gap-xxs sm:gap-xs">
                            <IconStarFilled className="text-primary" size={18} />
                            Nearby Attractions
                        </h3>
                        <Grid>
                            {nearbyAttractions.map((attraction, index) => (
                                <Grid.Col key={index} span={{ base: 6, sm: 4, md: 3 }}>
                                    <div className="bg-gray-100 rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-[4px]">
                                        <img
                                            src={attraction.image}
                                            alt={attraction.name}
                                            className="w-full h-[120px] sm:h-[160px] object-cover"
                                        />
                                        <div className="p-xxs sm:p-xs text-center">
                                            <div className="text-xs sm:text-sm font-medium text-gray-700">{attraction.name}</div>
                                        </div>
                                    </div>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </div>

                    {/* User Experience */}
                    <div className="mb-sm sm:mb-md">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-xs sm:mb-sm flex items-center gap-xxs sm:gap-xs">
                            <IconCamera className="text-primary" size={18} />
                            Travel Experience
                        </h3>
                        <div className="bg-gray-100 p-sm sm:p-[20px] rounded-md border-l-4 border-primary-light">
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-xs sm:mb-sm">
                                {post.content}
                            </p>
                            <div className="font-semibold text-gray-800 mb-xxs sm:mb-xs flex items-center gap-xxs sm:gap-xs text-sm sm:text-base">
                                <IconBulb className="text-yellow-500" size={14} />
                                Travel Tips
                            </div>
                            <ul className="text-sm sm:text-base text-gray-700 space-y-xxs sm:space-y-xs">
                                <li className="relative pl-[16px] sm:pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Visit early morning to avoid crowds
                                </li>
                                <li className="relative pl-[16px] sm:pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Bring comfortable walking shoes
                                </li>
                                <li className="relative pl-[16px] sm:pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Try the local cuisine at nearby restaurants
                                </li>
                                <li className="relative pl-[16px] sm:pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Book accommodations in advance during peak season
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Itinerary />
                </div>

                {/* Modal Footer */}
                <div className="px-sm sm:px-md py-xs sm:py-sm border-t border-gray-200 flex flex-wrap justify-end gap-xs sm:gap-sm sticky bottom-none bg-white z-10">
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius={'md'}
                        size="xs"
                        className="flex-1 sm:flex-none"
                    >
                        <IconHeartFilled size={14} className={'mr-xxs sm:mr-xs'} />
                        <div className="text-xs sm:text-sm">Like</div>
                    </Button>
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius={'md'}
                        size="xs"
                        className="flex-1 sm:flex-none"
                    >
                        <IconMessageFilled size={14} className={'mr-xxs sm:mr-xs'} />
                        <div className="text-xs sm:text-sm">Comment</div>
                    </Button>
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius={'md'}
                        size="xs"
                        className="flex-1 sm:flex-none"
                    >
                        <div className="text-xs sm:text-sm">Close</div>
                    </Button>
                    <Button
                        className="bg-primary hover:bg-primary-dark flex-1 sm:flex-none"
                        leftSection={<IconBookmark size={14} />}
                        radius={'md'}
                        size="xs"
                    >
                        <div className="text-xs sm:text-sm">Save Location</div>
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
