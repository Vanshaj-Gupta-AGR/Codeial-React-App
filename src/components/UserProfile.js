import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserProfile } from '../actions/profile';
import { connect } from 'react-redux';
import { useCallback } from 'react';
import profile from '../reducers/profile';
import { APIUrls } from '../helpers/url';
import { gettoken } from '../helpers/utils';
import {addFriend} from '../actions/friends';
import {removeFriend} from '../actions/friends'


function UserProfile(props) {
  let id= useParams().userId;
  useEffect(() => {
    if(id){
      props.dispatch(fetchUserProfile(id))
    }

    },[id])
    const handleAddFreind=useCallback(async ()=>{
            const url=APIUrls.addFriend(id);
            const options={
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':  `Bearer ${gettoken()}`
              },
            };
            const response=await fetch(url,options);
            const data=await response.json();
            if(data.success){
              console.log("data",data);
              props.dispatch(addFriend(data.data.friendship));
              return ;
            };

         
            
    },[props.friends])
    const handleRemoveFriend=useCallback(async ()=>{
      const url=APIUrls.removeFriend(id);
      const options={
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization':  `Bearer ${gettoken()}`
        },
      };
      const response=await fetch(url,options);
      const data=await response.json();
      if(data.success){
        console.log("data",data);
        props.dispatch(removeFriend(id));
        return ;
      };

   
      
},[props.friends])

const change=useCallback(()=>{
  console.log("friends",props.friends)
  return props.friends.map((friend)=>friend.to_user._id).indexOf(id)===-1 ? false : true
})

  const user=props.profile.user
    console.log("inprogress",props.profile.inProgress)
    if(props.profile.inProgress){
      return <h1>Loading</h1>
    }

   console.log("again friends",props.friends);

  const isUserFriend=change()
 
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
          {!isUserFriend ? <button className="button save-btn" onClick={handleAddFreind}>Add Friend</button> : <button className="button save-btn" onClick={handleRemoveFriend}>Remove Friend</button> }
          
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