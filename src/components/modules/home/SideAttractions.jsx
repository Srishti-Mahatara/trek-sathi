import React, { useEffect, useState } from "react";
import { Button, Rating } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconMapPin,
  IconMapPinFilled,
  IconStar,
  IconEye,
  IconArrowRight,
  IconDots,
} from "@tabler/icons-react";
import { useNavigate } from "react-router";
import axios from "axios";

const SideAttractions = () => {
  const [attractions, setAttractions] = useState([
    {
      image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
      title: "Phewa Lake",
      distance: 4,
      unit: "km",
      description: "Serene lake with stunning mountain reflections",
      rating: 4.8,
      reviews: 245,
      category: "Nature",
      bookmarked: false,
    },
    {
      image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
      title: "Mahendra Cave",
      distance: 1.2,
      unit: "km",
      description: "Mysterious limestone cave adventure",
      rating: 4.3,
      reviews: 128,
      category: "Adventure",
      bookmarked: true,
    },
    {
      image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
      title: "World Peace Pagoda",
      distance: 4,
      unit: "km",
      description: "Buddhist stupa with panoramic views",
      rating: 4.7,
      reviews: 312,
      category: "Culture",
      bookmarked: false,
    },
    {
      image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
      title: "Davis Falls",
      distance: 2.8,
      unit: "km",
      description: "Spectacular cascading waterfall",
      rating: 4.4,
      reviews: 189,
      category: "Nature",
      bookmarked: false,
    },
    {
      image: "https://lp-cms-production.imgix.net/2019-06/53693064.jpg",
      title: "Begnas Lake",
      distance: 6.5,
      unit: "km",
      description: "Pristine lake perfect for kayaking",
      rating: 4.6,
      reviews: 167,
      category: "Nature",
      bookmarked: true,
    },
  ]);

  const getAttractions = async () => {
    const res = await axios.get(
      "https://685d7c2f769de2bf0860d613.mockapi.io/api/attractions"
    );

    console.log(res.data);
    setAttractions(res.data);
  };

  useEffect(() => {
    getAttractions();
  }, []);

  const toggleBookmark = (index) => {
    setAttractions((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      Nature: "bg-emerald-500",
      Adventure: "bg-orange-500",
      Culture: "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className=" ">
      {/* Compact Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100  py-xs pt-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-xs">
            <IconMapPinFilled size={20} className="text-primary" />
            <h2 className="text-lg font-bold text-gray-900">Nearby</h2>
          </div>
        </div>
      </div>

      {/* Compact Attractions List */}
      <div className="flex-1 overflow-y-auto">
        {attractions.map((item, index) => (
          <CompactAttractionItem
            key={index}
            data={item}
            onBookmark={() => toggleBookmark(index)}
            getCategoryColor={getCategoryColor}
          />
        ))}
      </div>
    </div>
  );
};

const CompactAttractionItem = ({ data, onBookmark, getCategoryColor }) => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-50 hover:bg-gray-50 transition-colors group cursor-pointer mt-sm">
      <div className="">
        {/* Header Row */}
        <div className="flex items-start gap-msm mb-sm">
          {/* Image */}
          <div className="w-[160px]">
            <div className=" h-full rounded-lg overflow-hidden">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-xs">
              <h3 className="font-semibold text-gray-900 text-md leading-tight truncate pr-2">
                {data.title}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookmark();
                }}
                className="flex-shrink-0 p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                {data.bookmarked ? (
                  <IconBookmarkFilled size={20} className="text-primary-dark" />
                ) : (
                  <IconBookmark size={20} className="text-gray-400" />
                )}
              </button>
            </div>

            {/* Distance and Rating Row */}
            <div className="flex items-center justify-between mb-xs">
              <div className="flex items-center gap-xs text-gray-500">
                <IconMapPin size={12} />
                <span className="text-sm">
                  {data.distance} {data.unit}
                </span>
              </div>
              <div className="flex items-center gap-xxs">
                <IconStar size={12} className="text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-700">
                  {data.rating}
                </span>
                <span className="text-sm text-gray-400">({data.reviews})</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-xs">
              {data.description}
            </p>

            {/* Action Button */}
            <div
              onClick={(e) => {
                navigate(`/location/${data.title}`);
              }}
              className="text-sm font-medium text-primary flex  items-center gap-xxs "
            >
              Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideAttractions;
