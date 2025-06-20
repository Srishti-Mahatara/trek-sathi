import { useState, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Popover } from "@headlessui/react";
import EmojiPicker from "emoji-picker-react";

const MessageInput = ({ selectedChat, currentUser, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const input = useRef();

  const onInputKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const onChangeEvent = (e) => {
    setNewMessage(e.target.value);
    setTimeout(() => {
      adjustHeight();
    }, 10);
  };

  const adjustHeight = () => {
    setTimeout(() => {
      if (input.current) {
        input.current.style.height = "auto";
        input.current.style.height = input.current.scrollHeight + 2 + "px";
      }
    }, 100);
  };

  const onSend = () => {
    if (isSending) return;
    if (!newMessage.trim()) return;
    setIsSending(true);
    if (onSendMessage) {
      onSendMessage(selectedChat, newMessage);
    }
    setNewMessage("");
    setIsSending(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e2e8f0",
        padding: "12px 16px",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      <Popover className="relative" style={{ marginRight: 12 }}>
        <Popover.Button
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            height: 40,
            width: 40,
            color: "#4B5563", // gray-600
            backgroundColor: "transparent",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
            border: "none",
            padding: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f3f4f6")
          } // gray-100 hover
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
          title="Emoji picker"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ height: 24, width: 24 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Popover.Button>
        <Popover.Panel
          style={{
            position: "absolute",
            zIndex: 1000,
            bottom: "calc(100% + 8px)",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <EmojiPicker
            onEmojiClick={(e) => setNewMessage((msg) => msg + e.emoji)}
            width={380}
            height={420}
          />
        </Popover.Panel>
      </Popover>

      <textarea
        ref={input}
        value={newMessage}
        rows={1}
        placeholder="Write your message!"
        onKeyDown={onInputKeyDown}
        onChange={onChangeEvent}
        disabled={isSending}
        style={{
          flexGrow: 1,
          resize: "none",
          maxHeight: 128,
          minHeight: 36,
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid #e2e8f0",
          backgroundColor: "#f7fafc",
          color: "#374151",
          fontSize: 14,
          lineHeight: 1.4,
          outline: "none",
          marginRight: 12,
          overflowY: "auto",
          transition: "border-color 0.3s ease",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#01AA85")}
        onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
      />

      <button
        onClick={onSend}
        type="button"
        disabled={isSending}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          height: 48,
          width: 48,
          backgroundColor: isSending ? "#018f6b" : "#01AA85",
          border: "none",
          cursor: isSending ? "not-allowed" : "pointer",
          transition: "background-color 0.3s ease",
          boxShadow: "0 3px 8px rgba(1, 170, 133, 0.4)",
        }}
        onMouseEnter={(e) => {
          if (!isSending) e.currentTarget.style.backgroundColor = "#018f6b";
        }}
        onMouseLeave={(e) => {
          if (!isSending) e.currentTarget.style.backgroundColor = "#01AA85";
        }}
        title="Send message"
      >
        <PaperAirplaneIcon
          style={{
            height: 24,
            width: 24,
            transform: "rotate(45deg)",
            color: "#fff",
          }}
        />
      </button>
    </div>
  );
};

export default MessageInput;
