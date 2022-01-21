import React from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const {posts}=this.props;

    console.log('PROPS', this.props.posts);
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
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
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
       <PostsList posts={posts} />
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
