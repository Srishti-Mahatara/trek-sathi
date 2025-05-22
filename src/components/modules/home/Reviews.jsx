
import React, {useState} from 'react';
import {Button, Rating} from "@mantine/core";
import {IconChevronDown, IconPencil, IconStarFilled, IconThumbUp, IconThumbUpFilled} from "@tabler/icons-react";

const ReviewsSection = () => {

    const [reviews, setReviews] = useState([
        {
            initials: 'SJ',
            name: 'Sarah Johnson',
            date: 'Visited April 2025',
            rating: 5,
            content: 'Phewa Lake exceeded all my expectations! The boat ride to Tal Barahi Temple was serene and the reflection of the Annapurna range on the clear water was breathtaking. Make sure to visit during early morning for the best views. Also, don\'t miss the sunset from the lakeside - absolutely magical!',
            tags: ['Family Trip', 'Boating', 'Photography'],
            helpful: 32
        },
        {
            initials: 'RP',
            name: 'Raj Patel',
            date: 'Visited March 2025',
            rating: 4.5,
            content: 'The lake is beautiful but can get quite crowded during peak hours. I recommend visiting in the early morning or late afternoon. The boat rental prices are reasonable, and paddling around the lake was a highlight of our trip. The lakeside restaurants offer great food with amazing views.',
            tags: ['Solo Travel', 'Kayaking', 'Budget-friendly'],
            helpful: 18
        },
        {
            initials: 'EM',
            name: 'Emma Martinez',
            date: 'Visited February 2025',
            rating: 5,
            content: 'As a photographer, Phewa Lake was paradise. The mountains reflecting in the water created stunning compositions. I highly recommend taking the hike up to the World Peace Pagoda for panoramic views of the lake. Sunrise there was incredible! The boat ride to Tal Barahi Temple is also a must-do.',
            tags: ['Photography', 'Hiking', 'Temple Visit'],
            helpful: 24
        },
        {
            initials: 'TK',
            name: 'Tom Kim',
            date: 'Visited January 2025',
            rating: 4,
            content: 'Great place to relax and enjoy nature. We rented a boat for a couple of hours and had a peaceful time on the lake. The only downside was that it was a bit too crowded near the boat rental areas. Once you row further out, it becomes more serene. The mountain views were partially obscured due to clouds during our visit.',
            tags: ['Couple Trip', 'Relaxation', 'Nature'],
            helpful: 15
        }
    ])

    const [categories, setCategories] = useState(
        [
            { name: 'Scenery', value: 5.0, fullStars: 5 },
            { name: 'Activities', value: 4.5, fullStars: 4, halfStar: true },
            { name: 'Accessibility', value: 4.1, fullStars: 4 },
            { name: 'Value for Money', value: 4.7, fullStars: 4, halfStar: true },
            { name: 'Cleanliness', value: 4.0, fullStars: 4 }
        ]
    )

    return (
        <section className="pt-xl bg-white rounded-lg p-lg shadow-md relative overflow-hidden animate-fadeIn">
            {/* Section title */}
            <div className="flex items-center gap-xs mb-md ">
                <IconStarFilled className="text-primary"/>
                <h2 className="text-xl font-semibold text-gray-800">Reviews & Ratings</h2>
            </div>

            {/* Reviews header with summary and write button */}
            <div className="flex justify-between items-center mb-lg">
                <div className="flex items-center gap-md">
                    <div className="text-5xl font-extrabold text-gray-900 leading-none">4.7</div>
                    <div className="flex flex-col gap-xxs">
                        <Rating size="sm" defaultValue={4.7} fractions={4} readOnly />
                        <div className="text-sm text-gray-600">Based on 284 reviews</div>
                    </div>
                </div>
                <button className="bg-primary text-white rounded-md py-xs px-sm font-semibold flex items-center gap-xs shadow-sm hover:bg-primary-dark hover:shadow-md transition-all duration-200 hover:-translate-y-[2px]">
                    <IconPencil/> Write a Review
                </button>
            </div>

            {/* Rating distribution */}
            <div className="flex gap-md mb-lg">
                {/* Rating bars */}
                <div className="flex-grow border-r border-gray-200 pr-md">
                    {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="flex items-center gap-md mb-xs ">
                            <div className="w-xs text-sm text-gray-700 flex items-center justify-start gap-[4px] ">
                                {rating} <IconStarFilled className="text-[#ffd700]"/>
                            </div>
                            <div className="flex-grow h-[8px] bg-gray-200 rounded-sm overflow-hidden">
                                <div
                                    className="h-full bg-primary-light rounded-sm"
                                    style={{ width: `${rating === 5 ? 78 : rating === 4 ? 15 : rating === 3 ? 5 : 1}%` }}
                                ></div>
                            </div>
                            <div className="w-[40px] text-sm text-gray-600">
                                {rating === 5 ? 78 : rating === 4 ? 15 : rating === 3 ? 5 : 1}%
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rating categories */}
                <div className="flex flex-col gap-xs w-[300px]">
                    {categories.map(category => (
                        <div key={category.name} className="flex justify-between items-center">
                            <div className="text-sm text-gray-700">{category.name}</div>
                            <div className="flex items-center gap-xs">
                                <Rating size="sm" defaultValue={category.value} fractions={4} readOnly />
                                <div className="text-sm font-semibold text-gray-800">{category.value.toFixed(1)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews container */}
            <div className="flex flex-wrap gap-md">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 rounded-md p-md w-[calc(50%-12px)] shadow-sm hover:shadow-md hover:-translate-y-[5px] transition-all duration-200 relative">
                        {/* Quote mark decoration */}
                        <div className="absolute top-xs right-md text-5xl text-primary-light opacity-20 font-serif leading-none">"</div>

                        <div className="flex items-center gap-xs mb-md">
                            <div className="w-[50px] h-[50px] rounded-full bg-primary-light text-white flex items-center justify-center text-xl font-semibold shadow-sm">
                                {review.initials}
                            </div>
                            <div className="flex-grow">
                                <div className="font-semibold text-gray-800 mb-[4px]">{review.name}</div>
                                <div className="text-xs text-gray-500">{review.date}</div>
                            </div>

                            <Rating size="sm" defaultValue={review.rating} fractions={4} readOnly />
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] mb-md">
                            {review.content}
                        </div>

                        <div className="flex flex-wrap gap-xs mb-md">
                            {review.tags.map(tag => (
                                <div key={tag} className="bg-white border border-gray-200 rounded-full px-xs py-[4px] text-xs text-gray-600">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between pt-xs border-t border-gray-200">
                            <Button className="" variant={"outline"} color={"gray"}>
                               <IconThumbUp className={'text-xs mr-xs'}/> Helpful ({review.helpful})
                            </Button>
                            <div className="text-sm text-gray-500 cursor-pointer hover:text-primary hover:underline transition-colors duration-200">
                                Report
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show more button */}
            <Button className="bg-transparent border border-primary text-primary rounded-md py-xs px-md font-semibold mx-auto mt-lg flex items-center justify-center gap-xs w-[200px] hover:bg-primary-light hover:text-white transition-all duration-200">
                <IconChevronDown/> Show More Reviews
            </Button>
        </section>
    );
};

export default ReviewsSection;
