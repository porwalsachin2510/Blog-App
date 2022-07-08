import React from 'react'
import "./topbar.css";
import { Link } from 'react-router-dom';

const Topbar = () => {
  const user = true;
  return (
    <div className="topbar">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="listItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="listItem">ABOUT</li>
          <li className="listItem">CONTACT</li>
          <li className="listItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="listItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/setting">
            <img
              className="topRightImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar