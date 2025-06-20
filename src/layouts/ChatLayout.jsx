import { useState } from "react";
import ChatList from "../components/modules/chat/ChatList.jsx";
import ChatBox from "../components/modules/chat/ChatBox.jsx";

// Mock users
const mockUsers = [
  { id: 1, name: "Alice", alias: "alice", avatar: null },
  { id: 2, name: "Bob", alias: "bob", avatar: null },
  { id: 3, name: "Charlie", alias: "charlie", avatar: null },
];

// Mock chats (1-1 and group)
const mockChats = [
  {
    is_group: false,
    conversation_id: 101,
    otherUser_id: 2,
    otherUser_avatar: null,
    name: "Bob",
    alias: "bob",
    last_message: "Hey, how are you?",
    last_message_at: "2024-06-01T10:00:00Z",
    status: "active",
    changed_at: null,
    last_message_id: 201,
  },
  {
    is_group: false,
    conversation_id: 102,
    otherUser_id: 3,
    otherUser_avatar: null,
    name: "Charlie",
    alias: "charlie",
    last_message: "Let's catch up soon!",
    last_message_at: "2024-06-01T09:00:00Z",
    status: "active",
    changed_at: null,
    last_message_id: 202,
  },
  {
    is_group: true,
    group_id: 301,
    group_avatar: null,
    name: "Friends Group",
    members: [mockUsers[0], mockUsers[1], mockUsers[2]],
    last_message: "Group chat started!",
    last_message_at: "2024-06-01T08:00:00Z",
    status: "active",
    changed_at: null,
    last_message_id: 203,
  },
];

// Mock messages per chat
const mockMessages = {
  101: [
    {
      id: 201,
      message: "Hey, how are you?",
      sender: { id: 2, name: "Bob", avatar: null },
      created_at: "2024-06-01T10:00:00Z",
    },
    {
      id: 204,
      message: "I'm good! How about you?",
      sender: { id: 1, name: "Alice", avatar: null },
      created_at: "2024-06-01T10:01:00Z",
    },
  ],
  102: [
    {
      id: 202,
      message: "Let's catch up soon!",
      sender: { id: 3, name: "Charlie", avatar: null },
      created_at: "2024-06-01T09:00:00Z",
    },
    {
      id: 205,
      message: "Sure, let me know when!",
      sender: { id: 1, name: "Alice", avatar: null },
      created_at: "2024-06-01T09:01:00Z",
    },
  ],
  301: [
    {
      id: 203,
      message: "Group chat started!",
      sender: { id: 2, name: "Bob", avatar: null },
      created_at: "2024-06-01T08:00:00Z",
    },
    {
      id: 206,
      message: "Hello everyone!",
      sender: { id: 3, name: "Charlie", avatar: null },
      created_at: "2024-06-01T08:01:00Z",
    },
    {
      id: 207,
      message: "Hi!",
      sender: { id: 1, name: "Alice", avatar: null },
      created_at: "2024-06-01T08:02:00Z",
    },
  ],
};

const currentUser = mockUsers[0];

const ChatLayout = () => {
  const [chats, setChats] = useState(mockChats);
  const [selectedChat, setSelectedChat] = useState(null);
  // messagesByChatId: { [id]: messages[] }
  const [messagesByChatId, setMessagesByChatId] = useState(mockMessages);

  // Helper to get messages for selected chat
  const getMessagesForChat = (chat) => {
    if (!chat) return [];
    if (chat.is_group) return messagesByChatId[chat.group_id] || [];
    return messagesByChatId[chat.conversation_id] || [];
  };

  // Handler to send a new message
  const handleSendMessage = (chat, text) => {
    if (!chat || !text.trim()) return;
    const newMsg = {
      id: Date.now(),
      message: text,
      sender: {
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar,
      },
      created_at: new Date().toISOString(),
    };
    const chatId = chat.is_group ? chat.group_id : chat.conversation_id;
    setMessagesByChatId((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMsg],
    }));
    // Update last message in chat list
    setChats((prev) =>
      prev.map((c) => {
        if (
          (c.is_group && c.group_id === chatId) ||
          (!c.is_group && c.conversation_id === chatId)
        ) {
          return {
            ...c,
            last_message: text,
            last_message_at: newMsg.created_at,
            last_message_id: newMsg.id,
          };
        }
        return c;
      })
    );
  };

  // Fake online status: everyone except current user is online
  const isUserOnline = (userId) => userId !== currentUser.id;

  return (
    <div className="flex lg:flex-row w-full h-[94vh]">
      <ChatList
        currentUser={currentUser}
        isUserOnline={isUserOnline}
        chats={chats}
        setChats={setChats}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />
      <ChatBox
        currentUser={currentUser}
        isUserOnline={isUserOnline}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        messages={getMessagesForChat(selectedChat)}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatLayout;
