import React from 'react'
import {
    Star,
    MapPin,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Heart,
    Share2,
    CreditCard,
    Shield,
    Clock,
    ArrowRight,
    Crown,
  } from 'lucide-react';

const HotelDetailHero = ({mockHotel,currentImageIndex,setIsImageLoading,prevImage,nextImage,setCurrentImageIndex,setBookingOpen,setFavorited,favorited,selectedRoom}) => {
  return (
    <div className="flex flex-col py-lg md:p-xl md:pr-none gap-lg md:gap-xl w-full h-full">
      {/* Image/Hero Section */}
      <div className="w-full flex flex-col gap-lg">
        <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 z-20 rounded-2xl" />
          {/* Image Carousel */}
          <div className="relative h-full">
            {mockHotel.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`${mockHotel.name} view ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                  onLoad={() => setIsImageLoading(false)}
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-md hover:bg-white/50 p-3 md:p-4 rounded-full transition-all duration-300 group shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-md hover:bg-white/50 p-3 md:p-4 rounded-full transition-all duration-300 group shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-md left-1/2 -translate-x-1/2 z-30 flex gap-xs md:gap-sm">
            {mockHotel.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 border-2 border-white ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Hero Content (Overlay) */}
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="text-center max-w-2xl md:max-w-4xl p-xs md:p-lg">
              <div className="mb-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">5-Star Luxury Resort</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-lg md:mb-xl tracking-tight drop-shadow-lg">
                {mockHotel.name}
              </h1>

              <p className="text-lg md:text-2xl text-white/90 mb-sm md:mb-lg font-light drop-shadow">
                {mockHotel.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-xs md:gap-sm mb-lg md:mb-xl">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white text-sm md:text-base">{mockHotel.address}</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-500/30 backdrop-blur-md px-4 py-2 rounded-full shadow">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{mockHotel.rating}</span>
                  <span className="text-white/80 text-sm">({mockHotel.totalReviews} reviews)</span>
                </div>
              </div>

              <div className="flex gap-xs md:gap-sm justify-center">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Stay
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setFavorited(!favorited)}
                  className="bg-white/30 backdrop-blur-md hover:bg-white/50 text-white px-5 md:px-6 py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow flex items-center"
                >
                  <Heart className={`w-5 h-5 ${favorited ? 'fill-current text-red-400' : ''}`} />
                </button>

                <button className="bg-white/30 backdrop-blur-md hover:bg-white/50 text-white px-5 md:px-6 py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow flex items-center">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Description below image */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-md md:p-lg shadow-xl w-full">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {mockHotel.description}
          </p>
        </div>
      </div>
      {/* Booking Card */}
      <div className="w-full flex flex-col gap-lg">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-sm md:p-md shadow-2xl border border-gray-100 w-full flex flex-col justify-between">
          <div className="border-b border-gray-200 pb-xs md:pb-sm mb-xs md:mb-sm">
            <div className="grid grid-cols-2 gap-xs md:gap-md mb-xs md:mb-sm">
              {selectedRoom?.amenities.slice(0, 6).map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-xs md:gap-sm text-xs md:text-sm">
                  <amenity.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-gray-700">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setBookingOpen(true)}
            className="mt-xs py-xs rounded-2xl w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-xs mb-sm"
          >
            <Calendar className="w-5 h-5" />
            Book This Room
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex flex-col gap-xs text-xs md:text-sm mt-xs text-gray-600">
            <div className="flex items-center gap-xs">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>Check-in: {mockHotel.checkIn}</span>
            </div>
            <div className="flex items-center gap-xs">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>Check-out: {mockHotel.checkOut}</span>
            </div>
            <div className="flex items-center gap-xs">
              <Shield className="w-5 h-5 text-gray-400" />
              <span>Free cancellation within 48 hours</span>
            </div>
            <div className="flex items-center gap-xs">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <span>Secure payment</span>
            </div>
          </div>
        </div>
        {/* Amenities Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-sm md:p-md shadow-xl w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-xs md:mb-sm">World-Class Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-xs md:gap-sm">
            {mockHotel.amenities.map((amenity, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex items-center gap-xs md:gap-md p-xs md:p-md rounded-2xl bg-white/60 hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                  <div className={`p-1 md:p-1.5 rounded-xl bg-gradient-to-r ${amenity.gradient}`}>
                    <amenity.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm md:text-base">
                    {amenity.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDetailHero