import React from 'react';

const Navbar = () => {
  return (
    <div className="nav">
      <img src="logo.png" alt="" height="20px" width="30px" />
      <h1 className="h">Blockchainers Home</h1>
      <a href="#" className="nav-link">Platform</a>
      <a href="#" className="nav-link">Customers</a>
      <a href="#" className="nav-link">Resources</a>
      <a href="#" className="nav-link">Pricing</a>
      <a href="#" className="nav-link">About Us</a>
      <a href="#" className="nav-link">Sign In</a>
      <input type="submit" value="Ask Access" className="nav-btn" id="grantAccessBtn" />
    </div>
  );
};

export default Navbar;
