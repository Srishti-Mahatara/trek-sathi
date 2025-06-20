import React, { useState } from "react";
import {
  TbArrowBackUp,
  TbPhone,
  TbVideo,
  TbDotsVertical,
  TbUserPlus,
  TbSettings,
  TbArchive,
  TbTrash,
} from "react-icons/tb";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import defaultAvatar from "../../../assets/default.png";
import groupAvatar from "../../../assets/group.png";
import { Menu, Button } from "@mantine/core";

const ChatBoxHeader = ({
  online,
  onlineUsers,
  chatDetails,
  selectedChat,
  setSelectedChat,
}) => {
  const [showMembersList, setShowMembersList] = useState(false);

  const chatHeader = selectedChat
    ? selectedChat.is_group
      ? {
          name: selectedChat.name || "Unknown Group",
          subtext: `${selectedChat.members?.length || 0} members${
            onlineUsers?.length > 0 ? `, ${onlineUsers?.length} online` : ""
          }`,
          avatar: selectedChat.avatar || groupAvatar,
        }
      : {
          name: selectedChat.name || "Unknown User",
          subtext: online ? "Online" : `@${selectedChat.alias || "anonymous"}`,
          avatar: selectedChat.avatar || defaultAvatar,
        }
    : {
        name: null,
        subtext: null,
        avatar: null,
      };

  const onExitChat = () => {
    setSelectedChat(null);
    setShowMembersList(false);
  };

  const toggleMembersList = () => {
    if (selectedChat?.is_group) {
      setShowMembersList((prev) => !prev);
    }
  };

  return (
    <div className="relative">
      {/* Main Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          background: "linear-gradient(to right, white, rgba(243,244,246,0.5))",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 20,
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flex: 1,
            minWidth: 0,
            cursor: selectedChat?.is_group ? "pointer" : "default",
          }}
          onClick={toggleMembersList}
          role={selectedChat?.is_group ? "button" : undefined}
          tabIndex={selectedChat?.is_group ? 0 : undefined}
          onKeyDown={(e) => {
            if (e.key === "Enter" && selectedChat?.is_group)
              toggleMembersList();
          }}
        >
          {/* Avatar with online status */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <img
              src={chatHeader.avatar}
              alt="Chat avatar"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "3px solid #01AA85",
                backgroundColor: "#f3f4f6",
                objectFit: "cover",
                boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
              }}
            />
            {!selectedChat?.is_group && online && (
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: 16,
                  height: 16,
                  backgroundColor: "#22c55e", // green-500
                  border: "2px solid white",
                  borderRadius: "50%",
                  boxShadow: "0 0 6px #22c55e",
                  animation: "pulse 2s infinite",
                }}
                aria-label="User online"
              />
            )}
            {selectedChat?.is_group && (
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: 20,
                  height: 20,
                  backgroundColor: "#01AA85",
                  border: "2px solid white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 0 6px rgba(1,170,133,0.5)",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: "700",
                    userSelect: "none",
                  }}
                >
                  G
                </span>
              </div>
            )}
          </div>

          {/* Chat info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                flexWrap: "nowrap",
              }}
            >
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#01AA85",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  userSelect: "none",
                }}
              >
                {chatHeader.name}
              </h2>
              {selectedChat?.is_group && selectedChat.members?.length > 0 && (
                <button
                  aria-label="Toggle members list"
                  onClick={toggleMembersList}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "#01AA85",
                    transition: "color 0.2s",
                    userSelect: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00968A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#01AA85")
                  }
                >
                  {showMembersList ? (
                    <ChevronUpIcon style={{ width: 16, height: 16 }} />
                  ) : (
                    <ChevronDownIcon style={{ width: 16, height: 16 }} />
                  )}
                </button>
              )}
            </div>
            <p
              style={{
                fontSize: 14,
                color:
                  online && !selectedChat?.is_group
                    ? "#16a34a" // green-600
                    : "#6b7280", // gray-500
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                marginTop: 2,
                fontWeight:
                  online && !selectedChat?.is_group ? "500" : "normal",
                userSelect: "none",
              }}
            >
              {chatHeader.subtext}
            </p>

            {/* Typing indicator */}
            {selectedChat?.is_typing && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 4,
                }}
              >
                <div style={{ display: "flex", gap: 4 }}>
                  {[0, 0.1, 0.2].map((delay) => (
                    <div
                      key={delay}
                      style={{
                        width: 4,
                        height: 4,
                        backgroundColor: "#01AA85",
                        borderRadius: "50%",
                        animation: `bounce 1.4s infinite`,
                        animationDelay: `${delay}s`,
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "#01AA85",
                    fontWeight: "500",
                    userSelect: "none",
                  }}
                >
                  typing
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginLeft: 16,
          }}
        >
          {/* Voice call */}
          <button
            type="button"
            aria-label="Voice call"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4b5563", // gray-600
              transition: "all 0.2s ease",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(1,170,133,0.1)";
              e.currentTarget.style.color = "#01AA85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#4b5563";
            }}
          >
            <TbPhone style={{ width: 30, height: 30 }} />
          </button>

          {/* Video call */}
          <button
            type="button"
            aria-label="Video call"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4b5563", // gray-600
              transition: "all 0.2s ease",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(1,170,133,0.1)";
              e.currentTarget.style.color = "#01AA85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#4b5563";
            }}
          >
            <TbVideo style={{ width: 30, height: 30 }} />
          </button>

          {/* Menu */}
          <Menu shadow="md" width={200} withinPortal position="bottom-end">
            <Menu.Target>
              <Button
                variant="subtle"
                compact
                aria-label="More options"
                style={{
                  width: 40,
                  height: 40,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4b5563",
                  borderRadius: 12,
                  transition: "all 0.2s ease",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(1,170,133,0.1)";
                  e.currentTarget.style.color = "#01AA85";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#4b5563";
                }}
              >
                <TbDotsVertical style={{ width: 30, height: 30 }} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<TbUserPlus size={20} />}>
                Add to group
              </Menu.Item>
              <Menu.Item icon={<TbSettings size={20} />}>
                Chat settings
              </Menu.Item>
              <Menu.Item icon={<TbArchive size={20} />}>Archive chat</Menu.Item>
              <Menu.Divider />
              <Menu.Item color="red" icon={<TbTrash size={20} />}>
                Delete chat
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Back button (visible only on small screens) */}
          <button
            type="button"
            aria-label="Back to chats"
            onClick={onExitChat}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              color: "#01AA85",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              display: "none", // Show with media query below
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.2s ease",
            }}
            className="lg:hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(1,170,133,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <TbArrowBackUp style={{ width: 24, height: 24 }} />
          </button>
        </div>
      </div>

      {/* Group Members List */}
      {showMembersList && selectedChat?.is_group && selectedChat?.members && (
        <div
          style={{
            backgroundColor: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "8px 24px",
            maxHeight: 128,
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {selectedChat.members.map((member) => (
              <div
                key={member.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#f9fafb",
                  borderRadius: 8,
                  padding: "4px 8px",
                  fontSize: 14,
                  color: "#374151",
                  fontWeight: 500,
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={member.avatar || defaultAvatar}
                    alt={member.name}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: "1px solid #e5e7eb",
                      objectFit: "cover",
                    }}
                  />
                  {onlineUsers?.some((user) => user.id === member.id) && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: -2,
                        right: -2,
                        width: 8,
                        height: 8,
                        backgroundColor: "#22c55e",
                        border: "1px solid white",
                        borderRadius: "50%",
                      }}
                      aria-label={`${member.name} is online`}
                    />
                  )}
                </div>
                <span>{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBoxHeader;
