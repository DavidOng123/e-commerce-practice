import React from 'react';
import {Link} from 'react-router-dom'

const Header=()=>(
    <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/product">Product</Link></li>
             <li><Link to="/">Favorite</Link></li>
             <li><Link to="/">Cart</Link></li>
          </ul>
        </div>
      </nav>
)

export default Header;