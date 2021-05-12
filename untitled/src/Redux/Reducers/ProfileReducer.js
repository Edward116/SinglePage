import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, post: 'Hi', likesCount: 100},
        {id: 2, post: 'How are you?', likesCount: 101}
    ],
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    let copyState = {...state}

    switch (action.type) {
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

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        default:
            return state;
    }
}
// Actions
export const addPost = (newPost) => ({type: ADD_POST, newPost})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setProfile = (data) => ({type: SET_PROFILE, data})
export const setStatus = (status) => ({type: SET_STATUS, status})

// Thunks
export const getProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer;

