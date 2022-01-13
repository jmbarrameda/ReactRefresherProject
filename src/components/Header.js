import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='ui pointing menu'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active item' : 'inactive item'
          }
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active item' : 'inactive item'
          }
          to='/add'
        >
          Add Contact
        </NavLink>
        <div className='right menu'>
          <div className='item'>
            <div className='ui transparent icon input'>
              <input type='text' placeholder='Search...' />
              <i className='search link icon'></i>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // marginTop: '2rem',
          // border: 'red 1px solid',
          height: '1.5vh',
          width: '100%',
          // backgroundColor: 'blue',
        }}
      ></div>
      {/* <div className='ui menu'>
        <div className='ui container center'>
          <h2 className='ui center aligned container'>Contact Manager</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
