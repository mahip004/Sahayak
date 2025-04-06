// App.js
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import "../css/Chat.css";

const socket = io("http://localhost:5000");

const getUserId = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem("userId", userId);
  }
  return userId;
};

const userId = getUserId();

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() === "") return;
    const msg = {
      text: input,
      senderId: userId,
      timestamp: new Date().toLocaleTimeString(),
    };
    socket.emit("chat message", msg);
    setInput("");
  };

  return (
    <div className="container">
      <h2>Chat Room</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-row ${
              msg.senderId === userId ? "sent" : "received"
            }`}
          >
            {msg.senderId !== userId && (
              <img
                src={`https://ui-avatars.com/api/?name=User`}
                alt="avatar"
                className="avatar"
              />
            )}
            <div
              className={`message ${
                msg.senderId === userId ? "my-message" : "other-message"
              }`}
            >
              {msg.text}
              <br />
              <span className="timestamp">{msg.timestamp}</span>
            </div>
            {msg.senderId === userId && (
              <img
                src={`https://ui-avatars.com/api/?name=Me`}
                alt="avatar"
                className="avatar"
              />
            )}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat; // ✅ Make sure this is at the end!
