import React from 'react';
import user from '../images/user.png';
import { Link, useParams } from 'react-router-dom';

const ContactDetail = (props) => {
  const { id } = useParams();
  const { name, email } = props.contacts.find((c) => c.id === id);

  return (
    <div className='ui main' style={{ marginTop: '2rem' }}>
      <div className='ui card centered'>
        <div className='ui image'>
          <img src={user} alt='user' />
          <div className='ui content'>
            <div className='ui header'>{name}</div>
            <div className='ui description'>{email}</div>
          </div>
        </div>
      </div>
      <div className='ui center aligned container'>
        <Link to='/'>
          <button className='ui button blue'>Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
