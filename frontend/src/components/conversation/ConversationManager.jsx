// components/conversation/ConversationManager.jsx
import { useState, useEffect } from "react";
import { sendMessage } from "../../services/chatService";
import { getAllChats, saveAllChats } from "../../services/storageService";

const useConversationManager = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  //const [allChats, setAllChats] = useState([]);
 const [allChats, setAllChats] = useState(getAllChats || []);


  useEffect(() => {
    saveAllChats(allChats);
  }, [allChats]);

  const chat = async (e) => {
    e.preventDefault();
    await sendMessage(message, chats, setChats, setIsTyping);
    setMessage("");
  };

  const saveCurrentConversation = () => {
    console.log("chats", chats);  
    console.log("allChats", allChats);
    if (chats.length > 0) {
      const updatedAllChats = Array.isArray(allChats) ? [...allChats, chats] : [chats];
      setAllChats(updatedAllChats);
      saveAllChats(updatedAllChats);
    }
  };

  const startNewConversation = () => {
    saveCurrentConversation();
    setChats([]);
    setMessage("");
    setIsTyping(false);
  };

  const handleSelectChat = (selectedChat) => {
    setChats(selectedChat);
  };

  return {
    message,
    setMessage,
    chats,
    isTyping,
    chat,
    startNewConversation,
    handleSelectChat,
    allChats,
  };
};

export default useConversationManager;
