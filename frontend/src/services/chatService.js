export const sendMessage = async (message, chats, setChats, setIsTyping) => {
  if (!message) return;

  setIsTyping(true);
  scrollToBottom();

  const newChat = createChat("user", message);
  const updatedChats = [...chats, newChat];
  setChats(updatedChats);

  try {
    const chatsWithoutTimestamp = removeTimestamp(updatedChats);
    const response = await sendChatsToServer(chatsWithoutTimestamp);
    const data = await response.json();
    const outputChat = data.output;
    updatedChats.push(outputChat);
    setChats(updatedChats);
    setIsTyping(false);
  } catch (error) {
    console.error("Error sending message:", error);
    setIsTyping(false);
  }
};

const removeTimestamp = (chats) => {
  return chats.map(chat => {
    const { timestamp, ...rest } = chat;
    return rest;
  });
};

const scrollToBottom = () => {
  window.scrollTo(0, 1e10);
};

const createChat = (role, content) => {
  return { role, content, timestamp: new Date().toISOString()};
};

const sendChatsToServer = async (chats) => {
  const response = await fetch("http://localhost:8000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chats }),
  });
  return response;
};
