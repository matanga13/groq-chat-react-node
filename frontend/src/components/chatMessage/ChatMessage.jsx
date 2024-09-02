/* eslint-disable react/prop-types */
import React from "react";

function formatText(text) {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}

const ChatMessage = ({ chat }) => {
  return (
    <p className='chat.row === "user" ? "user_msg" : ""'>
      <span>
        <b>{chat.role.toUpperCase()}</b>
      </span>
      <span>:</span>
      <span>{formatText(chat.content)}</span>
    </p>
  );
};

export default ChatMessage;
