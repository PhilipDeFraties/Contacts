import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
  const [contacts, setContacts] = useState([]);

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

  const createContact = (contact) => {
    const res = ContactsAPI.add(contact)
    setContacts(contacts.concat(res))
  }

  return (
    <Routes>
      <Route exact path="/" element={
         <ListContacts contacts={contacts} onDeleteContact={removeContact}/>
        }/>
      <Route path="/create" element={ <CreateContact onCreateContact={createContact}/> } />
    </Routes>
  )
};

export default App;
