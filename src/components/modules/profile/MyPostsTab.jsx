import React, { useState } from 'react';
import { Paper, Stack, Title, Text, Group, Button, Select, Badge, Image, ActionIcon, Pagination } from '@mantine/core';
import { Camera, Plus, MapPin, Heart, MessageCircle, Share, Edit, Trash2, ChevronRight } from 'lucide-react';

const MyPostsTab = () => {
  const [filter, setFilter] = useState('all');
  const [activePage, setActivePage] = useState(1);

  const posts = [
    {
      id: 1,
      title: 'Magical Days in Santorini',
      location: 'Santorini, Greece',
      date: 'April 20, 2025',
      excerpt: 'Spent a week in this paradise with its stunning white buildings and breathtaking ocean views. The sunsets were absolutely incredible...',
      mainImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      thumbnails: [
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=80&fit=crop'
      ],
      morePhotos: 2,
      stats: { likes: 127, comments: 32, shares: 14 },
      isDraft: false
    },
    {
      id: 2,
      title: 'Himalayan Adventure in Pokhara',
      location: 'Pokhara, Nepal',
      date: 'March 15, 2025',
      excerpt: 'Spent a week in this paradise with its stunning white buildings and breathtaking ocean views. The sunsets were absolutely incredible...',
      mainImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      thumbnails: [
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=80&fit=crop'
      ],
      morePhotos: 2,
      stats: { likes: 127, comments: 32, shares: 14 },
      isDraft: false
    },
    {
      id: 3,
      title: 'Cultural Immersion in Kyoto',
      location: 'Kyoto, Japan',
      date: 'January 25, 2025',
      excerpt: 'Spent a week in this paradise with its stunning white buildings and breathtaking ocean views. The sunsets were absolutely incredible...',
      mainImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      thumbnails: [
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=80&fit=crop'
      ],
      morePhotos: 2,
      stats: { likes: 127, comments: 32, shares: 14 },
      isDraft: false
    },
    {
      id: 4,
      title: 'Rome Weekend Getaway',
      location: 'Rome, Italy',
      date: 'Started April 28, 2025',
      excerpt: 'Spent a week in this paradise with its stunning white buildings and breathtaking ocean views. The sunsets were absolutely incredible...',
      mainImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      thumbnails: [
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=80&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=80&fit=crop'
      ],
      morePhotos: 2,
      stats: { likes: 127, comments: 32, shares: 14 },
      isDraft: false
    }
  ];

  const PostCard = ({ post }) => (
    <Paper className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Post Images */}
      <div className="relative">
        <div className="relative">
          <Image
            src={post.mainImage}
            alt={post.title}
            height={200}
            className="object-cover"
          />
          {post.isDraft && (
            <Badge
              color="orange"
              variant="filled"
              className="absolute top-2 left-2"
            >
              DRAFT
            </Badge>
          )}
          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-xs">
            <MapPin size={12} />
            {post.location}
          </div>
        </div>

        {post.thumbnails.length > 0 && (
          <div className="flex gap-1 p-2 bg-gray-50">
            {post.thumbnails.map((thumb, index) => (
              <Image
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                width={60}
                height={48}
                className="object-cover rounded"
              />
            ))}
            {post.morePhotos > 0 && (
              <div className="w-15 h-12 bg-gray-200 rounded flex items-center justify-center text-xs font-medium text-gray-600">
                +{post.morePhotos}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="p-md">
        <div className="flex justify-between items-start mb-sm">
          <Title order={4} className="text-gray-900 flex-1">
            {post.title}
          </Title>
          <Text size="xs" className="text-gray-500 whitespace-nowrap ml-2">
            {post.date}
          </Text>
        </div>

        <Text size="sm" className="text-gray-600 mb-md line-clamp-3">
          {post.excerpt}
        </Text>

        <div className="flex justify-between items-center">
          {!post.isDraft ? (
            <Group gap="md">
              <Group gap="xs">
                <Heart size={16} className="text-red-500" />
                <Text size="sm">{post.stats.likes}</Text>
              </Group>
              <Group gap="xs">
                <MessageCircle size={16} className="text-blue-500" />
                <Text size="sm">{post.stats.comments}</Text>
              </Group>
              <Group gap="xs">
                <Share size={16} className="text-green-500" />
                <Text size="sm">{post.stats.shares}</Text>
              </Group>
            </Group>
          ) : (
            <Text size="sm" className="text-orange-600 font-medium">
              Incomplete draft
            </Text>
          )}

          <Group gap="xs">
            {post.isDraft ? (
              <Button size="xs" variant="filled">
                Continue Editing
              </Button>
            ) : (
              <>
                <Button size="xs" variant="light" leftSection={<Edit size={14} />}>
                  Edit
                </Button>
                <ActionIcon size="sm" variant="light" color="red">
                  <Trash2 size={14} />
                </ActionIcon>
              </>
            )}
          </Group>
        </div>
      </div>
    </Paper>
  );

  const PaginationButton = ({ page, isActive, onClick }) => (
    <Button
      size="sm"
      variant={isActive ? "filled" : "subtle"}
      onClick={() => onClick(page)}
      className={isActive ? "bg-blue-500" : ""}
    >
      {page}
    </Button>
  );

  return (
    <Stack gap="md">
      <Title order={2} className="text-gray-900 flex items-center gap-sm">
        <Camera size={24} />
        My Posts
      </Title>

      {/* Actions and Filter */}
      <Group justify="space-between" className="mb-md">
        <Button leftSection={<Plus size={16} />}>
          Create New Post
        </Button>
        <Select
          placeholder="Filter posts"
          value={filter}
          onChange={setFilter}
          data={[
            { value: 'all', label: 'All Posts' },
            { value: 'popular', label: 'Most Popular' },
            { value: 'recent', label: 'Most Recent' }
          ]}
          className="w-48"
        />
      </Group>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-md">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <Group justify="center" gap="xs" className="mt-md">
        <PaginationButton
          page={1}
          isActive={activePage === 1}
          onClick={setActivePage}
        />
        <PaginationButton
          page={2}
          isActive={activePage === 2}
          onClick={setActivePage}
        />
        <PaginationButton
          page={3}
          isActive={activePage === 3}
          onClick={setActivePage}
        />
        <Text size="sm" className="text-gray-500">...</Text>
        <PaginationButton
          page={7}
          isActive={activePage === 7}
          onClick={setActivePage}
        />
        <ActionIcon variant="subtle" size="sm">
          <ChevronRight size={16} />
        </ActionIcon>
      </Group>
    </Stack>
  );
};

export default MyPostsTab;