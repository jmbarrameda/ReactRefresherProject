import React from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className='item'>
      <img className='ui avatar image' src={user} alt='user' />
      <div className='content'>
        <Link to={`/contact/${id}`}>
          <div className='header'>{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className='trash alternate outline icon red'
        style={{ paddingTop: '0.5rem' }}
        onClick={() => props.handleRemoveContact(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
