
import { APIUrls } from '../helpers/url';
import { ADD_POST, UPDATE_POSTS, UPDATE_POST_LIKE } from './actionTypes';
import { getFormBody, gettoken } from '../helpers/utils';
import { ADD_COMMENT } from './actionTypes';
import { func } from 'prop-types';

export function fetchPosts() {
  return (dispatch) => {
    // const url = 'https://aqueous-cliffs-63191.herokuapp.com/api/v1/posts';
    const url=APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

export function addPost(post){
  return{
    type: ADD_POST,
    post
  }
}
export function createPost(content){
  return (dispatch)=>{
    const url=APIUrls.createPost();

    fetch(url,{
     method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':  `Bearer ${gettoken()}`
    },body:  getFormBody({content}),
  })
  .then(response=>response.json())
  .then(data=>{
    console.log("data",data);

    if(data.success){
      dispatch(addPost(data.data.post))
    }
  })
}
}
export function createComment(content, postId) {
  return (dispatch) => {
    const url = APIUrls.createComment();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${gettoken()}`,
      },
      body: getFormBody({ content, post_id: postId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(addComment(data.data.comment, postId));
        }
      });
  };
}

export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    comment,
    postId,
  };
}
export function addLikeToStore(id,likeType,userId){
    return (dispatch)=>{
      const url=APIUrls.toggleLike(id,likeType);
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${gettoken()}`,
        },
       
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data",data)
          if (data.success) {
            dispatch(addLike(id,userId));
          }
        });
    }
}

export function addLike(postId,userId){
  return {
    type:UPDATE_POST_LIKE,
    postId,
    userId
  }
}
