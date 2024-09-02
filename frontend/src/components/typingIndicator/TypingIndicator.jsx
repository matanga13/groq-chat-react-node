/* eslint-disable react/prop-types */

const TypingIndicator = ({ isTyping }) => {
  return (
    <div className={isTyping ? "" : "hide"}>
      <p>
        <i> {isTyping ? "Typing" : ""}</i>
      </p>
    </div>
  );
};

export default TypingIndicator;
