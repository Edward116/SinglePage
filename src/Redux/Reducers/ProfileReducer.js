import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState =  {
    posts: [
        {id: 1, post: 'Hi', likesCount: 100},
        {id: 2, post: 'How are you?', likesCount: 101}
    ],
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    let copyState = {...state}

    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.newPost,
                likesCount: 0
            }

            copyState.posts = [...state.posts]
            copyState.posts.push(newPost);
            copyState.textInTextarea = '';
            return copyState;


        case SET_PROFILE:
            return {...state, profile: action.data}

        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}
// Actions
export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost})

export const setProfile = (data) => ({type: SET_PROFILE, data})
export const setStatus = (status) => ({type: SET_STATUS, status})

// Thunks
export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setProfile(response.data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
            dispatch(setStatus(status))
            }
        })
}






export default profileReducer;

