import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All fields are mandatory');
      return;
    }
    props.handleAddContact({ name: name, email: email });
    setName('');
    setEmail('');
    history('/');
  };

  return (
    <div>
      <div className='ui main container'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={handleSubmit}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='email'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='ui button blue' style={{ marginTop: '1rem' }}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
