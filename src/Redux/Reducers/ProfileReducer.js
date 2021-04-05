const ADD_POST = 'ADD_POST';
const UPDATE_TEXT = 'UPDATE_TEXT';

let initialState =  {
    posts: [
        {id: 1, post: 'Hi', likesCount: 100},
        {id: 2, post: 'How are you?', likesCount: 101}
    ],
    textInTextarea:'Eduard Bondarchuk'
};


const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 3,
                post: state.textInTextarea,
                likesCount: 0
            }
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost);
            copyState.textInTextarea = '';
            return copyState;
        }
        case UPDATE_TEXT:{
            let copyState = {...state}
            copyState.textInTextarea = action.newText;
            return copyState;
        }
        default:
            return state;
    }
}

export default profileReducer;