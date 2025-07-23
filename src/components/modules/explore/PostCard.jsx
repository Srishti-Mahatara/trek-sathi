import React, { useState } from 'react';
import { IconHeart, IconMessageFilled, IconShare, IconSend, IconMapPinFilled, IconDotsVertical, IconTrash } from '@tabler/icons-react';
import { PostModal } from './PostModal';
import { Menu, ActionIcon } from '@mantine/core';

export const PostCard = ({ post, isAdmin = false }) => {
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

    // Dummy delete handler
    const handleDelete = () => {
        // Implement delete logic here
        alert('Delete post');
    };

    return (
        <>
            <PostModal post={post} opened={modalOpened} onClose={() => setModalOpened(false)} />
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-[4px] hover:shadow-lg animate-fadeIn h-fit">
                {/* Post Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-xs sm:p-sm border-b border-gray-200 gap-xs sm:gap-none">
                    <div className="flex flex-col gap-xxs w-full sm:w-auto">
                        <div className="flex items-center gap-xs">
                            <div className="w-[36px] sm:w-[40px] rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src={post.userAvatar}
                                    alt="User Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-gray-800 text-sm sm:text-base">{post.username}</div>
                                <div className="text-xs text-gray-500">{post.postTime}</div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-full px-xs py-xxs text-xs text-primary-dark font-medium flex items-center gap-xxs w-fit mt-xxs">
                            <IconMapPinFilled size={14} className="text-primary mb-xxs" />
                            {post.location}
                        </div>
                    </div>
                    <div className="flex items-center gap-xs w-full sm:w-auto justify-end">
                        {isAdmin && (
                            <Menu shadow="md" width={160} position="bottom-end" withinPortal>
                                <Menu.Target>
                                    <ActionIcon variant="subtle" color="gray" size="lg" aria-label="Post actions">
                                        <IconDotsVertical size={20} />
                                    </ActionIcon>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item color="red" leftSection={<IconTrash size={16} />} onClick={handleDelete}>
                                        Delete Post
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        )}
                    </div>
                </div>

                {/* Post Content */}
                <div className="p-xs sm:p-sm">
                    <div className="text-gray-700 leading-relaxed mb-xs sm:mb-sm text-sm sm:text-base">
                        <p>{post.content}</p>
                    </div>
                    <div className="rounded-md overflow-hidden h-[200px] sm:h-[300px] group cursor-pointer" onClick={handlePostClick}>
                        <img
                            src={post.image}
                            alt={post.location}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Post Stats */}
                <div className="flex justify-between px-xs sm:px-sm py-xs sm:py-sm border-t border-b border-gray-200">
                    <div
                        onClick={handleLike}
                        className={`flex items-center gap-xs mr-sm sm:mr-md text-xs sm:text-sm cursor-pointer transition-colors duration-200 ${liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                    >
                        <IconHeart size={16} fill={liked ? 'currentColor' : 'none'} />
                        <span>{post.likes} likes</span>
                    </div>
                    <div
                        onClick={handleCommentsToggle}
                        className="flex items-center gap-xs mr-sm sm:mr-md text-gray-600 text-xs sm:text-sm cursor-pointer transition-colors duration-200 hover:text-primary"
                    >
                        <IconMessageFilled size={16} />
                        <span>{post.comments.length} comments</span>
                    </div>
                    <div className="flex items-center gap-xs mr-sm sm:mr-md text-gray-600 text-xs sm:text-sm cursor-pointer transition-colors duration-200 hover:text-green-500">
                        <IconShare size={16} />
                        <span>Share</span>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="p-xs sm:p-sm">
                    {/* Always show first 2 comments when not expanded */}
                    {!showComments && post.comments.slice(0, 2).map((comment, index) => (
                        <div key={index} className="flex gap-xs mb-xs sm:mb-sm">
                            <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src={comment.avatar}
                                    alt="Comment Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="font-semibold text-gray-800 text-xs sm:text-sm">{comment.user}</div>
                                <div className="text-gray-700 text-xs sm:text-sm mt-[2px] leading-relaxed">{comment.text}</div>
                                <div className="flex gap-xs sm:gap-sm mt-xxs">
                                    <span className="text-[10px] sm:text-xs text-gray-500">{comment.time}</span>
                                    <span className="text-[10px] sm:text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Like</span>
                                    <span className="text-[10px] sm:text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Reply</span>
                                    {isAdmin && 
                                    <span className="text-[10px] sm:text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Delete</span>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Show "View more comments" button only when there are more than 2 comments and not expanded */}
                    {!showComments && post.comments.length > 2 && (
                        <div
                            onClick={handleCommentsToggle}
                            className="text-[10px] sm:text-xs text-center text-primary font-medium cursor-pointer transition-all duration-200 hover:text-primary-dark mb-xs sm:mb-sm"
                        >
                            View {post.comments.length - 2} more comments
                        </div>
                    )}

                    {/* Scrollable expanded comments section */}
                    {showComments && (
                        <>
                            <div className="max-h-[300px] sm:max-h-[400px] overflow-y-auto mb-xs sm:mb-sm">
                                {post.comments.map((comment, index) => (
                                    <div key={index} className="flex gap-xs mb-xs sm:mb-sm">
                                        <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full overflow-hidden flex-shrink-0">
                                            <img
                                                src={comment.avatar}
                                                alt="Comment Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="font-semibold text-gray-800 text-xs sm:text-sm">{comment.user}</div>
                                            <div className="text-gray-700 text-xs sm:text-sm mt-[2px] leading-relaxed">{comment.text}</div>
                                            <div className="flex gap-xs sm:gap-sm mt-xxs">
                                                <span className="text-[10px] sm:text-xs text-gray-500">{comment.time}</span>
                                                <span className="text-[10px] sm:text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Like</span>
                                                <span className="text-[10px] sm:text-xs text-gray-600 font-medium cursor-pointer transition-colors duration-200 hover:text-primary">Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Show "Hide comments" button when expanded */}
                            <div
                                onClick={handleCommentsToggle}
                                className="text-[10px] sm:text-xs text-center text-primary font-medium cursor-pointer transition-all duration-200 hover:text-primary-dark mb-xs sm:mb-sm"
                            >
                                Hide comments
                            </div>
                        </>
                    )}

                    {/* Add Comment */}
                    <div className="flex items-center gap-xs sm:gap-sm mt-xs sm:mt-sm">
                        <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full overflow-hidden">
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
                            className="flex-grow border border-gray-200 rounded-full px-xs sm:px-sm py-xxs sm:py-xs text-xs sm:text-sm transition-all duration-200 focus:outline-none focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(0,131,143,0.1)]"
                        />
                        <button
                            onClick={handleCommentSubmit}
                            className="bg-primary text-white w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-200 hover:bg-primary-dark hover:scale-110"
                        >
                            <IconSend size={12} className="sm:hidden" />
                            <IconSend size={14} className="hidden sm:block" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};