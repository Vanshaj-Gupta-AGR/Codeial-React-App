import { APIUrls } from '../helpers/url';
import { UPDATE_POSTS } from './actionTypes';

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
        dispatch(updatePosts(data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
