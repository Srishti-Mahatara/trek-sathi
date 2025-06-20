// import { useEffect, useState } from "react";

// function ChatWindow({ selectedChat }) {
//   const [message, setMessage] = useState([]);

//   useEffect(() => {
//     if (selectedChat){
//       setMessage([
//         {
//           id: 1,
//           text: "Hello",
//           sender: "Alice",
//         },
//         {
//           id: 2,
//           text: "Hi!",
//           sender: "You",
//         },
//       ],[selectedChat]);
//     }
//   });
//   return <div>chatwindow</div>;
// }

// export default ChatWindow;

import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { useState, useEffect } from "react";

const ChatWindow = ({ selectedChat }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (selectedChat) {
            setMessages([
                { id: 1, text: "Hello", sender: "Alice" },
                { id: 2, text: "Hi!", sender: "You" },
            ]);
        }
    }, [selectedChat]);

    const handleSend = (text) => {
        const newMessage = { id: Date.now(), text, sender: "You" };
        setMessages((prev) => [...prev, newMessage]);
    };

    if (!selectedChat) {
        return <div className="p-4">Select a chat to start messaging.</div>;
    }

    return (
        <div className="flex flex-col sm:h-[94vh] border-2 border-black">
            <div className="p-sm border-b font-bold bg-white"> {selectedChat.name}</div>
            <div className="flex-1 overflow-y-auto p-sm space-y-xs">
                {messages.map((msg) => (
                    <MessageBubble
                        key={msg.id}
                        text={msg.text}
                        isOwn={msg.sender === "You"}
                    />
                ))}
            </div>
            <MessageInput onSend={handleSend} />
        </div>
    );
};

export default ChatWindow;
