import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const contacts = JSON.parse(JSON.stringify(props.contacts));

  const renderContactList = contacts.map((c) => (
    <ContactCard
      key={c.id}
      contact={c}
      handleRemoveContact={props.handleRemoveContact}
    />
  ));

  return (
    <div className='ui main container'>
      <div className='ui grid middle aligned'>
        <h2 className>Contact List</h2>
        <Link to='/add'>
          <button className='ui button blue'>Add Contact</button>
        </Link>
      </div>

      <div className='ui celled list'>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
