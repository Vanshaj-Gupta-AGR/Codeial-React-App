import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  Comment  from './Comment';
import { createComment } from '../actions/posts';
import {addLikeToStore} from '../actions/posts'

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };
  }
  handleAddComment = (e) => {
    const { comment } = this.state;
    const { post } = this.props;

    if (e.key === 'Enter') {
      this.props.dispatch(createComment(comment, post._id));

      // clear comment
      this.setState({
        comment: '',
      });
    }
  };

  handleOnCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handlePostLike=()=>{
      const {post}=this.props;
      const {user}=this.props
      this.props.dispatch(addLikeToStore(post._id,'Post',user._id))
  }

  render() {
    const { post,user } = this.props;
    const { comment } = this.state;

    const ispostLiked=post.likes.includes(user._id);

    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/user/${post.user._id}`}>
            <img
           src="http://cdn-icons-png.flaticon.com/512/3135/3135715.png"
           alt="user-dp"
          />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <button className="post-like no-btn" onClick={this.handlePostLike}>
                {ispostLiked ?  <img
                src='http://cdn-icons-png.flaticon.com/512/833/833472.png'
                alt="likes-icon"
              /> :  <img
              src="http://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="likes-icon"
            /> }
             
              <span>{post.likes.length}</span>
            </button>

            <div className="post-comments-icon">
              <img
                src="http://cdn-icons.flaticon.com/png/512/1947/premium/1947247.png?token=exp=1643315183~hmac=bfefab863dda94f9fad603d88ad363e0"
                alt="comments-icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              onChange={this.handleOnCommentChange}
              onKeyPress={this.handleAddComment}
              value={comment}
            />
          </div>

          <div className="post-comments-list">
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} postId={post._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

function mapStateToProps({auth}){
    return {
        user:auth.user
    }
}

export default connect(mapStateToProps)(Post);
