/* eslint-disable react/prop-types */
import ChatMessage from "../chatMessage/ChatMessage";

const ChatList = ({ chats }) => {
  return (
    <section>
      {chats && chats.length
        ? chats.map((chat, index) => <ChatMessage key={index} chat={chat} />)
        : ""}
    </section>
  );
};

export default ChatList;
