import React, { useState, useEffect } from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetail from './ContactDetail';
import { v4 as uuid } from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

const App = () => {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
    console.log(contacts);
  };

  const handleRemoveContact = (id) => {
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Router className=''>
      <Header />
      <Routes>
        <Route
          path='/contact/:id'
          element={<ContactDetail contacts={contacts} />}
        ></Route>
        <Route
          exact
          strict
          path='/add'
          element={<AddContact handleAddContact={handleAddContact} />}
        ></Route>
        <Route
          exact
          strict
          path='/'
          element={
            <ContactList
              contacts={contacts}
              handleRemoveContact={handleRemoveContact}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
