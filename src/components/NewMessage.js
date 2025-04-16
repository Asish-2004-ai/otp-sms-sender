import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import contactsData from "../data/contacts.json";

function SendMessage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const contact = contactsData.find((contact) => contact.id === parseInt(id));

    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const randomOtp = Math.floor(100000 + Math.random() * 900000);
        setOtp(randomOtp);
        setMessage(`Hi. Your OTP is: ${randomOtp}`);
    }, []);

    const handleSend = () => {
        
        const newMessage = {
          to: `${contact.firstName} ${contact.lastName}`,
          phone: contact.phone,
          message,
          time: new Date().toLocaleString(),
        };
      
        const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];
      
        existingMessages.push(newMessage);
      
        localStorage.setItem("messages", JSON.stringify(existingMessages));
      
        navigate("/messages");
      };
      

    if (!contact) {
        return <p>Contact not found!</p>;
    }

    return (
        <div>
            <h2>Send Message</h2>
            <p><strong>To:</strong> {contact.firstName} {contact.lastName}</p>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                cols="50"
            />
            <br />
            <button onClick={handleSend}>Send Message</button>
        </div>
    );
}

export default SendMessage;
