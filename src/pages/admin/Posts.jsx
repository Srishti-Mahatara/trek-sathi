import React, { useState } from 'react'
import { FiltersSection } from '../../components/modules/explore/FilterSection'
import { PostCard } from '../../components/modules/explore/PostCard'
import { Group, TextInput, Title } from '@mantine/core';

const Posts = () => {

    const postsData = [
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
            comments: Array.from({ length: 18 }, (_, i) => ({
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
            comments: Array.from({ length: 45 }, (_, i) => ({
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
            comments: Array.from({ length: 29 }, (_, i) => ({
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
            comments: Array.from({ length: 29 }, (_, i) => ({
                user: `Hiker ${i + 1}`,
                text: `Incredible views! Comment ${i + 1}`,
                time: `${i + 1} hours ago`,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Hiker${i}`
            }))
        }
    ];

  return (
    <div>
        <Group justify="space-between" align="flex-end">
          <div>
            <Title order={2}>Posts</Title>
          </div>
        </Group>

        <FiltersSection isAdmin={true}/>

        <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-[20px]">
            {postsData.map((post, index) => (
                <div key={index} className="mb-[20px] break-inside-avoid">
                    <PostCard post={post} isAdmin={true}/>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Posts