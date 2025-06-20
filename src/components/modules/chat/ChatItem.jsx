import defaultAvatar from "../../../assets/default.png";
import groupAvatar from "../../../assets/group.png";
import { formatTimestamp } from "../../../services/formatTimestamp.js";

const ChatItem = ({ chat, setSelectedChat, selectedChat, online }) => {
  let selectedStyles = "";
  let isSelected = false;

  if (selectedChat) {
    if (
      (selectedChat.conversation_id &&
        selectedChat.conversation_id === chat.conversation_id) ||
      (selectedChat.group_id && selectedChat.group_id === chat.group_id)
    ) {
      selectedStyles =
        "border-[2px] border-[#01AA85] bg-gradient-to-r from-[#e6fcf5] to-[#f0fdf9] shadow-md scale-[1.02]";
      isSelected = true;
    }
  }

  const startChat = (chat) => {
    setSelectedChat(chat);
  };

  const hasUnreadMessages = chat?.unread_count > 0;

  return (
    <button
      className={`
        group flex items-center gap-[12px] w-full px-[16px] py-[10px] my-[6px] rounded-[12px] 
        transition-all duration-200 border border-transparent
        hover:bg-gradient-to-r hover:from-[#f8fdfc] hover:to-[#f0fdf9]
        hover:shadow-lg hover:border-[#01AA85]/30 hover:scale-[1.01]
        focus:outline-none focus:ring-2 focus:ring-[#01AA85]/30 focus:ring-offset-1
        active:scale-95
        ${selectedStyles}
        ${hasUnreadMessages ? "bg-gradient-to-r from-blue-50 to-indigo-50" : ""}
      `}
      onClick={() => startChat(chat)}
      aria-pressed={isSelected}
    >
      {/* Avatar Section */}
      {chat?.is_group ? (
        <div className="relative flex items-center justify-center w-[48px] h-[48px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-200">
          <img
            src={chat?.group_avatar || groupAvatar}
            className="w-[40px] h-[40px] rounded-full object-cover"
            alt="Group avatar"
          />
          <div className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] bg-[#01AA85] rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white text-[12px] font-bold select-none">
              G
            </span>
          </div>
        </div>
      ) : (
        <div className="relative flex items-center justify-center w-[48px] h-[48px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <img
            src={chat?.otherUser_avatar || defaultAvatar}
            className="w-full h-full object-cover"
            alt="User avatar"
          />
          {online && (
            <div className="absolute -bottom-[4px] -right-[4px] w-[16px] h-[16px] bg-green-500 border-[2px] border-white rounded-full shadow-sm">
              <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-[4px]">
          <div className="flex items-center gap-[6px] flex-1 min-w-0">
            <h2
              className={`
                font-semibold text-[#2A3d39] text-[16px] truncate
                ${hasUnreadMessages ? "text-[#01AA85]" : ""}
                ${isSelected ? "text-[#01AA85]" : ""}
              `}
            >
              {chat?.name || "Unknown User"}
            </h2>
            {hasUnreadMessages && (
              <div className="flex-shrink-0 w-[8px] h-[8px] bg-[#01AA85] rounded-full shadow-sm"></div>
            )}
          </div>
          <div className="flex items-center gap-[6px] flex-shrink-0 ml-[6px]">
            <span
              className={`
                text-xs whitespace-nowrap transition-colors duration-200
                ${isSelected ? "text-[#01AA85] font-medium" : "text-gray-400"}
                ${hasUnreadMessages ? "text-[#01AA85] font-medium" : ""}
              `}
            >
              {formatTimestamp(chat?.last_message_at)}
            </span>
            {hasUnreadMessages && (
              <div className="bg-[#01AA85] text-white text-xs font-bold px-[8px] py-[2px] rounded-full min-w-[20px] h-[20px] flex items-center justify-center shadow-sm select-none">
                {chat.unread_count > 99 ? "99+" : chat.unread_count}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p
            className={`
              text-sm truncate flex-1 transition-colors duration-200 text-start
              ${hasUnreadMessages ? "text-gray-700 font-medium" : "text-gray-600"}
              ${isSelected ? "text-gray-700" : ""}
            `}
          >
            {chat?.last_message || (
              <span className="text-[#01AA85] font-medium italic">
                ----- New Contact -----
              </span>
            )}
          </p>

          {/* Status indicators */}
          <div className="flex items-center gap-[6px] ml-[6px]">
            {chat?.is_typing && (
              <div className="flex space-x-[4px]">
                <div className="w-[6px] h-[6px] bg-[#01AA85] rounded-full animate-bounce"></div>
                <div
                  className="w-[6px] h-[6px] bg-[#01AA85] rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-[6px] h-[6px] bg-[#01AA85] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            )}

            {chat?.status === "blocked" && (
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ChatItem;
