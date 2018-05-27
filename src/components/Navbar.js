import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <Link className="navbar-item" to="/about">
      About
    </Link>
  </nav>
);

export default Navbar;
