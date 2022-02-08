import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

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
              src="http://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search" onChange={this.handleSearch} />
          {results.length>0 && (
          <div className="search-results">
            <ul>
              {results.map(user=> (
                
              <li className="search-results-row" key={user._id}>
                <Link to={`/user/${user._id}`}>
                <img
           src="http://cdn-icons-png.flaticon.com/512/3135/3135715.png"
           alt="user-dp"
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
                src="http://cdn-icons-png.flaticon.com/512/3135/3135715.png"
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
