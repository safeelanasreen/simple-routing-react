import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
<Link to="/" >
      hOME</Link>
      <Link to="/Contact" >
      CONTACT</Link>
    </div>
  )
}

export default Header
