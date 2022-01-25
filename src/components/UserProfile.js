import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserProfile } from '../actions/profile';
import { connect } from 'react-redux';
import profile from '../reducers/profile';



function UserProfile(props) {
  let id= useParams().userId;
  useEffect(() => {
    if(id){
      props.dispatch(fetchUserProfile(id))
    }

    },["hello"])

  const user=props.profile.user
    console.log(props.profile.inProgress)
    if(props.profile.inProgress){
      return <h1>Loading</h1>
    }

  const isUserFriend=props.friends.map((friend)=>friend.to_user._id).indexOf(id)===-1 ? false : true
 
  return (
    <div>
      <div className="settings">
        <div className="img-container">
          <img
           src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
           alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          {!isUserFriend ? <button className="button save-btn">Add Friend</button> : <button className="button save-btn">Remove Friend</button> }
          
        </div>
      </div>
      </div>
      )
    
  
    
  
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    friends: state.friends
  };
}
export default connect(mapStateToProps)(UserProfile)