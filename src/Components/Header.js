import React from 'react';

const Header=()=>(
    <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="#">Home</a></li>
             <li><a href="#">Products</a></li>
             <li><a href="#">Favorite</a></li>
             <li><a href="#">Cart</a></li>
          </ul>
        </div>
      </nav>
)

export default Header;