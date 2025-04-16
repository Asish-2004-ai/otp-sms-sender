import React, { useEffect, useState } from "react";

function MessageHistory() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleDelete = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);

    localStorage.setItem("messages", JSON.stringify(updatedMessages));

    setMessages(updatedMessages);
  };

  return (
    <div>
      <h2>Sent Messages</h2>
      {messages.length === 0 ? (
        <p>No messages sent yet!</p>
      ) : (
        <ul>
        {messages.map((msg, index) => (
          <div className="message-item" key={index}>
            <li>
              <strong>To:</strong> {msg.to} |{" "}
              <strong>Phone:</strong> {msg.phone} <br />
              <strong>Message:</strong> {msg.message} <br />
              <strong>Time:</strong> {msg.time}
              <hr />
            </li>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
      
      )}
    </div>
  );
}

export default MessageHistory;
