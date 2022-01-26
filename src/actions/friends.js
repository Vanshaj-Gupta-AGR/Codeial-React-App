import { APIUrls } from '../helpers/url';
import { gettoken } from '../helpers/utils';
import { FETCH_FRIENDS_SUCCESS } from './actionTypes';
import { ADD_FRIEND } from './actionTypes';
import { REMOVE_FRIEND } from './actionTypes';
export function fetchUserFriends(userId) {
  return (dispatch) => {
    const url = APIUrls.userFriends(userId);
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${gettoken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        dispatch(fetchFriendsSucces(data.data.friends));
      });
  };
}

export function fetchFriendsSucces(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    friends,
  };
}

export function addFriend(friend){
  return {
    type: ADD_FRIEND,
    friend
  }
}
export function removeFriend(userId) {
  return {
    type: REMOVE_FRIEND,
    userId,
  };
}

