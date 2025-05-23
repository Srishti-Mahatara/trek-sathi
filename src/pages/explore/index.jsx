import React, { useState } from 'react';
import {
    IconCompassFilled,
    IconPlus,
    IconFlameFilled,
    IconStarFilled,
    IconClockFilled,
    IconHeartFilled,
    IconHeart,
    IconSearch,
    IconMapPinFilled,
    IconMessageFilled,
    IconShare,
    IconBookmark,
    IconSend,
    IconSun,
    IconCloud,
    IconCloudRain,
    IconCalendar,
    IconEye,
    IconCamera,
    IconBulb, IconInfoCircleFilled, IconCloudFilled
} from '@tabler/icons-react';
import {Badge, Button, Grid, Modal} from "@mantine/core";
import Itinerary from "../../components/modules/common/Itinerary.jsx";

const ExploreHeader = (props) => (
    <section className="flex justify-between items-center mb-md bg-white p-md rounded-lg shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-primary-light opacity-5 rounded-none rounded-bl-full z-0"></div>

        <div className="relative z-10">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-[4px] flex items-center gap-sm">
                <IconCompassFilled className="text-primary" size={32} />
                Explore
            </h1>
            <p className="text-gray-500 text-base">
                Discover amazing travel experiences shared by the community
            </p>
        </div>

        <div className="relative z-10">
            <button className="bg-primary text-white border-none rounded-md px-[20px] py-msm font-semibold cursor-pointer flex items-center gap-xs transition-all duration-300 shadow-md hover:bg-primary-dark hover:-translate-y-[2px] hover:shadow-lg"  onClick={() => props.setAddExperienceModalOpened(true)}>
                <IconPlus size={20} />
                Share Experience
            </button>
        </div>
    </section>
);

const FiltersSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = [
        { name: 'All', icon: null },
        { name: 'Trending', icon: IconFlameFilled },
        { name: 'Top Rated', icon: IconStarFilled },
        { name: 'Recent', icon: IconClockFilled },
        { name: 'Favorites', icon: IconHeartFilled },
    ];

    return (
        <section className="bg-white rounded-lg px-md py-sm flex justify-between items-center mb-md shadow-sm">
            <div className="flex gap-sm">
                {filters.map((filter) => {
                    const IconComponent = filter.icon;
                    return (
                        <div
                            key={filter.name}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`cursor-pointer font-medium px-sm py-xs rounded-md transition-all duration-200 flex items-center gap-xs ${
                                activeFilter === filter.name
                                    ? 'text-white bg-primary bg-opacity-10 font-semibold'
                                    : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                            }`}
                        >
                            {IconComponent && <IconComponent size={20} />}
                            {filter.name}
                        </div>
                    );
                })}
            </div>

            <div className="relative flex">
                <input
                    type="text"
                    placeholder="Search experiences..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="py-[10px] px-sm border border-gray-200 rounded-full w-[380px] text-sm transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(0,131,143,0.2)]"
                />
                <button className="absolute right-[10px] top-1/2 transform -translate-y-1/2 bg-transparent border-none text-gray-500 cursor-pointer hover:text-primary">
                    <IconSearch size={16} />
                </button>
            </div>
        </section>
    );
};

const PostModal = ({ post, opened, onClose }) => {
    const weatherForecast = [
        { day: 'Sun', icon: IconSun, temp: '24°C' },
        { day: 'Mon', icon: IconSun, temp: '24°C' },
        { day: 'Tue', icon: IconCloud, temp: '22°C' },
        { day: 'Wed', icon: IconCloudRain, temp: '19°C' },
        { day: 'Thu', icon: IconSun, temp: '26°C' },
        { day: 'Fri', icon: IconCloud, temp: '23°C' },
        { day: 'Sat', icon: IconCloud, temp: '23°C' },
    ];

    const nearbyAttractions = [
        { name: 'Ancient Temple', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=100&fit=crop' },
        { name: 'Local Market', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=100&fit=crop' },
        { name: 'Scenic Viewpoint', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=100&fit=crop' },
        { name: 'Cultural Center', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=100&fit=crop' },
    ];

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            size="70%"
            padding={0}
            radius="lg"
            centered
            withCloseButton={false}
            overlayProps={{ blur: 7, opacity: 0.7 }}
        >
            <div className="relative">
                {/* Modal Header */}
                <div className="px-md py-md border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">{post.location}</h2>
                    <Badge
                        className="bg-primary-light text-white px-sm py-msm rounded-full text-xs font-semibold"
                        variant="filled"
                    >
                        Featured
                    </Badge>
                </div>

                {/* Modal Body */}
                <div className="px-md py-md">
                    {/* Main Image */}
                    <div className="rounded-md overflow-hidden h-[400px] mb-md">
                        <img
                            src={post.image}
                            alt={post.location}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info Grid */}
                    <Grid className="mb-md">
                        <Grid.Col span={6}>
                            <div className="bg-gray-100 p-[20px] rounded-md">
                                <h3 className="text-lg font-semibold text-gray-800 mb-sm flex items-center gap-xs">
                                    <IconInfoCircleFilled className="text-primary mb-xxs" size={20} />
                                    Travel Information
                                </h3>
                                <div className="space-y-msm">
                                    <div className="flex gap-xs">
                                        <span className="text-gray-600 font-medium">Duration:</span>
                                        <span className="text-gray-800 font-semibold">5 days</span>
                                    </div>
                                    <div className="flex gap-xs">
                                        <span className="text-gray-600 font-medium">Shared By:</span>
                                        <span className="text-gray-800 font-semibold">Sarah Johnson</span>
                                    </div>
                                    <div className="flex gap-xs">
                                        <span className="text-gray-600 font-medium">Season:</span>
                                        <span className="text-gray-800 font-semibold">Summer</span>
                                    </div>
                                </div>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <div className="bg-gray-100 p-[20px] rounded-md">
                                <h3 className="text-lg font-semibold text-gray-800 mb-sm flex items-center gap-xs">
                                    <IconCloudFilled className="text-primary" size={24} />
                                    Weather Forecast
                                </h3>
                                <div className="flex justify-between mt-sm">
                                    {weatherForecast.map((day, index) => {
                                        const IconComponent = day.icon;
                                        return (
                                            <div key={index} className="text-center flex-1">
                                                <div className="text-sm text-gray-600 mb-xs">{day.day}</div>
                                                <IconComponent className="text-yellow-500 mx-auto mb-xs" size={36} />
                                                <div className="text-base font-semibold text-gray-800">{day.temp}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>

                    {/* Map Section */}
                    <div className="mb-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-sm flex items-center gap-xs">
                            <IconMapPinFilled className="text-primary" size={20} />
                            Location & Map
                        </h3>
                        <div className="h-[300px] rounded-md overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop"
                                alt="Map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Nearby Attractions */}
                    <div className="mb-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-sm flex items-center gap-xs">
                            <IconStarFilled className="text-primary" size={20} />
                            Nearby Attractions
                        </h3>
                        <Grid>
                            {nearbyAttractions.map((attraction, index) => (
                                <Grid.Col key={index} span={3}>
                                    <div className="bg-gray-100 rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-[4px]">
                                        <img
                                            src={attraction.image}
                                            alt={attraction.name}
                                            className="w-full h-[160px] object-cover"
                                        />
                                        <div className="p-xs text-center">
                                            <div className="text-sm font-medium text-gray-700">{attraction.name}</div>
                                        </div>
                                    </div>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </div>

                    {/* User Experience */}
                    <div className="mb-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-sm flex items-center gap-xs">
                            <IconCamera className="text-primary" size={20} />
                            Travel Experience
                        </h3>
                        <div className="bg-gray-100 p-[20px] rounded-md border-l-4 border-primary-light">
                            <p className="text-gray-700 leading-relaxed mb-sm">
                                {post.content}
                            </p>
                            <div className="font-semibold text-gray-800 mb-xs flex items-center gap-xs">
                                <IconBulb className="text-yellow-500" size={16} />
                                Travel Tips
                            </div>
                            <ul className="text-gray-700 space-y-xs">
                                <li className="relative pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Visit early morning to avoid crowds
                                </li>
                                <li className="relative pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Bring comfortable walking shoes
                                </li>
                                <li className="relative pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Try the local cuisine at nearby restaurants
                                </li>
                                <li className="relative pl-[20px]">
                                    <span className="absolute left-none text-primary font-bold">•</span>
                                    Book accommodations in advance during peak season
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Itinerary/>

                </div>

                {/* Modal Footer */}
                <div className="px-md py-sm border-t border-gray-200 flex justify-end gap-sm sticky bottom-none bg-white z-10">
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius={'md'}
                    >
                        <IconHeartFilled size={16} className={'mr-xs'}/>
                        <div>Like</div>
                    </Button>
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius={'md'}
                    >
                        <IconMessageFilled size={16} className={'mr-xs'}/>
                        Comment
                    </Button>
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius={'md'}
                    >
                        Close
                    </Button>
                    <Button
                        className="bg-primary hover:bg-primary-dark"
                        leftSection={<IconBookmark size={16} />}
                        radius={'md'}
                    >
                        Save Location
                    </Button>
                </div>



            </div>
        </Modal>
    );
};

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const handleLike = () => setLiked(!liked);

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            // Handle comment submission
            setNewComment('');
        }
    };

    const handlePostClick = () => {
        setModalOpened(true);
    };

    const handleCommentsToggle = () => {
        setShowComments(!showComments);
    };

    return (
        <>
            <PostModal post={post} opened={modalOpened} onClose={() => setModalOpened(false)} />
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-[4px] hover:shadow-lg animate-fadeIn  h-fit">
                {/* Post Header */}
                <div className="flex justify-between items-center p-sm border-b border-gray-200">
                    <div className="flex items-center gap-xs">
                        <div className="w-[40px] rounded-full overflow-hidden">
                            <img
                                src={post.userAvatar}
                                alt="User Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-semibold text-gray-800">{post.username}</div>
                            <div className="text-xs text-gray-500">{post.postTime}</div>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-full px-xs py-xxs text-xs text-primary-dark font-medium flex items-center gap-xxs">
                        <IconMapPinFilled size={14} className="text-primary mb-xxs" />
                        {post.location}
                    </div>
                </div>

                {/* Post Content */}
                <div className="p-sm">
                    <div className="text-gray-700 leading-relaxed mb-sm">
                        <p>{post.content}</p>
                    </div>
                    <div className="rounded-md overflow-hidden h-[300px] group cursor-pointer" onClick={handlePostClick}>
                        <img
                            src={post.image}
                            alt={post.location}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Post Stats */}
                <div className="flex justify-between px-sm py-sm border-t border-b border-gray-200">
                    <div
                        onClick={handleLike}
                        className={`flex items-center gap-xs mr-md text-sm cursor-pointer transition-colors duration-200 ${
                            liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                        }`}
                    >
                        <IconHeart size={16} fill={liked ? 'currentColor' : 'none'} />
                        <span>{post.likes} likes</span>
                    </div>
                    <div
                        onClick={handleCommentsToggle}
                        className="flex items-center gap-xs mr-md text-gray-600 text-sm cursor-pointer transition-colors duration-200 hover:text-primary"
                    >
                        <IconMessageFilled size={16} />
                        <span>{post.comments.length} comments</span>
                    </div>
                    <div className="flex items-center gap-xs mr-md text-gray-600 text-sm cursor-pointer transition-colors duration-200 hover:text-green-500">
                        <IconShare size={16} />
                        <span>Share</span>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="p-sm ">
                    {/* Always show first 2 comments when not expanded */}
                    {!showComments && post.comments.slice(0, 2).map((comment, index) => (
                        <div key={index} className="flex gap-xs mb-sm">
                            <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src={comment.avatar}
                                    alt="Comment Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="font-semibold text-gray-800 text-sm">{comment.user}</div>
                                <div className="text-gray-700 text-sm mt-[2px] leading-relaxed">{comment.text}</div>
                                <div className="flex gap-sm mt-xxs">
                                    <span className="text-xs text-gray-500">{comment.time}</span>
                                    <span className="text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Like</span>
                                    <span className="text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Reply</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Show "View more comments" button only when there are more than 2 comments and not expanded */}
                    {!showComments && post.comments.length > 2 && (
                        <div
                            onClick={handleCommentsToggle}
                            className="text-xs text-center text-primary font-medium cursor-pointer transition-all duration-200 hover:text-primary-dark mb-sm"
                        >
                            View {post.comments.length - 2} more comments
                        </div>
                    )}

                    {/* Scrollable expanded comments section */}
                    {showComments && (
                        <>
                            <div className="max-h-[400px] overflow-y-auto mb-sm">
                                {post.comments.map((comment, index) => (
                                    <div key={index} className="flex gap-xs mb-sm">
                                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                                            <img
                                                src={comment.avatar}
                                                alt="Comment Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="font-semibold text-gray-800 text-sm">{comment.user}</div>
                                            <div className="text-gray-700 text-sm mt-[2px] leading-relaxed">{comment.text}</div>
                                            <div className="flex gap-sm mt-xxs">
                                                <span className="text-xs text-gray-500">{comment.time}</span>
                                                <span className="text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Like</span>
                                                <span className="text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Show "Hide comments" button when expanded */}
                            <div
                                onClick={handleCommentsToggle}
                                className="text-xs text-center text-primary font-medium cursor-pointer transition-all duration-200 hover:text-primary-dark mb-sm"
                            >
                                Hide comments
                            </div>
                        </>
                    )}

                    {/* Add Comment */}
                    <div className="flex items-center gap-sm mt-sm">
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Your Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleCommentSubmit()}
                            className="flex-grow border border-gray-200 rounded-full px-sm py-xs text-sm transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(0,131,143,0.1)]"
                        />
                        <button
                            onClick={handleCommentSubmit}
                            className="bg-primary text-white w-[32px] h-[32px] rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-200 hover:bg-primary-dark hover:scale-110"
                        >
                            <IconSend size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const AddExperienceModal = ({ opened, onClose }) => {
    const [formData, setFormData] = useState({
        location: '',
        content: '',
        duration: '',
        season: '',
        tips: [''],
        images: [],
        selectedWeather: 'sunny'
    });

    const [imagePreview, setImagePreview] = useState(null);

    const weatherOptions = [
        { value: 'sunny', label: 'Sunny', icon: IconSun },
        { value: 'cloudy', label: 'Cloudy', icon: IconCloud },
        { value: 'rainy', label: 'Rainy', icon: IconCloudRain }
    ];

    const seasonOptions = ['Spring', 'Summer', 'Fall', 'Winter'];
    const durationOptions = ['1 day', '2-3 days', '4-7 days', '1-2 weeks', '2+ weeks'];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleTipChange = (index, value) => {
        const newTips = [...formData.tips];
        newTips[index] = value;
        setFormData(prev => ({
            ...prev,
            tips: newTips
        }));
    };

    const addTip = () => {
        setFormData(prev => ({
            ...prev,
            tips: [...prev.tips, '']
        }));
    };

    const removeTip = (index) => {
        if (formData.tips.length > 1) {
            const newTips = formData.tips.filter((_, i) => i !== index);
            setFormData(prev => ({
                ...prev,
                tips: newTips
            }));
        }
    };

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setImagePreview(e.target.result);
    //             setFormData(prev => ({
    //                 ...prev,
    //                 images: [file]
    //             }));
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const handleSubmit = () => {
        // Validate required fields
        if (!formData.location || !formData.content) {
            alert('Please fill in all required fields');
            return;
        }

        // Handle form submission
        console.log('Form submitted:', formData);

        // Reset form
        setFormData({
            location: '',
            content: '',
            duration: '',
            season: '',
            tips: [''],
            images: [],
            selectedWeather: 'sunny'
        });
        setImagePreview(null);

        onClose();
    };

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            size="70%"
            padding={0}
            radius="lg"
            centered
            withCloseButton={false}
            overlayProps={{ blur: 7, opacity: 0.7 }}
        >
            <div className="relative">
                {/* Modal Header */}
                <div className="px-md py-md border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-xs">
                        <IconCamera className="text-primary" size={28} />
                        Share Your Travel Experience
                    </h2>
                    <Badge
                        className="bg-green-500 text-white px-sm py-msm rounded-full text-xs font-semibold"
                        variant="filled"
                    >
                        New Post
                    </Badge>
                </div>

                {/* Modal Body */}
                <div className="px-md py-md max-h-[70vh] overflow-y-auto">
                    <Grid>
                        {/* Left Column - Main Form */}
                        <Grid.Col span={8}>
                            {/* Location Input */}
                            <div className="mb-md">
                                <label className="block text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                    <IconMapPinFilled className="text-primary" size={16} />
                                    Location *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Santorini, Greece"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    className="w-full py-sm px-sm border border-gray-200 rounded-md text-sm transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(0,131,143,0.2)]"
                                />
                            </div>

                            {/* Experience Content */}
                            <div className="mb-md">
                                <label className="block text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                    <IconMessageFilled className="text-primary" size={16} />
                                    Your Experience *
                                </label>
                                <textarea
                                    placeholder="Share your travel story, what you loved most, and memorable moments..."
                                    value={formData.content}
                                    onChange={(e) => handleInputChange('content', e.target.value)}
                                    rows={4}
                                    className="w-full py-sm px-sm border border-gray-200 rounded-md text-sm transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(0,131,143,0.2)] resize-none"
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="mb-md">
                                <label className="block text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                    <IconCamera className="text-primary" size={16} />
                                    Add Photo
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-md p-md text-center hover:border-primary-light transition-colors duration-200">
                                    {imagePreview ? (
                                        <div className="relative">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-full h-[200px] object-cover rounded-md mb-sm"
                                            />
                                            <button
                                                onClick={() => {
                                                    setImagePreview(null);
                                                    setFormData(prev => ({ ...prev, images: [] }));
                                                }}
                                                className="absolute top-xs right-xs bg-red-500 text-white rounded-full w-[24px] h-[24px] flex items-center justify-center text-xs hover:bg-red-600"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <IconCamera className="mx-auto text-gray-400 mb-xs" size={32} />
                                            <p className="text-gray-600 text-sm mb-xs">Click to upload or drag and drop</p>
                                            <p className="text-gray-400 text-xs">PNG, JPG up to 10MB</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Travel Tips */}
                            <div className="mb-md">
                                <label className="block text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                    <IconBulb className="text-yellow-500" size={16} />
                                    Travel Tips
                                </label>
                                {formData.tips.map((tip, index) => (
                                    <div key={index} className="flex gap-xs mb-xs">
                                        <input
                                            type="text"
                                            placeholder="Share a helpful tip..."
                                            value={tip}
                                            onChange={(e) => handleTipChange(index, e.target.value)}
                                            className="flex-grow py-xs px-sm border border-gray-200 rounded-md text-sm transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(0,131,143,0.2)]"
                                        />
                                        {formData.tips.length > 1 && (
                                            <button
                                                onClick={() => removeTip(index)}
                                                className="bg-red-100 text-red-600 px-xs rounded-md hover:bg-red-200 transition-colors duration-200"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={addTip}
                                    className="text-primary text-sm font-medium flex items-center gap-xs hover:text-primary-dark transition-colors duration-200"
                                >
                                    <IconPlus size={16} />
                                    Add Another Tip
                                </button>
                            </div>
                        </Grid.Col>

                        {/* Right Column - Additional Info */}
                        <Grid.Col span={4}>
                            <div className="bg-gray-50 p-sm rounded-md h-fit">
                                <h3 className="text-lg font-semibold text-gray-800 mb-sm">Additional Details</h3>

                                {/* Duration */}
                                <div className="mb-sm">
                                    <label className="block text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                        <IconClockFilled className="text-primary" size={14} />
                                        Duration
                                    </label>
                                    <select
                                        value={formData.duration}
                                        onChange={(e) => handleInputChange('duration', e.target.value)}
                                        className="w-full py-xs px-xs border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary-light"
                                    >
                                        <option value="">Select duration</option>
                                        {durationOptions.map(duration => (
                                            <option key={duration} value={duration}>{duration}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Season */}
                                <div className="mb-sm">
                                    <label className="block text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                        <IconCalendar className="text-primary" size={14} />
                                        Season
                                    </label>
                                    <select
                                        value={formData.season}
                                        onChange={(e) => handleInputChange('season', e.target.value)}
                                        className="w-full py-xs px-xs border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary-light"
                                    >
                                        <option value="">Select season</option>
                                        {seasonOptions.map(season => (
                                            <option key={season} value={season}>{season}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Weather */}
                                <div className="mb-sm">
                                    <label className="block text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                        <IconCloudFilled className="text-primary" size={14} />
                                        Weather
                                    </label>
                                    <div className="space-y-xs">
                                        {weatherOptions.map(weather => {
                                            const IconComponent = weather.icon;
                                            return (
                                                <label key={weather.value} className="flex items-center gap-xs cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="weather"
                                                        value={weather.value}
                                                        checked={formData.selectedWeather === weather.value}
                                                        onChange={(e) => handleInputChange('selectedWeather', e.target.value)}
                                                        className="text-primary focus:ring-primary"
                                                    />
                                                    <IconComponent size={16} className="text-yellow-500" />
                                                    <span className="text-sm text-gray-700">{weather.label}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="mt-md pt-sm border-t border-gray-200">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-xs flex items-center gap-xs">
                                        <IconEye className="text-primary" size={14} />
                                        Preview
                                    </h4>
                                    <div className="bg-white p-xs rounded-md border border-gray-200 text-xs">
                                        <div className="font-semibold text-gray-800 mb-xxs">
                                            {formData.location || 'Your Location'}
                                        </div>
                                        <div className="text-gray-600 line-clamp-3">
                                            {formData.content || 'Your travel experience will appear here...'}
                                        </div>
                                        {formData.duration && (
                                            <div className="text-primary text-xs mt-xxs">
                                                Duration: {formData.duration}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>

                {/* Modal Footer */}
                <div className="px-md py-sm border-t border-gray-200 flex justify-end gap-sm sticky bottom-0 bg-white z-10">
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius="md"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="bg-primary hover:bg-primary-dark"
                        onClick={handleSubmit}
                        radius="md"
                        leftSection={<IconSend size={16} />}
                    >
                        Share Experience
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

const ExplorePage = () => {
    const posts = [
        {
            username: 'Sarah Johnson',
            postTime: '2 hours ago',
            location: 'Santorini, Greece',
            content: "Finally made it to Santorini! The white buildings against the blue sea are even more stunning in person. Spent the day exploring narrow streets and watching the most beautiful sunset I've ever seen from Oia. Definitely worth the hype!",
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            likes: 248,
            showAllComments: true,
            comments: [
                {
                    user: 'Mike Thomas',
                    text: "Stunning! I'll be there next month. Any restaurant recommendations?",
                    time: '1 hour ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
                },
                {
                    user: 'Sarah Johnson',
                    text: '@Mike Definitely try Metaxi Mas - amazing food and views!',
                    time: '45 minutes ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
                }
            ]
        },
        {
            username: 'David Kim',
            postTime: 'Yesterday',
            location: 'Kyoto, Japan',
            content: "Early morning at Fushimi Inari Shrine before the crowds arrive. The path of thousands of torii gates feels like stepping into another world. Spent 3 hours hiking to the top of the mountain - worth every step!",
            image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
            likes: 172,
            comments: Array.from({length: 18}, (_, i) => ({
                user: `User ${i + 1}`,
                text: `Great photo! Comment ${i + 1}`,
                time: `${i + 1} hours ago`,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`
            }))
        },
        {
            username: 'Carlos Rodriguez',
            postTime: '3 days ago',
            location: 'Machu Picchu, Peru',
            content: "Four-day Inca Trail complete! The journey was challenging but incredible. Seeing Machu Picchu through the Sun Gate at sunrise was a spiritual experience. If you're planning to visit, book your permits at least 6 months in advance.",
            image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
            likes: 419,
            comments: Array.from({length: 45}, (_, i) => ({
                user: `Traveler ${i + 1}`,
                text: `Amazing experience! Comment ${i + 1}`,
                time: `${i + 1} hours ago`,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Traveler${i}`
            }))
        },
        {
            username: 'Sarah Johnson',
            postTime: '2 hours ago',
            location: 'Santorini, Greece',
            content: "Finally made it to Santorini! The white buildings against the blue sea are even more stunning in person. Spent the day exploring narrow streets and watching the most beautiful sunset I've ever seen from Oia. Definitely worth the hype!",
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            likes: 248,
            showAllComments: true,
            comments: [
                {
                    user: 'Mike Thomas',
                    text: "Stunning! I'll be there next month. Any restaurant recommendations?",
                    time: '1 hour ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
                },
                {
                    user: 'Sarah Johnson',
                    text: '@Mike Definitely try Metaxi Mas - amazing food and views!',
                    time: '45 minutes ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
                }
            ]
        },
        {
            username: 'Sarah Johnson',
            postTime: '2 hours ago',
            location: 'Santorini, Greece',
            content: "Finally made it to Santorini! The white buildings against the blue sea are even more stunning in person. Spent the day exploring narrow streets and watching the most beautiful sunset I've ever seen from Oia. Definitely worth the hype!",
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            likes: 248,
            showAllComments: true,
            comments: [
                {
                    user: 'Mike Thomas',
                    text: "Stunning! I'll be there next month. Any restaurant recommendations?",
                    time: '1 hour ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
                },
                {
                    user: 'Sarah Johnson',
                    text: '@Mike Definitely try Metaxi Mas - amazing food and views!',
                    time: '45 minutes ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
                }
            ]
        },
        {
            username: 'Sarah Johnson',
            postTime: '2 hours ago',
            location: 'Santorini, Greece',
            content: "Finally made it to Santorini! The white buildings against the blue sea are even more stunning in person. Spent the day exploring narrow streets and watching the most beautiful sunset I've ever seen from Oia. Definitely worth the hype!",
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            likes: 248,
            showAllComments: true,
            comments: [
                {
                    user: 'Mike Thomas',
                    text: "Stunning! I'll be there next month. Any restaurant recommendations?",
                    time: '1 hour ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
                },
                {
                    user: 'Sarah Johnson',
                    text: '@Mike Definitely try Metaxi Mas - amazing food and views!',
                    time: '45 minutes ago',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
                }
            ]
        },
        {
            username: 'Alex Chen',
            postTime: '6 days ago',
            location: 'Pokhara, Nepal',
            content: "Day 3 of trekking in the Annapurna region. The views of the Himalayan range are breathtaking! Just had the most delicious dal bhat at a local teahouse. The hospitality of the Nepalese people is incredible!",
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
            likes: 312,
            comments: Array.from({length: 29}, (_, i) => ({
                user: `Hiker ${i + 1}`,
                text: `Incredible views! Comment ${i + 1}`,
                time: `${i + 1} hours ago`,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Hiker${i}`
            }))
        },
        {
            username: 'Alex Chen',
            postTime: '6 days ago',
            location: 'Pokhara, Nepal',
            content: "Day 3 of trekking in the Annapurna region. The views of the Himalayan range are breathtaking! Just had the most delicious dal bhat at a local teahouse. The hospitality of the Nepalese people is incredible!",
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
            likes: 312,
            comments: Array.from({length: 29}, (_, i) => ({
                user: `Hiker ${i + 1}`,
                text: `Incredible views! Comment ${i + 1}`,
                time: `${i + 1} hours ago`,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Hiker${i}`
            }))
        }
    ];
    const [addExperienceModalOpened, setAddExperienceModalOpened] = useState(false);


    return (
        <main className=" mx-auto px-xl bg-gray-100">
            <AddExperienceModal
                opened={addExperienceModalOpened}
                onClose={() => setAddExperienceModalOpened(false)}
            />
            <ExploreHeader setAddExperienceModalOpened={setAddExperienceModalOpened} />
            <FiltersSection />

            <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-[20px]">
                {posts.map((post, index) => (
                    <div key={index} className="mb-[20px] break-inside-avoid">
                        <PostCard post={post} />
                    </div>
                ))}
            </section>

        </main>
    );
};

export default ExplorePage;
