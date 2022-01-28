import { FETCH_SEARCH_RESULTS_SUCCESS } from "./actionTypes";
import { APIUrls } from "../helpers/url";
import { gettoken } from "../helpers/utils";

export function searchResultSuccess(users){
    return {
        type: FETCH_SEARCH_RESULTS_SUCCESS,
        users
    }
}

export function searchUsers(searchText){
    return (dispatch)=>{
        const url=APIUrls.userSearch(searchText);
        console.log(url)
        fetch(url, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization':  `Bearer ${gettoken()}`
          },
         
        })
        .then(response=>response.json())
        .then((data)=>{
          console.log('Search data',data);

          if(data.success){
            dispatch(searchResultSuccess(data.data.users))
          
          
          return ;
        }
        dispatch(searchResultSuccess([]));

          
        })
    }
}