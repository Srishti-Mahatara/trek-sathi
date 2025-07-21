import React from 'react'
import {
    Calendar,
    Users,
    Bed,
    Square,
  } from 'lucide-react'

const HotelDetailRooms = ({mockHotel,setSelectedRoom,setBookingOpen}) => {
  return (
    <div className=" backdrop-blur-md rounded-3xl md:py-xs shadow-2xl w-full flex flex-col h-fit">
      <h2 className="text-3xl font-bold text-gray-900 mb-md">Our Rooms</h2>
      <div className="flex flex-col gap-lg">
        {mockHotel.rooms.map((room) => (
          <div
            key={room.id}
            className="p-md py-none h-fit relative cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl w-full border border-gray-200 bg-white/95 rounded-2xl shadow-lg flex flex-col md:flex-row gap-md overflow-hidden"
            onClick={() => setSelectedRoom(room)}
          >
            {/* Room Image + Book Button */}
            <div className="flex justify-center flex-col w-full md:w-1/3 min-w-[120px] max-w-[240px] flex-shrink-0">
              <div className="relative w-full">
                <img
                  src={room.images[0]}
                  alt={room.type}
                  className="w-full h-[180px] md:h-[160px] object-cover rounded-l-2xl md:rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-l-2xl md:rounded-2xl" />
                {/* Room Badge - much smaller */}
                <div className={`absolute top-xs left-xs px-xs py-[2px] rounded-md text-[10px] font-bold shadow z-10 ${room.badgeColor} border border-white/80`}>{room.badge}</div>
              </div>
              {/* Book Now Button below image */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRoom(room);
                  setBookingOpen(true);
                }}
                className="mt-xs bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark text-white px-lg py-xs rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-xs shadow"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
            </div>
            {/* Room Details & Pricing */}
            <div className="flex-1 flex flex-col md:flex-row gap-md p-md md:p-lg">
              {/* Details */}
              <div className="flex-1 flex flex-col gap-xs justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-xs">{room.type}</h3>
                  <p className="text-primary font-semibold mb-xs">{room.subtitle}</p>
                  <p className="text-gray-600 mb-xs">{room.description}</p>
                  <div className="flex flex-wrap gap-xs mb-xs">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-xs py-xs bg-primary-light text-white font-bold rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-sm text-xs">
                    <div className="flex items-center gap-xs">
                      <Square className="w-xs h-xs text-gray-500" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-xs">
                      <Users className="w-xs h-xs text-gray-500" />
                      <span>Max {room.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center gap-xs">
                      <Bed className="w-xs h-xs text-gray-500" />
                      <span>{room.beds}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing */}
              <div className="flex flex-col justify-between items-end min-w-[120px] md:w-1/4 gap-xs md:pl-lg absolute right-sm top-[10px]">
                <div className="text-right w-full">
                  <div className="flex items-center justify-end gap-xs mb-xs mt-md">
                    <span className="text-gray-500 line-through text-xs">
                      ${room.originalPrice}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    ${room.price}
                  </div>
                  <div className="text-xs text-gray-500">per night</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelDetailRooms