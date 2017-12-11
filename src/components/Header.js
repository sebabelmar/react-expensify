import React from 'react';
import logo from '../../public/images/hipcamp-logo.png'

const Header = (props) => (
  <div className='container'>
    <div className='header'>
      <img
        className='header--logo'
        src={logo}
      />
      <h3 className='header--title'>Campsite Features</h3>
    </div>
  </div>
)

export default Header;
