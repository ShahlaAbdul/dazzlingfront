import React from 'react';
import "./navbar.scss"
function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className='dazzling_logo'>
          <h1>Dazzling Demo</h1>
        </div>

        <ul>
          <li>Home</li>
          <li>Galerry</li>
          <li>ShortCodes</li>
          <li>About</li>
          <li>Languages</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
