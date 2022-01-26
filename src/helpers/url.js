export const APIUrls={
    login: ()=>{
        return 'http://codeial.codingninjas.com:8000/api/v2/users/login'
    },
    signup: ()=>{
        return 'http://codeial.codingninjas.com:8000/api/v2/users/signup'
    },
    fetchPosts:()=>{

        return 'http://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=25'
    },
    editProfile: ()=>{
        return 'http://codeial.codingninjas.com:8000/api/v2/users/edit'
    },
    userProfile: (userId)=>{
        return `http://codeial.codingninjas.com:8000/api/v2/users/${userId}`
    },
    userFriends: ()=>{
        return 'http://codeial.codingninjas.com:8000/api/v2/friendship/fetch_user_friends'
    },
    addFriend: (userId)=>{
        return `http://codeial.codingninjas.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`
    },
    removeFriend: (userId)=>{
        return `http://codeial.codingninjas.com:8000/api/v2/friendship/remove_friendship?user_id=${userId}`
    }

    }
