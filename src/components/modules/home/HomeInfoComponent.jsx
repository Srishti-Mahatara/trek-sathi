import {
    IconMapPin,
    IconCompass,
    IconUsers,
    IconStar,
    IconCamera,
    IconRoute,
    IconCalendar,
    IconHeart,
    IconTrendingUp,
    IconWorld,
    IconShield,
    IconClock,
    IconChartBar,
    IconGlobe,
    IconDeviceMobile,
    IconSearch
} from '@tabler/icons-react';

export const HomeInfoComponent = () => {
    const stats = [
        { icon: IconMapPin, value: '10,000+', label: 'Destinations', color: 'text-blue-600' },
        { icon: IconUsers, value: '500K+', label: 'Happy Travelers', color: 'text-green-600' },
        { icon: IconStar, value: '4.8/5', label: 'Average Rating', color: 'text-yellow-500' },
        { icon: IconRoute, value: '2M+', label: 'Routes Planned', color: 'text-purple-600' }
    ];

    const features = [
        {
            icon: IconCompass,
            title: 'Smart Discovery',
            description: 'AI-powered destination recommendations based on your preferences and travel history.',
            color: 'bg-blue-50 text-blue-600'
        },
        {
            icon: IconRoute,
            title: 'Route Planning',
            description: 'Create optimized itineraries with real-time traffic updates and local insights.',
            color: 'bg-green-50 text-green-600'
        },
        {
            icon: IconCamera,
            title: 'Photo Sharing',
            description: 'Share your travel moments and discover hidden gems through community photos.',
            color: 'bg-purple-50 text-purple-600'
        },
        {
            icon: IconHeart,
            title: 'Wishlist & Bookmarks',
            description: 'Save your favorite destinations and create personalized travel collections.',
            color: 'bg-red-50 text-red-600'
        },
        {
            icon: IconUsers,
            title: 'Travel Community',
            description: 'Connect with fellow travelers, share experiences, and get local recommendations.',
            color: 'bg-yellow-50 text-yellow-600'
        },
        {
            icon: IconShield,
            title: 'Safe Travel',
            description: 'Real-time safety alerts, emergency contacts, and travel insurance options.',
            color: 'bg-indigo-50 text-indigo-600'
        }
    ];

    const systemHighlights = [
        {
            icon: IconDeviceMobile,
            title: 'Mobile First',
            description: 'Optimized for mobile devices with offline capabilities'
        },
        {
            icon: IconGlobe,
            title: 'Global Coverage',
            description: 'Destinations and information from around the world'
        },
        {
            icon: IconClock,
            title: 'Real-time Updates',
            description: 'Live weather, traffic, and event information'
        },
        {
            icon: IconSearch,
            title: 'Smart Search',
            description: 'Intelligent search with filters and recommendations'
        }
    ];

    return (
        <div className="w-full space-y-xl">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-xl text-center">
                <div className="mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-sm">
                        Discover Your Next Adventure
                    </h1>
                    <p className="text-xl md:text-2xl mb-xl opacity-90">
                        Your complete travel companion for exploring the world's most beautiful destinations
                    </p>
                    <div className="flex flex-wrap justify-center gap-md">
                        <button className="bg-white text-primary px-md py-xs rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                            Start Exploring
                        </button>
                        <button className="border-2 border-white text-white px-md py-xs rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white rounded-lg shadow-md p-xl">
                <div className="text-center mb-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-md">Trusted by Travelers Worldwide</h2>
                    <p className="text-gray-600 text-lg">Join millions of adventurers who trust us with their journeys</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-md ${stat.color}`}>
                                <stat.icon size={32} />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-xs">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-lg shadow-md p-xl">
                <div className="text-center mb-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-md">Powerful Features</h2>
                    <p className="text-gray-600 text-lg">Everything you need to plan and enjoy your perfect trip</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-lg hover:shadow-md transition-shadow">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-md ${feature.color}`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-xs">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Infographic Section */}
            <section className="bg-white rounded-lg shadow-md p-xl">
                <div className="text-center mb-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-md">How It Works</h2>
                    <p className="text-gray-600 text-lg">Your journey from planning to exploration in simple steps</p>
                </div>

                <div className="relative  mx-auto">
                    {/* Timeline line - only visible on desktop */}
                    <div className="flex flex-wrap">
                        {/* Step 1 - Left aligned on desktop */}
                        <div className="w-1/2">
                            <div className="">
                                <div className="bg-gray-50 rounded-lg p-lg">
                                    <div className="flex items-center gap-sm mb-sm">
                                        <IconSearch className="text-primary" size={32} />
                                        <h3 className="text-xl font-semibold text-gray-900 ">Discover</h3>
                                    </div>

                                    <p className="text-gray-600">Search and explore destinations tailored to your interests and budget</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                            <div className="md:w-1/2"></div>
                        </div>

                        {/* Step 2 - Right aligned on desktop */}
                        <div className="w-1/2 ">
                            {/* Timeline dot */}
                            <div className="">
                                <div className="bg-gray-50 rounded-lg p-lg">
                                    <div className="flex items-center gap-sm mb-sm">
                                        <IconCalendar className="text-green-600" size={32} />
                                        <h3 className="text-xl font-semibold text-gray-900 ">Plan</h3>
                                    </div>
                                    <p className="text-gray-600">Create detailed itineraries with smart scheduling and local recommendations</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 - Left aligned on desktop */}
                        <div className="w-1/2">
                            <div className="">
                                <div className="bg-gray-50 rounded-lg p-lg">
                                    <div className="flex items-center gap-sm mb-sm">
                                        <IconCompass className="text-purple-600" size={32} />
                                        <h3 className="text-xl font-semibold text-gray-900 ">Navigate</h3>

                                    </div>
                                    <p className="text-gray-600">Use offline maps and real-time guidance to explore with confidence</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>
                            <div className="md:w-1/2"></div>
                        </div>

                        {/* Step 4 - Right aligned on desktop */}
                        <div className="w-1/2">
                            {/* Timeline dot */}
                            <div className="">
                                <div className="bg-gray-50 rounded-lg p-lg">
                                    <div className="flex items-center gap-sm mb-sm">
                                        <IconCamera className="text-red-600" size={32} />
                                        <h3 className="text-xl font-semibold text-gray-900 ">Share</h3>
                                    </div>
                                    <p className="text-gray-600">Document your journey and inspire others with your travel stories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Highlights */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-xl -mt-lg">
                <div className="text-center mb-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-md">Built for Modern Travelers</h2>
                    <p className="text-gray-600 text-lg">Advanced technology meets intuitive design</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {systemHighlights.map((highlight, index) => (
                        <div key={index} className="bg-white rounded-lg p-lg text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-xl h-xl bg-primary-light bg-opacity-20 text-white rounded-full mb-md">
                                <highlight.icon size={32} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-xs">{highlight.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Analytics Visualization */}
            <section className="bg-white rounded-lg shadow-md p-xl">
                <div className="text-center mb-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-md">Platform Analytics</h2>
                    <p className="text-gray-600 text-lg">Real-time insights into travel trends and platform usage</p>
                </div>
                <div className="grid md:grid-cols-3 gap-lg">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-lg">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-lg font-semibold text-gray-900">Monthly Active Users</h3>
                            <IconTrendingUp className="text-blue-600" size={42} />
                        </div>
                        <div className="text-3xl font-bold text-blue-600 mb-xs">2.5M</div>
                        <div className="text-sm text-gray-600">↑ 23% from last month</div>
                        <div className="mt-md">
                            <div className="w-full bg-blue-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-lg">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-lg font-semibold text-gray-900">Destinations Added</h3>
                            <IconWorld className="text-green-600" size={42} />
                        </div>
                        <div className="text-3xl font-bold text-green-600 mb-xs">1,250</div>
                        <div className="text-sm text-gray-600">This month</div>
                        <div className="mt-md">
                            <div className="w-full bg-green-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-lg">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-lg font-semibold text-gray-900">Reviews & Ratings</h3>
                            <IconChartBar className="text-purple-600" size={42} />
                        </div>
                        <div className="text-3xl font-bold text-purple-600 mb-xs">45K</div>
                        <div className="text-sm text-gray-600">↑ 15% engagement rate</div>
                        <div className="mt-md">
                            <div className="w-full bg-purple-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-primary text-white rounded-lg p-lg text-center">
                <h2 className="text-3xl font-bold mb-sm">Ready to Start Your Journey?</h2>
                <p className="text-xl mb-lg opacity-90">
                    Join thousands of travelers who have discovered their perfect destinations with us
                </p>
                <div className="flex flex-wrap justify-center gap-md">
                    <button className="bg-white text-primary px-sm py-sm rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-xs">
                        <IconCompass size={20} />
                        Get Started Free
                    </button>
                    <button className="border-2 border-white text-white px-sm py-sm rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center gap-xs">
                        <IconCamera size={20} />
                        View Gallery
                    </button>
                </div>
            </section>
        </div>
    );
};
