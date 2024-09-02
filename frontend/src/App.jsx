// App.jsx
import "./App.css";
import ChatList from "./components/chatList/ChatList";
import TypingIndicator from "./components/typingIndicator/TypingIndicator";
import ChatForm from "./components/chatForm/ChatForm";
import PreviousChats from "./components/previousChats/PreviousChats";
import useConversationManager from "./components/conversation/ConversationManager";

function App() {
  const {
    message,
    setMessage,
    chats,
    isTyping,
    chat,
    startNewConversation,
    handleSelectChat,
    allChats,
  } = useConversationManager();

  return (
    <main>
      <h1>Matanga GPT</h1>
      <button className="new-conversation" onClick={startNewConversation}>
        Nueva Conversacion
      </button>
      {allChats.length > 0 && (
        <PreviousChats onSelectChat={handleSelectChat} allChats={allChats} />
      )}
      <ChatList chats={chats} />
      <TypingIndicator isTyping={isTyping} />
      <ChatForm message={message} setMessage={setMessage} onSubmit={chat} />
    </main>
  );
}

export default App;
