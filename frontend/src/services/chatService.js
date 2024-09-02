export const sendMessage = async (message, chats, setChats, setIsTyping) => {
  if (!message) return;

  setIsTyping(true);
  scrollToBottom();

  const newChat = createChat("user", message);
  const updatedChats = [...chats, newChat];
  setChats(updatedChats);

  try {
    const response = await sendChatsToServer(updatedChats);
    const data = await response.json();
    const outputChat = data.output;
    updatedChats.push(outputChat);
    setChats(updatedChats);
    setIsTyping(false);
    scrollToBottom();
  } catch (error) {
    console.error(error);
  }
};

const scrollToBottom = () => {
  window.scrollTo(0, 1e10);
};

const createChat = (role, content) => {
  return { role, content };
};

const sendChatsToServer = async (chats) => {
  const response = await fetch("http://localhost:8000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chats }),
  });
  return response;
};
