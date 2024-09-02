// PreviousChats.jsx
import React from "react";

function PreviousChats({ onSelectChat, allChats }) {
  return (
    <div>
      <h2>Conversaciones Anteriores</h2>
      <ul>
        {allChats.map((chat, index) => (
          <li key={index} onClick={() => onSelectChat(chat)}>
            Conversación {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousChats;
