import { useState, useEffect } from "react";
import { RiSearchLine, RiMore2Fill } from "react-icons/ri";
import ChatItem from "./ChatItem";
import TextInput from "./TextInput";
import defaultAvatar from "../../../assets/default.png";
import { Menu, UnstyledButton } from "@mantine/core";

const ChatList = ({
  currentUser,
  isUserOnline,
  chats,
  selectedChat,
  setSelectedChat,
}) => {
  const [localChats, setLocalChats] = useState(chats);
  const [sortedChats, setSortedChats] = useState([]);

  useEffect(() => {
    setLocalChats(chats);
  }, [chats]);

  useEffect(() => {
    setSortedChats(
      [...localChats].sort((a, b) => {
        if (a.status === "blocked" && b.status === "blocked") {
          if (a.changed_at && b.changed_at) {
            return a.changed_at > b.changed_at ? 1 : -1;
          } else if (a.changed_at) {
            return 1;
          } else if (b.changed_at) {
            return -1;
          }
        }
        if (a.last_message_at && b.last_message_at) {
          return b.last_message_at.localeCompare(a.last_message_at);
        } else if (a.last_message_at) {
          return -1;
        } else if (b.last_message_at) {
          return 1;
        }
        return 0;
      })
    );
  }, [localChats]);

  const onSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setLocalChats(
      chats.filter((chat) => {
        return chat.name.toLowerCase().includes(search);
      })
    );
  };

  return (
    <section
      className={`relative ${selectedChat ? "hidden" : "flex"} lg:flex flex-col bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 h-full w-full max-w-[320px] min-w-[320px] shadow-sm`}
    >
      {/* Header */}
      <header className="flex items-center justify-between w-full border-b border-gray-200 p-[12px] bg-white/95 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-[12px]">
          <div className="relative">
            <img
              src={currentUser?.avatar || defaultAvatar}
              alt="User avatar"
              className="w-[48px] h-[48px] object-cover bg-gray-300 rounded-full border-[3px] border-[#01AA85] shadow-md"
            />
            <div className="absolute -bottom-[3px] -right-[3px] w-[16px] h-[16px] bg-green-500 border-[2px] border-white rounded-full shadow-sm" />
          </div>
          <div>
            <h3 className="font-semibold text-[#01AA85] text-[18px] leading-[22px]">
              {currentUser?.name || "Unknown user"}
            </h3>
            <p className="font-medium text-gray-500 text-[14px] leading-[18px]">
              @{currentUser?.alias || "anonymous"}
            </p>
          </div>
        </div>
        <Menu shadow="md" width={160} position="bottom-end" withArrow>
          <Menu.Target>
            <UnstyledButton
              aria-label="More options"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-xl hover:bg-gradient-to-br hover:from-[#D9F2ED] hover:to-[#B8EBE0] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#01AA85]/50"
            >
              <RiMore2Fill color="#01AA85" className="w-[20px] h-[20px]" />
            </UnstyledButton>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={() => alert("Profile clicked")}>
              Profile
            </Menu.Item>
            <Menu.Item onClick={() => alert("Settings clicked")}>
              Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item color="red" onClick={() => alert("Logout clicked")}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </header>

      {/* Search */}
      <div className="w-full px-[16px] py-[16px] bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="flex flex-row items-center gap-[8px] mb-[12px] relative">
          <TextInput
            onKeyUp={onSearch}
            placeholder="Find users and groups"
            className="w-full pl-[36px] pr-[12px] py-[6px] bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#01AA85] focus:ring-2 focus:ring-[#01AA85]/20 transition-all duration-200"
          />
          <RiSearchLine
            color="#9aa5b1"
            className="w-[18px] h-[18px] absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] text-[#2A3D39] font-semibold flex items-center gap-[8px]">
            <span className="w-[8px] h-[8px] bg-[#01AA85] rounded-full" />
            Messages ({sortedChats?.length || 0})
          </h3>
        </div>
      </div>

      {/* Chat List */}
      <div className="h-full overflow-y-auto pb-[12px] custom-scrollbar w-full bg-gradient-to-b from-white/50 to-gray-50/50">
        <div className="px-[8px] pt-[8px]">
          {sortedChats?.map((chat, index) => (
            <div
              key={
                chat.is_group
                  ? `${chat.group_id}_${chat.last_message_id}`
                  : `${chat.conversation_id}_${chat.last_message_id}`
              }
            >
              <ChatItem
                chat={chat}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                online={isUserOnline(chat?.otherUser_id)}
              />
              {index < sortedChats.length - 1 && (
                <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-[16px] my-[6px]" />
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedChats?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-[48px] text-center px-[16px]">
            <div className="w-[64px] h-[64px] bg-gray-100 rounded-full flex items-center justify-center mb-[12px]">
              <RiSearchLine className="w-[32px] h-[32px] text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">No conversations found</p>
            <p className="text-gray-400 text-[14px] mt-[6px]">
              Start a new chat to begin messaging
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatList;
