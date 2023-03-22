import { Routes, Route, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
  let navigate = useNavigate();
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
    const create = async () => {
      const res = await ContactsAPI.create(contact);
      setContacts(contacts.concat(res));
    }

    create();
    navigate("/");
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
