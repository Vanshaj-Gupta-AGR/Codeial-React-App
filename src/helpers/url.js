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
    },
    createPost: ()=>{
       return 'http://codeial.codingninjas.com:8000/api/v2/posts/create'
    },
    createComment: () => {
        return   'http://codeial.codingninjas.com:8000/api/v2/comments/'
    },
    toggleLike: (id,likeType)=>{
        return `http://codeial.codingninjas.com:8000/api/v2/likes/toggle?likeable_id=${id}&likeable_type=${likeType}`
    },
    userSearch: (searchText) =>{
        return   `http://codeial.codingninjas.com:8000/api/v2/users/search?text=${searchText}`
    }


    }
