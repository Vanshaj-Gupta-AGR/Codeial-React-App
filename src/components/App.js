import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Home from './Home';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Page404 from './Page404';
import Login from './Login';

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
       {/* <Route path="/signup" element={signup()}/>  */}
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
