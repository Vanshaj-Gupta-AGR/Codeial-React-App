export const APIUrls={
    login: ()=>{
        return 'https://codeial.codingninjas.com:8000/api/v2/users/login'
    },
    signup: ()=>{
        return 'https://codeial.codingninjas.com:8000/api/v2/users/signup'
    },
    fetchPosts:()=>{

        return 'https://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=25'
    },
    editProfile: ()=>{
        return 'https://codeial.codingninjas.com:8000/api/v2/users/edit'
    },
    userProfile: (userId)=>{
        return `https://codeial.codingninjas.com:8000/api/v2/users/${userId}`
    },
    userFriends: ()=>{
        return 'https://codeial.codingninjas.com:8000/api/v2/friendship/fetch_user_friends'
    },
    addFriend: (userId)=>{
        return `https://codeial.codingninjas.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`
    },
    removeFriend: (userId)=>{
        return `https://codeial.codingninjas.com:8000/api/v2/friendship/remove_friendship?user_id=${userId}`
    },
    createPost: ()=>{
       return 'https://codeial.codingninjas.com:8000/api/v2/posts/create'
    },
    createComment: () => {
        return   'https://codeial.codingninjas.com:8000/api/v2/comments/'
    },
    toggleLike: (id,likeType)=>{
        return `https://codeial.codingninjas.com:8000/api/v2/likes/toggle?likeable_id=${id}&likeable_type=${likeType}`
    },
    userSearch: (searchText) =>{
        return   `https://codeial.codingninjas.com:8000/api/v2/users/search?text=${searchText}`
    }


    }
