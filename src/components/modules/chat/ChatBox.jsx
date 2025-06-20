import { useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import logo from "../../../assets/logo.png";
import ChatBoxHeader from "./ChatBoxHeader";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";

const ChatBox = ({
  currentUser,
  isUserOnline,
  selectedChat,
  setSelectedChat,
  messages,
  onSendMessage,
}) => {
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {selectedChat ? (
        <div className="flex-1 flex flex-col h-[94vh] bg-gradient-to-br from-[#f4f8fb] via-[#f0f7fa] to-[#e8f4f8] p-md">
          <div className="flex flex-col flex-1 mx-auto w-full shadow-2xl rounded-2xl bg-white/95 backdrop-blur-sm overflow-hidden border border-white/50">
            <ChatBoxHeader
              online={isUserOnline(selectedChat?.otherUser_id)}
              onlineUsers={selectedChat?.members?.filter(
                (user) => user.id !== currentUser.id && isUserOnline(user.id)
              )}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />

            {/* Messages Container */}
            <div
              ref={scrollRef}
              id="messages"
              className="flex-1 flex flex-col space-y-sm p-lg overflow-y-auto bg-gradient-to-b from-[#fafcfe] to-[#f7fafc] custom-scrollbar scroll-smooth"
              style={{
                scrollBehavior: "smooth",
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, rgba(1, 170, 133, 0.03) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(1, 170, 133, 0.02) 0%, transparent 50%)
                `,
              }}
            >
              {(!messages || messages.length === 0) && (
                <div className="flex flex-col gap-lg justify-center items-center text-center h-full">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#01AA85]/20 to-[#01AA85]/10 blur-3xl rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-white to-gray-50 p-xl rounded-full shadow-lg border border-gray-100">
                      <ChatBubbleLeftRightIcon className="w-20 h-20 text-[#01AA85] opacity-80" />
                    </div>
                  </div>
                  <div className="space-y-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-700 flex items-center gap-xs">
                      Start the conversation
                      <SparklesIcon className="w-6 h-6 text-[#01AA85]" />
                    </h3>
                    <p className="text-gray-500 max-w-md">
                      Send your first message to{" "}
                      {selectedChat?.name || "this contact"} to begin chatting
                    </p>
                  </div>
                </div>
              )}

              {messages && messages.length > 0 && (
                <div className="space-y-sm">
                  {messages.map((msg, index) => (
                    <MessageItem
                      key={msg?.id}
                      currentUser={currentUser}
                      is_group={selectedChat?.is_group}
                      otherUserAvatar={selectedChat?.avatar}
                      message={msg}
                      isLastMessage={index === messages.length - 1}
                      showAvatar={
                        index === messages.length - 1 ||
                        messages[index + 1]?.sender?.id !== msg?.sender?.id
                      }
                    />
                  ))}
                </div>
              )}

              {/* Scroll anchor */}
              <div className="h-0" />
            </div>

            {/* Message Input */}
            <div className="bg-white/90 backdrop-blur-sm px-lg py-md border-t border-gray-100 shadow-lg">
              <MessageInput
                selectedChat={selectedChat}
                currentUser={currentUser}
                onSendMessage={onSendMessage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex justify-center items-center h-screen w-full overflow-hidden bg-gradient-to-br from-[#e5f6f3] via-[#f0fdf9] to-[#ecfdf5]">
          {/* Background animations and shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large blurred circles with slow float animation */}
            <div
              className="absolute top-[80px] left-[80px] w-[288px] h-[288px] bg-[#01AA85]/10 rounded-full blur-[48px] animate-float-slow"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute bottom-[80px] right-[80px] w-[384px] h-[384px] bg-[#01AA85]/20 rounded-full blur-[48px] animate-float-slow"
              style={{ animationDelay: "2s" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#01AA85]/30 to-transparent rounded-full" />

            {/* Subtle shimmer overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none animate-shimmer"
              style={{ mixBlendMode: "soft-light" }}
            />
          </div>

          {/* Content container */}
          <div className="relative flex flex-col justify-center items-center text-center max-w-[384px] mx-auto px-[32px] space-y-[32px] z-10">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#01AA85]/30 to-[#01AA85]/15 rounded-full blur-[48px]" />
              <div className="relative bg-white/90 backdrop-blur-sm p-[32px] rounded-full shadow-xl border border-white/60">
                <img
                  src={logo}
                  alt="Chat Logo"
                  width={96}
                  height={96}
                  className="drop-shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-[16px]">
              <h1 className="text-[40px] font-extrabold leading-tight bg-gradient-to-r from-[#01AA85] to-teal-600 bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(1,170,133,0.4)]">
                Welcome to Trek-Sathi Chats
              </h1>
              <p className="text-[18px] font-medium text-gray-600 leading-relaxed">
                Connect and chat with friends easily, securely, fast and free
              </p>
            </div>

            <div className="flex justify-center space-x-[48px] text-[16px] text-gray-500 font-semibold select-none">
              {[
                { color: "bg-green-500", label: "Secure" },
                { color: "bg-blue-500", label: "Fast" },
                { color: "bg-purple-500", label: "Free" },
              ].map(({ color, label }) => (
                <div
                  key={label}
                  className="flex items-center space-x-[12px] cursor-default"
                  title={label}
                >
                  <span
                    className={`${color} w-[20px] h-[20px] rounded-full animate-pulse inline-block`}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
