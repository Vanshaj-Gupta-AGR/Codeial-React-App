import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className="nav">
          <div className="left-div">
              <Link to="/">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
            </Link>
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1642789634~hmac=8d74f48dbb3a74418624cbef414f53c9"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1642789708~hmac=9a5243186d82684597d45522743523f7"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
              <li>
             <Link to="/login">Log in</Link>

                </li>
                <li>
                <Link to="/logout">Log out</Link>
                
                </li>
                <li>
                <Link to="/register">Register</Link>
                
                </li>
              </ul>
            </div>
          </div>
        </nav>
            
        </div>
    );
}

export default Navbar;