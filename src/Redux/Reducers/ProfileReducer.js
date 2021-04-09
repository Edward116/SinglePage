const ADD_POST = 'ADD_POST';
const UPDATE_TEXT = 'UPDATE_TEXT';
const SET_PROFILE = 'SET_PROFILE';


let initialState =  {
    posts: [
        {id: 1, post: 'Hi', likesCount: 100},
        {id: 2, post: 'How are you?', likesCount: 101}
    ],
    textInTextarea:'Eduard Bondarchuk',
    profile: null
};


const profileReducer = (state = initialState, action) => {
    let copyState = {...state}

    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.textInTextarea,
                likesCount: 0
            }

            copyState.posts = [...state.posts]
            copyState.posts.push(newPost);
            copyState.textInTextarea = '';
            return copyState;

        case UPDATE_TEXT:

            copyState.textInTextarea = action.newText;
            return copyState;

        case SET_PROFILE:
            return {...state, profile: action.data}

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextActionCreator = (text) =>
    ({type: UPDATE_TEXT, newText: text})
export const setProfile = (data) => ({type: SET_PROFILE, data})
export default profileReducer;