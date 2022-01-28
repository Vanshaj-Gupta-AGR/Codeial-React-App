import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import {logoutUser} from '../actions/auth'
import { searchUsers } from '../actions/search';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };
  handleSearch=(e)=>{
      const searchText=e.target.value;
      this.props.dispatch(searchUsers(searchText));
  }
  render() {
    const { auth ,results} = this.props;
    return (
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
            src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1642942955~hmac=c6bdb9db77bb155a5c7ed223c0c03cca"
            alt="search-icon"
          />
          <input placeholder="Search" onChange={this.handleSearch} />
          {results.length>0 && (
          <div className="search-results">
            <ul>
              {results.map(user=> (
                
              <li className="search-results-row" key={user._id}>
                <Link to={`/user/${user._id}`}>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1642789708~hmac=9a5243186d82684597d45522743523f7"
                  alt="user-pic"
              />
                <span>{user.name}</span>
                </Link>
              </li>))}
             
            </ul>
          </div>)}

        </div>
        <div className="right-nav">
          {auth.isLoggedin && (
            <div className="user">
              <Link to='/settings'>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="user-dp"
                id="user-dp"
              />
              </Link>
              <span>{auth.user.name}</span>
            </div>
          )}

          <div className="nav-links">
            <ul>
              {!auth.isLoggedin && (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}

              {auth.isLoggedin && <li onClick={this.logOut}>Log out</li>}

              {!auth.isLoggedin && (
                <li>
                  <Link to="/register">Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    results: state.search.results
  };
}
export default connect(mapStateToProps)(Navbar);
