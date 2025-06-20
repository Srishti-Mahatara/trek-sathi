import React, { useState } from "react";
import {
  CheckIcon,
  CheckCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import defaultAvatar from "../../../assets/default.png";
import { formatTimestamp } from "../../../services/formatTimestamp.js";
import { TypographyStylesProvider } from "@mantine/core";
import DOMPurify from "dompurify";

const MessageItem = ({
  currentUser,
  is_group,
  otherUserAvatar,
  message,
  isLastMessage,
  showAvatar,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isOwn = message?.sender?.id === currentUser.id;

  const toggleActions = () => {
    setShowActions((prev) => !prev);
  };

  return (
    <div
      className={`flex w-full transition-all duration-200 ${
        isOwn ? "justify-end" : "justify-start"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowActions(false);
      }}
    >
      {/* Other user avatar */}
      {!isOwn && showAvatar && (
        <div
          className="flex-shrink-0 self-end"
          style={{ marginRight: 8 /* 8px */ }}
        >
          <img
            src={
              is_group
                ? message?.sender?.avatar || defaultAvatar
                : otherUserAvatar || defaultAvatar
            }
            alt="avatar"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "2px solid white",
              backgroundColor: "#f3f4f6",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Spacer when no avatar */}
      {!isOwn && !showAvatar && (
        <div style={{ width: 32, marginRight: 8 }}></div>
      )}

      {/* Message content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "75%",
          maxWidth: window.innerWidth >= 768 ? "60%" : "75%",
          alignItems: isOwn ? "flex-end" : "flex-start",
        }}
      >
        {/* Timestamp */}
        <div
          style={{
            marginBottom: 4,
            fontSize: 12,
            color: "#9ca3af",
            opacity: isHovered ? 1 : 0.6,
            textAlign: isOwn ? "right" : "left",
            transition: "opacity 0.2s",
          }}
        >
          {formatTimestamp(message?.created_at)}
        </div>

        {/* Message bubble */}
        <div style={{ position: "relative" }} className="group/message">
          <div
            style={{
              position: "relative",
              padding: "10px 12px",
              borderRadius: 20,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              fontSize: 14,
              lineHeight: 1.4,
              wordBreak: "break-word",
              background: isOwn
                ? "linear-gradient(135deg, #01AA85, #00968A)"
                : "#ffffff",
              color: isOwn ? "white" : "#374151",
              borderBottomRightRadius: isOwn ? 6 : 20,
              borderBottomLeftRadius: isOwn ? 20 : 6,
              border: isOwn ? "none" : "1px solid #e5e7eb",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            className={
              isOwn ? "hover:shadow-lg hover:scale-[1.02]" : "hover:shadow-md"
            }
          >
            {/* Group sender name */}
            {is_group && !isOwn && (
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#01AA85",
                  marginBottom: 4,
                  opacity: 0.8,
                }}
              >
                {message?.sender?.name}
              </div>
            )}

            {/* Message content with markdown support */}
            <TypographyStylesProvider>
              <div
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  color: isOwn ? "white" : "#374151",
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(message?.message || ""),
                }}
              />
            </TypographyStylesProvider>

            {/* Message status indicators for own messages */}
            {isOwn && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 6,
                  gap: 4,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 12,
                  alignItems: "center",
                }}
              >
                <span>{formatTimestamp(message?.created_at)}</span>
                {message?.status === "sent" && (
                  <CheckIcon style={{ width: 16, height: 16, opacity: 0.75 }} />
                )}
                {message?.status === "delivered" && (
                  <div style={{ display: "flex", marginLeft: -4 }}>
                    <CheckIcon
                      style={{ width: 16, height: 16, opacity: 0.75 }}
                    />
                    <CheckIcon
                      style={{ width: 16, height: 16, opacity: 0.75 }}
                    />
                  </div>
                )}
                {message?.status === "read" && (
                  <CheckCircleIcon
                    style={{ width: 16, height: 16, color: "#93c5fd" }}
                  />
                )}
              </div>
            )}
          </div>

          {/* Message actions (appears on hover) */}
          {isHovered && (
            <div
              style={{
                position: "absolute",
                top: 0,
                [isOwn ? "left" : "right"]: -40,
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              className="group-hover:opacity-100"
            >
              <button
                onClick={toggleActions}
                style={{
                  padding: 4,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",
                }}
                aria-label="Message actions"
              >
                <EllipsisVerticalIcon
                  style={{ width: 16, height: 16, color: "#6b7280" }}
                />
              </button>
            </div>
          )}

          {/* Actions dropdown */}
          {showActions && (
            <div
              style={{
                position: "absolute",
                top: 32,
                [isOwn ? "left" : "right"]: -80,
                backgroundColor: "white",
                borderRadius: 8,
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                border: "1px solid #e5e7eb",
                padding: "6px 0",
                zIndex: 10,
                minWidth: 120,
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "6px 12px",
                  textAlign: "left",
                  fontSize: 14,
                  color: "#374151",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // handle reply
                  setShowActions(false);
                }}
                onMouseDown={(e) => e.preventDefault()}
                onBlur={() => setShowActions(false)}
              >
                Reply
              </button>
              <button
                style={{
                  width: "100%",
                  padding: "6px 12px",
                  textAlign: "left",
                  fontSize: 14,
                  color: "#374151",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // handle copy
                  setShowActions(false);
                }}
                onMouseDown={(e) => e.preventDefault()}
                onBlur={() => setShowActions(false)}
              >
                Copy
              </button>
              {isOwn && (
                <>
                  <button
                    style={{
                      width: "100%",
                      padding: "6px 12px",
                      textAlign: "left",
                      fontSize: 14,
                      color: "#374151",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // handle edit
                      setShowActions(false);
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    onBlur={() => setShowActions(false)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      width: "100%",
                      padding: "6px 12px",
                      textAlign: "left",
                      fontSize: 14,
                      color: "#dc2626",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // handle delete
                      setShowActions(false);
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    onBlur={() => setShowActions(false)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Own user avatar */}
      {isOwn && showAvatar && (
        <div
          className="flex-shrink-0 self-end"
          style={{ marginLeft: 8 /* 8px */ }}
        >
          <img
            src={currentUser.avatar || defaultAvatar}
            alt="avatar"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "2px solid #01AA85",
              backgroundColor: "#f3f4f6",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Spacer when no avatar */}
      {isOwn && !showAvatar && <div style={{ width: 32, marginLeft: 8 }}></div>}
    </div>
  );
};

export default MessageItem;
