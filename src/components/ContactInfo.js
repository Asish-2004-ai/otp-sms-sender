import React from "react";
import { useParams, Link } from "react-router-dom";
import contactsData from "../data/contacts.json";

function ContactInfo() {
  const { id } = useParams();
  const contact = contactsData.find((contact) => contact.id === parseInt(id));

  if (!contact) {
    return <p>Contact not found!</p>;
  }

  return (
    <div>
      <h2>Contact Info</h2>
      <p><strong>Name:</strong> {contact.firstName} {contact.lastName}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <Link to={`/send/${contact.id}`}>
        <button>Send Message</button>
      </Link>
    </div>
  );
}

export default ContactInfo
