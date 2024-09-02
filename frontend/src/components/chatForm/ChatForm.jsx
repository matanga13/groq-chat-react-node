/* eslint-disable react/prop-types */
const ChatForm = ({ message, setMessage, onSubmit }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        name="message"
        value={message}
        placeholder="Type a message and hit enter..."
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default ChatForm;
