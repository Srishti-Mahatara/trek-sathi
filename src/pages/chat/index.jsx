import { useState } from "react";
import ChatList from "../../components/modules/chat/ChatList.jsx";
import ChatWindow from "../../components/modules/chat/ChatWindow.jsx";
import ChatLayout from "../../layouts/ChatLayout.jsx";

function Chat() {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className="flex sm:h-[94vh]">
            <ChatLayout
                currentUser={1}
            />
        </div>
    );
}

export default Chat;
