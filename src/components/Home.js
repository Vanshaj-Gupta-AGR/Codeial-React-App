import React, { Component } from 'react';
import PostsList from './PostsList';

class Home extends Component {
    render() {
        return (
            <div className='home'>
           
                <PostsList posts={this.props.posts} />
            </div>
        );
    }
}

export default Home;