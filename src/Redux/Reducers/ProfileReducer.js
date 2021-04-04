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
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.textInTextarea,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.textInTextarea = '';

        case UPDATE_TEXT:
            state.textInTextarea = action.newText;

        default:
            return state;
    }
}

export default profileReducer;