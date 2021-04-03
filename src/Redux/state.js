const ADD_POST = 'ADD_POST';
const UPDATE_TEXT = 'UPDATE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi', likesCount: 100},
                {id: 2, post: 'How are you?', likesCount: 101}
            ],
            textInTextarea:'Eduard Bondarchuk'
        },
        dialogsPage: {
            messageData: [
                {message: 'Hi'},
                {message: 'How are you?'},
                {message: 'Whats wrong?'}
            ],
            friendsData: [
                {id: 1, name: 'Ed'},
                {id: 2, name: 'Ser'},
                {id: 3, name: 'Art'}
            ],
            dialogText: ''

        }


    },
    getState() {
      return this.state;
    },
    rerender() {
        console.log('hi')
    },

    subscribe(observer) {
        this.rerender = observer;
    },

    dispatch(action) {
        switch (action.type){
            case ADD_POST:
                let newPost = {
                    id: 3,
                    post: this.state.profilePage.textInTextarea,
                    likesCount: 0
                }
                this.state.profilePage.posts.push(newPost);
                this.state.profilePage.textInTextarea = '';
                this.rerender();
            case UPDATE_TEXT:
                this.state.profilePage.textInTextarea = action.newText;
                this.rerender();
            case ADD_MESSAGE:
                this.state.dialogsPage.messageData.push
                ({message: this.state.dialogsPage.dialogText})
                this.rerender();

            case UPDATE_MESSAGE_TEXT:
                this.state.dialogsPage.dialogText = action.newMessageText;
                this.rerender();
        }

        /*if(action.type === 'ADD_POST'){
            let newPost = {
                id: 3,
                post: this.state.profilePage.textInTextarea,
                likesCount: 0
            }
            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.textInTextarea = '';
            this.rerender();
        } else if (action.type === 'UPDATE_TEXT'){
            this.state.profilePage.textInTextarea = action.newText;
            this.rerender();
        }*/
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextActionCreator = (text) =>
    ({type: UPDATE_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateTextMessageActionCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, newMessageText: text})




export default store;