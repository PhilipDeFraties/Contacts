import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      const response = await ContactsAPI.getAll();
      setContacts(response);
    };

    getContacts();
  }, [])

  const removeContact = (contact) => {
    ContactsAPI.remove(contact)
    setContacts(contacts.filter(c => c.id !== contact.id));
  };

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
    </div>
  )
};

export default App;
