import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleBg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
    </div>
  );
}

export default Header