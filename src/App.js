import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactInfo from "./components/ContactInfo";
import SendMessage from "./components/NewMessage";
import MessageHistory from "./components/MessageHistory";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <h1>Contact Messaging App</h1>
        <nav>
          <Link to="/">Contact List</Link> |{" "}
          <Link to="/messages">Messages Sent</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactInfo />} />
          <Route path="/send/:id" element={<SendMessage />} />
          <Route path="/messages" element={<MessageHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
