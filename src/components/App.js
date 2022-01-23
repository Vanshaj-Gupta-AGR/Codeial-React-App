import React from 'react';
import jwt_decode from 'jwt-decode'
import { connect } from 'react-redux';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import {authenticateUser} from '../actions/auth'

import Home from './Home';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Page404 from './Page404';
import Login from './Login';
import Signup from './Signup';


// const login=()=>{
//   <div>Login</div>
// }
// const signup=()=>{
//   <div>signup</div>
// }
// const home=()=>{
//   <div>home</div>
// }

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');
    console.log(jwt_decode(token))

    // if (token) {
    //   const user = jwtDecode(token);

    //   console.log('user', user);
    //   this.props.dispatch(
    //     authenticateUser({
    //       email: user.email,
    //       _id: user._id,
    //       name: user.name,
    //     })
    //   );
    // }
  }

  

  render() {
    const {posts}=this.props;

    console.log('PROPS', this.props.posts);
    return (
      <Router>
      <div>
        <Navbar />
       {/* <PostsList posts={posts} /> */}
       {/* <ul>
         <li>
           <Link to="/">Home</Link>

         </li>
         <li>
           <Link to="/login">Login</Link>
           
         </li>
         <li>
           <Link to="/signup">Signup</Link>
           
         </li>
       </ul> */}
      <Routes>
       <Route exact path="/" element={<Home posts={posts}/>}/>
        <Route  path="/login" element={<Login />}/>
        
       <Route path="/register" element={<Signup />}/> 
     <Route
      path="*"
      element={
        <Page404 />
      }
    />
  
       </Routes>
    </div>
    </Router>
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
