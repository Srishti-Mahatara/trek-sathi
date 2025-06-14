import React, { useState } from 'react';
import {
    IconSun,
    IconCloud,
    IconCloudRain,
    IconCamera,
    IconMapPinFilled,
    IconMessageFilled,
    IconBulb,
    IconPlus,
    IconClockFilled,
    IconCalendar,
    IconCloudFilled,
    IconEye,
    IconSend,
    IconX
} from '@tabler/icons-react';
import { Badge, Button, Grid, Modal, useMantineTheme } from '@mantine/core';

export const AddExperienceModal = ({ opened, onClose }) => {
    const theme = useMantineTheme();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < theme.breakpoints.sm;

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
                <div className="px-xs sm:px-sm py-xs sm:py-sm border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-base sm:text-xl font-bold text-gray-900 flex items-center gap-xxs sm:gap-xs">
                        <IconCamera className="text-primary" size={20} />
                        Share Experience
                    </h2>
                    <div className="flex items-center gap-xxs sm:gap-xs">
                        <Badge
                            className="bg-green-500 text-white px-xxs sm:px-xs py-[2px] sm:py-xxs rounded-full text-[9px] sm:text-xs font-semibold"
                            variant="filled"
                        >
                            New Post
                        </Badge>
                        <button
                            onClick={onClose}
                            className="p-xxs sm:p-xs hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <IconX size={16} className="text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="px-xs sm:px-sm py-xs sm:py-sm max-h-[calc(100vh-120px)] sm:max-h-[70vh] overflow-y-auto">
                    <Grid gutter="xs">
                        {/* Left Column - Main Form */}
                        <Grid.Col span={{ base: 12, sm: 8 }}>
                            {/* Location Input */}
                            <div className="mb-xs sm:mb-sm">
                                <label className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                    <IconMapPinFilled className="text-primary" size={12} />
                                    Location *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Santorini, Greece"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    className="w-full py-xxs sm:py-xs px-xs border border-gray-200 rounded-md text-xs transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_2px_rgba(0,131,143,0.2)]"
                                />
                            </div>

                            {/* Experience Content */}
                            <div className="mb-xs sm:mb-sm">
                                <label className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                    <IconMessageFilled className="text-primary" size={12} />
                                    Your Experience *
                                </label>
                                <textarea
                                    placeholder="Share your travel story, what you loved most, and memorable moments..."
                                    value={formData.content}
                                    onChange={(e) => handleInputChange('content', e.target.value)}
                                    rows={3}
                                    className="w-full py-xxs sm:py-xs px-xs border border-gray-200 rounded-md text-xs transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_2px_rgba(0,131,143,0.2)] resize-none"
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="mb-xs sm:mb-sm">
                                <label className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                    <IconCamera className="text-primary" size={12} />
                                    Add Photo
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-md p-xs sm:p-sm text-center hover:border-primary-light transition-colors duration-200">
                                    {imagePreview ? (
                                        <div className="relative">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-full h-[120px] sm:h-[160px] object-cover rounded-md mb-xxs sm:mb-xs"
                                            />
                                            <button
                                                onClick={() => {
                                                    setImagePreview(null);
                                                    setFormData(prev => ({ ...prev, images: [] }));
                                                }}
                                                className="absolute top-xxs right-xxs bg-red-500 text-white rounded-full w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center text-[10px] hover:bg-red-600"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <IconCamera className="mx-auto text-gray-400 mb-xxs" size={20} />
                                            <p className="text-gray-600 text-[10px] sm:text-xs mb-xxs">Click to upload or drag and drop</p>
                                            <p className="text-gray-400 text-[9px] sm:text-[10px]">PNG, JPG up to 10MB</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Travel Tips */}
                            <div className="mb-xs sm:mb-sm">
                                <label className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                    <IconBulb className="text-yellow-500" size={12} />
                                    Travel Tips
                                </label>
                                {formData.tips.map((tip, index) => (
                                    <div key={index} className="flex gap-xxs mb-xxs">
                                        <input
                                            type="text"
                                            placeholder="Share a helpful tip..."
                                            value={tip}
                                            onChange={(e) => handleTipChange(index, e.target.value)}
                                            className="flex-grow py-xxs px-xs border border-gray-200 rounded-md text-xs transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_2px_rgba(0,131,143,0.2)]"
                                        />
                                        {formData.tips.length > 1 && (
                                            <button
                                                onClick={() => removeTip(index)}
                                                className="bg-red-100 text-red-600 px-xxs rounded-md hover:bg-red-200 transition-colors duration-200 text-[10px] sm:text-xs whitespace-nowrap"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={addTip}
                                    className="text-primary text-[10px] sm:text-xs font-medium flex items-center gap-xxs hover:text-primary-dark transition-colors duration-200"
                                >
                                    <IconPlus size={12} />
                                    Add Another Tip
                                </button>
                            </div>
                        </Grid.Col>

                        {/* Right Column - Additional Info */}
                        <Grid.Col span={{ base: 12, sm: 4 }}>
                            <div className="bg-gray-50 p-xs sm:p-sm rounded-md h-fit mt-xs sm:mt-0">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-xxs sm:mb-xs">Additional Details</h3>

                                {/* Duration */}
                                <div className="mb-xxs sm:mb-xs">
                                    <label className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                        <IconClockFilled className="text-primary" size={10} />
                                        Duration
                                    </label>
                                    <select
                                        value={formData.duration}
                                        onChange={(e) => handleInputChange('duration', e.target.value)}
                                        className="w-full py-xxs px-xxs border border-gray-200 rounded-md text-xs focus:outline-none focus:border-primary-light"
                                    >
                                        <option value="">Select duration</option>
                                        {durationOptions.map(duration => (
                                            <option key={duration} value={duration}>{duration}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Season */}
                                <div className="mb-xxs sm:mb-xs">
                                    <label className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                        <IconCalendar className="text-primary" size={10} />
                                        Season
                                    </label>
                                    <select
                                        value={formData.season}
                                        onChange={(e) => handleInputChange('season', e.target.value)}
                                        className="w-full py-xxs px-xxs border border-gray-200 rounded-md text-xs focus:outline-none focus:border-primary-light"
                                    >
                                        <option value="">Select season</option>
                                        {seasonOptions.map(season => (
                                            <option key={season} value={season}>{season}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Weather */}
                                <div className="mb-xxs sm:mb-xs">
                                    <label className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                        <IconCloudFilled className="text-primary" size={10} />
                                        Weather
                                    </label>
                                    <div className="space-y-xxs">
                                        {weatherOptions.map(weather => {
                                            const IconComponent = weather.icon;
                                            return (
                                                <label key={weather.value} className="flex items-center gap-xxs cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="weather"
                                                        value={weather.value}
                                                        checked={formData.selectedWeather === weather.value}
                                                        onChange={(e) => handleInputChange('selectedWeather', e.target.value)}
                                                        className="text-primary focus:ring-primary"
                                                    />
                                                    <IconComponent size={12} className="text-yellow-500" />
                                                    <span className="text-[10px] sm:text-xs text-gray-700">{weather.label}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="mt-xs sm:mt-sm pt-xxs sm:pt-xs border-t border-gray-200">
                                    <h4 className="text-[11px] sm:text-xs font-semibold text-gray-700 mb-xxs flex items-center gap-xxs">
                                        <IconEye className="text-primary" size={10} />
                                        Preview
                                    </h4>
                                    <div className="bg-white p-xxs rounded-md border border-gray-200 text-[9px] sm:text-[10px]">
                                        <div className="font-semibold text-gray-800 mb-xxs">
                                            {formData.location || 'Your Location'}
                                        </div>
                                        <div className="text-gray-600 line-clamp-2">
                                            {formData.content || 'Your travel experience will appear here...'}
                                        </div>
                                        {formData.duration && (
                                            <div className="text-primary text-[9px] sm:text-[10px] mt-xxs">
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
                <div className="px-xs sm:px-sm py-xxs sm:py-xs border-t border-gray-200 flex flex-wrap justify-end gap-xxs sm:gap-xs sticky bottom-0 bg-white z-10">
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        radius="md"
                        size="xs"
                        className="flex-1 sm:flex-none text-[10px] sm:text-xs"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="bg-primary hover:bg-primary-dark flex-1 sm:flex-none text-[10px] sm:text-xs"
                        onClick={handleSubmit}
                        radius="md"
                        size="xs"
                        leftSection={<IconSend size={12} />}
                    >
                        Share Experience
                    </Button>
                </div>
            </div>
        </Modal>
    );
};