import React, { useState, useEffect } from 'react';
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Wifi,
  Car,
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  User,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Check,
  CreditCard,
  Shield,
  Clock,
  Bed,
  Bath,
  Square,
  Tv,
  Coffee,
  ArrowRight,
  Crown,
} from 'lucide-react';
import { Modal, Stepper, Button, Group, TextInput, NumberInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import HotelDetailHero from '../../components/modules/hotel-booking/HotelDetailHero';
import HotelDetailRooms from '../../components/modules/hotel-booking/HotelDetailRooms';
import ReviewsSection from '../../components/modules/home/Reviews';

const mockHotel = {
  name: "Azure Serenity Resort",
  tagline: "Where Luxury Meets Nature",
  address: "1 Paradise Cove, Oceanview Heights, Maldives",
  phone: "+960 123-4567",
  email: "concierge@azureserenity.com",
  checkIn: "3:00 PM",
  checkOut: "11:00 AM",
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop"
  ],
  description: "Experience unparalleled luxury at our award-winning oceanfront resort. With breathtaking infinity pools, world-class dining, and personalized service, every moment becomes a treasured memory.",
  rating: 4.9,
  totalReviews: 2847,
  amenities: [
    { name: "Infinity Pool", icon: Waves, gradient: "from-blue-500 to-cyan-500" },
    { name: "Michelin Dining", icon: UtensilsCrossed, gradient: "from-orange-500 to-red-500" },
    { name: "Private Beach", icon: Waves, gradient: "from-teal-500 to-blue-500" },
    { name: "Spa & Wellness", icon: Sparkles, gradient: "from-purple-500 to-pink-500" },
    { name: "Fitness Center", icon: Dumbbell, gradient: "from-green-500 to-emerald-500" },
    { name: "Concierge", icon: User, gradient: "from-indigo-500 to-purple-500" },
    { name: "Valet Parking", icon: Car, gradient: "from-gray-500 to-slate-500" },
    { name: "High-Speed WiFi", icon: Wifi, gradient: "from-blue-500 to-indigo-500" }
  ],
  rooms: [
    {
      id: 1,
      type: "Ocean Suite",
      subtitle: "Ultimate Luxury",
      price: 850,
      originalPrice: 1200,
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-orange-500 to-red-500",
      images: [
        "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
      ],
      description: "Breathtaking ocean views with private infinity pool and butler service",
      maxGuests: 4,
      size: "120 sqm",
      beds: "1 King + Living Area",
      features: ["Private infinity pool", "Butler service", "Ocean terrace", "Premium minibar"],
      amenities: [
        { name: "Private Pool", icon: Waves },
        { name: "Ocean View", icon: MapPin },
        { name: "120 sqm", icon: Square },
        { name: "Max 4 guests", icon: Users },
        { name: "Butler Service", icon: User },
        { name: "Premium Minibar", icon: Coffee }
      ]
    },
    {
      id: 2,
      type: "Garden Villa",
      subtitle: "Tropical Paradise",
      price: 650,
      originalPrice: 900,
      badge: "Best Value",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578898886175-98d34f17e8b9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&h=400&fit=crop"
      ],
      description: "Secluded villa surrounded by lush tropical gardens",
      maxGuests: 3,
      size: "85 sqm",
      beds: "1 King + Daybed",
      features: ["Private garden", "Outdoor shower", "Tropical views", "Wellness amenities"],
      amenities: [
        { name: "Private Garden", icon: Sparkles },
        { name: "Outdoor Shower", icon: Bath },
        { name: "85 sqm", icon: Square },
        { name: "Max 3 guests", icon: Users },
        { name: "King Bed", icon: Bed },
        { name: "Wellness Kit", icon: Shield }
      ]
    },
    {
      id: 3,
      type: "Deluxe Room",
      subtitle: "Modern Comfort",
      price: 350,
      originalPrice: 450,
      badge: "Great Deal",
      badgeColor: "bg-gradient-to-r from-blue-500 to-purple-500",
      images: [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
      ],
      description: "Elegantly designed room with premium amenities and partial ocean view",
      maxGuests: 2,
      size: "45 sqm",
      beds: "1 King Bed",
      features: ["Partial ocean view", "Premium linens", "Smart TV", "Marble bathroom"],
      amenities: [
        { name: "Ocean View", icon: MapPin },
        { name: "Smart TV", icon: Tv },
        { name: "45 sqm", icon: Square },
        { name: "Max 2 guests", icon: Users },
        { name: "King Bed", icon: Bed },
        { name: "Marble Bath", icon: Bath }
      ]
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Isabella Rodriguez",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely magical! The infinity pool overlooking the ocean was breathtaking. Every detail was perfect.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "James Mitchell",
      rating: 5,
      date: "1 week ago",
      comment: "Five-star service from the moment we arrived. The staff went above and beyond to make our stay unforgettable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sophie Chen",
      rating: 5,
      date: "2 weeks ago",
      comment: "The most luxurious resort experience I've ever had. Worth every penny for our anniversary celebration!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ]
};

const HotelDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(mockHotel.rooms[0]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const bookingForm = useForm({
    initialValues: {
      checkIn: null,
      checkOut: null,
      guests: 2,
      rooms: 1,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: '',
    },
    validate: {
      checkIn: (value) => (value ? null : 'Check-in date required'),
      checkOut: (value) => (value ? null : 'Check-out date required'),
      guests: (value) => (value > 0 ? null : 'At least 1 guest'),
      rooms: (value) => (value > 0 ? null : 'At least 1 room'),
      firstName: (value) => (activeStep > 0 && !value ? 'First name required' : null),
      lastName: (value) => (activeStep > 0 && !value ? 'Last name required' : null),
      email: (value) => (activeStep > 0 && !value ? 'Email required' : null),
      phone: (value) => (activeStep > 0 && !value ? 'Phone required' : null),
      cardNumber: (value) => (activeStep > 1 && !value ? 'Card number required' : null),
      expiryDate: (value) => (activeStep > 1 && !value ? 'Expiry date required' : null),
      cvv: (value) => (activeStep > 1 && !value ? 'CVV required' : null),
      cardName: (value) => (activeStep > 1 && !value ? 'Name on card required' : null),
    },
  });

  // Auto-advance image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mockHotel.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mockHotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mockHotel.images.length) % mockHotel.images.length);
  };

  const handleBookingNext = () => {
    if (activeStep === 0) {
      if (!bookingForm.validateField('checkIn') && !bookingForm.validateField('checkOut')) {
        setActiveStep((s) => s + 1);
      } else {
        bookingForm.validate();
      }
    } else if (activeStep === 1) {
      if (!bookingForm.validateField('firstName') && !bookingForm.validateField('lastName') && !bookingForm.validateField('email') && !bookingForm.validateField('phone')) {
        setActiveStep((s) => s + 1);
      } else {
        bookingForm.validate();
      }
    } else if (activeStep === 2) {
      if (!bookingForm.validateField('cardNumber') && !bookingForm.validateField('expiryDate') && !bookingForm.validateField('cvv') && !bookingForm.validateField('cardName')) {
        setActiveStep((s) => s + 1);
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
          setBookingOpen(false);
          setActiveStep(0);
          bookingForm.reset();
        }, 2500);
      } else {
        bookingForm.validate();
      }
    }
  };

  const handleBookingBack = () => {
    setActiveStep((s) => (s > 0 ? s - 1 : 0));
  };

  const BookingStep = ({ step, title, isActive, isCompleted }) => (
    <div className={`flex items-center ${isActive ? 'text-primary' : isCompleted ? 'text-primary-dark' : 'text-gray-400'}`}>
      <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center border-2 ${
        isActive ? 'border-primary bg-primary-light' : 
        isCompleted ? 'border-primary-dark bg-primary-light' : 
        'border-gray-300 bg-gray-50'
      }`}>
        {isCompleted ? (
          <Check className="w-[16px] h-[16px]" />
        ) : (
          <span className="text-sm font-semibold">{step}</span>
        )}
      </div>
      <span className="ml-[8px] font-medium">{title}</span>
    </div>
  );

  return (
    <div className='bg-gray-100 min-h-screen pt-md'>
      <div className='flex flex-col lg:flex-row gap-xl'>
        <div className='w-full lg:w-1/2 flex flex-col gap-lg'>
          <HotelDetailHero mockHotel={mockHotel} currentImageIndex={currentImageIndex} prevImage={prevImage} nextImage={nextImage} setCurrentImageIndex={setCurrentImageIndex} setBookingOpen={setBookingOpen} setFavorited={setFavorited} favorited={favorited} selectedRoom={selectedRoom}/>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-lg mt-lg lg:mt-0 pr-xl'>
          <HotelDetailRooms mockHotel={mockHotel} setSelectedRoom={setSelectedRoom} setBookingOpen={setBookingOpen}/>
        </div>
      </div>
      {/* Reviews Section */}
      <div className='px-xl mt-2xl mb-lg'>
        <ReviewsSection/>
      </div>

{/* Booking Modal */}
<Modal
  opened={bookingOpen}
  onClose={() => setBookingOpen(false)}
  title={null}
  size="xl"
  centered
  overlayProps={{ blur: 3, opacity: 0.2 }}
  classNames={{ modal: 'rounded-3xl p-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 shadow-3xl' }}
>
  {/* Booking Summary Card */}
  <div className="bg-white/90 rounded-2xl shadow-xl p-lg flex flex-col md:flex-row gap-lg mb-lg">
    <div>
      <img
        src={selectedRoom.images[0]}
        alt={selectedRoom.type}
        className="w-full md:w-[180px] h-[120px] md:h-[120px] object-cover rounded-xl shadow-md mb-md md:mb-0"
      />
    </div>
    <div className="flex-1 flex flex-col gap-xs justify-between">
      <div>
        <div className="flex items-center gap-xs mb-xs">
          <span className={`px-xs py-[2px] rounded-md text-sm font-bold shadow ${selectedRoom.badgeColor} border border-white/80`}>{selectedRoom.badge}</span>
          <span className="text-primary font-semibold text-xs">{selectedRoom.subtitle}</span>
        </div>
        <div className="text-xl font-bold text-gray-900 mb-xs">{selectedRoom.type}</div>
        <div className="text-gray-600 text-sm mb-xs">{selectedRoom.description}</div>
      </div>
      <div className="flex flex-wrap gap-md text-sm text-gray-700">
        <div className="flex items-center gap-xs"><Calendar className="w-4 h-4 text-primary" />{bookingForm.values.checkIn ? new Date(bookingForm.values.checkIn).toLocaleDateString() : '--'} → {bookingForm.values.checkOut ? new Date(bookingForm.values.checkOut).toLocaleDateString() : '--'}</div>
        <div className="flex items-center gap-xs"><Users className="w-4 h-4 text-primary" />{bookingForm.values.guests || 2} Guests</div>
        <div className="flex items-center gap-xs"><Bed className="w-4 h-4 text-primary" />{selectedRoom.beds}</div>
      </div>
    </div>
    <div className="flex flex-col items-end justify-between min-w-[120px]">
      <div className="text-right">
        <div className="text-sm text-gray-500 line-through">${selectedRoom.originalPrice}</div>
        <div className="text-2xl font-bold text-primary">${selectedRoom.price}</div>
        <div className="text-xs text-gray-500">per night</div>
      </div>
      <div className="mt-xs text-lg font-bold text-primary">Total: <span className="text-primary-dark">${(() => {
        if (bookingForm.values.checkIn && bookingForm.values.checkOut) {
          const checkIn = new Date(bookingForm.values.checkIn);
          const checkOut = new Date(bookingForm.values.checkOut);
          const nights = Math.ceil(Math.abs(checkOut - checkIn) / (1000 * 60 * 60 * 24));
          return selectedRoom.price * nights * (bookingForm.values.rooms || 1);
        }
        return 0;
      })()}</span></div>
    </div>
  </div>
  {/* Stepper */}
  <div className="px-lg pb-lg">
    <Stepper active={activeStep} onStepClick={setActiveStep} breakpoint="sm" classNames={{ steps: 'mb-lg', step: 'rounded-full', separator: 'bg-primary-light' }}>
      <Stepper.Step label={<span className="text-primary font-semibold">Dates & Guests</span>}>
        <div className="bg-white/80 rounded-xl p-lg px-none pt-none shadow flex flex-col gap-md">
          <Group grow mb="sm" className="gap-md">
            <DateInput
              size="lg"
              label={<span className="text-lg font-semibold">Check-in</span>}
              placeholder="Pick date"
              value={bookingForm.values.checkIn}
              onChange={(date) => bookingForm.setFieldValue('checkIn', date)}
              minDate={new Date()}
              required
              classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            />
            <DateInput
              size="lg"
              label={<span className="text-lg font-semibold">Check-out</span>}
              placeholder="Pick date"
              value={bookingForm.values.checkOut}
              onChange={(date) => bookingForm.setFieldValue('checkOut', date)}
              minDate={bookingForm.values.checkIn || new Date()}
              required
              classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            />
          </Group>
          <Group grow className="gap-md">
            <NumberInput
              size="lg"
              label={<span className="text-lg font-semibold">Guests</span>}
              min={1}
              value={bookingForm.values.guests}
              onChange={(val) => bookingForm.setFieldValue('guests', val)}
              classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            />
            <NumberInput
              size="lg"
              label={<span className="text-lg font-semibold">Rooms</span>}
              min={1}
              value={bookingForm.values.rooms}
              onChange={(val) => bookingForm.setFieldValue('rooms', val)}
              classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            />
          </Group>
        </div>
      </Stepper.Step>
      <Stepper.Step label={<span className="text-primary font-semibold">Guest Details</span>}>
        <div className="bg-white/80 rounded-xl p-lg px-none pt-none shadow flex flex-col gap-md">
          <TextInput
            size="lg"
            label={<span className="text-lg font-semibold">First Name</span>}
            placeholder="Your first name"
            value={bookingForm.values.firstName}
            onChange={(e) => bookingForm.setFieldValue('firstName', e.currentTarget.value)}
            required
            classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            mb="sm"
          />
          <TextInput
            size="lg"
            label={<span className="text-lg font-semibold">Last Name</span>}
            placeholder="Your last name"
            value={bookingForm.values.lastName}
            onChange={(e) => bookingForm.setFieldValue('lastName', e.currentTarget.value)}
            required
            classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            mb="sm"
          />
          <TextInput
            size="lg"
            label={<span className="text-lg font-semibold">Email</span>}
            placeholder="you@email.com"
            value={bookingForm.values.email}
            onChange={(e) => bookingForm.setFieldValue('email', e.currentTarget.value)}
            required
            classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            mb="sm"
          />
          <TextInput
            size="lg"
            label={<span className="text-lg font-semibold">Phone</span>}
            placeholder="Phone number"
            value={bookingForm.values.phone}
            onChange={(e) => bookingForm.setFieldValue('phone', e.currentTarget.value)}
            required
            classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
          />
        </div>
      </Stepper.Step>
      <Stepper.Step label={<span className="text-primary font-semibold">Payment</span>}>
        <div className="bg-white/80 rounded-xl p-lg pt-none px-none shadow flex flex-col gap-md">
          <div className="flex items-center gap-xs mb-md">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-base">Secure Payment</span>
          </div>
          <TextInput
            size="lg"
            label={<span className="text-lg font-semibold">Card Number</span>}
            placeholder="1234 5678 9012 3456"
            value={bookingForm.values.cardNumber}
            onChange={(e) => bookingForm.setFieldValue('cardNumber', e.currentTarget.value)}
            required
            classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            mb="sm"
          />
          <Group grow className="gap-md">
            <TextInput
              size="lg"
              label={<span className="text-lg font-semibold">Expiry Date</span>}
              placeholder="MM/YY"
              value={bookingForm.values.expiryDate}
              onChange={(e) => bookingForm.setFieldValue('expiryDate', e.currentTarget.value)}
              required
              classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            />
            <TextInput
              size="lg"
              label={<span className="text-lg font-semibold">CVV</span>}
              placeholder="123"
              value={bookingForm.values.cvv}
              onChange={(e) => bookingForm.setFieldValue('cvv', e.currentTarget.value)}
              required
              classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            />
          </Group>
          <TextInput
            size="lg"
            label={<span className="text-lg font-semibold">Name on Card</span>}
            placeholder="Cardholder name"
            value={bookingForm.values.cardName}
            onChange={(e) => bookingForm.setFieldValue('cardName', e.currentTarget.value)}
            required
            classNames={{ input: 'text-lg py-md px-md', label: 'mb-xs' }}
            mt="sm"
          />
        </div>
      </Stepper.Step>
      <Stepper.Completed>
        {showConfirmation ? (
          <div className="flex flex-col items-center justify-center p-lg">
            <Check className="w-12 h-12 text-primary mb-4 animate-bounce" />
            <div className="text-2xl font-bold mb-2 text-primary">Booking Confirmed!</div>
            <div className="text-gray-600 mb-md">Thank you for booking your stay at <span className="font-semibold text-primary">{mockHotel.name}</span>.</div>
            <div className="bg-white/90 rounded-xl shadow p-md flex flex-col items-center gap-xs">
              <div className="text-lg font-bold text-primary">{selectedRoom.type}</div>
              <div className="text-gray-700 text-xs">{selectedRoom.subtitle}</div>
              <div className="text-primary font-bold text-xl">Paid: <span className="text-primary-dark">${(() => {
                if (bookingForm.values.checkIn && bookingForm.values.checkOut) {
                  const checkIn = new Date(bookingForm.values.checkIn);
                  const checkOut = new Date(bookingForm.values.checkOut);
                  const nights = Math.ceil(Math.abs(checkOut - checkIn) / (1000 * 60 * 60 * 24));
                  return selectedRoom.price * nights * (bookingForm.values.rooms || 1);
                }
                return 0;
              })()}</span></div>
            </div>
          </div>
        ) : (
          <div className="text-center text-lg">Processing your booking...</div>
        )}
      </Stepper.Completed>
    </Stepper>
    <Group position="apart" mt="xl">
      {activeStep > 0 && activeStep < 3 && (
        <Button variant="default" size='lg' onClick={handleBookingBack} className="rounded-full px-lg py-xs">
          Back
        </Button>
      )}
      {activeStep < 3 && (
        <Button onClick={handleBookingNext} size='lg' className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-full px-lg py-xs font-semibold shadow">
          {activeStep === 2 ? 'Confirm Booking' : 'Next'}
        </Button>
      )}
    </Group>
  </div>
</Modal>


</div>
  );
};

export default HotelDetail;
