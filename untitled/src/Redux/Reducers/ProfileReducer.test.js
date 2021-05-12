import profileReducer, {addPost, deletePost} from "./ProfileReducer";

let state =  {
    posts: [
        {id: 1, post: 'Hi', likesCount: 100},
        {id: 2, post: 'How are you?', likesCount: 101}
    ],
    profile: null,
    status: ''
}


it(`should be added new post in profile page`, () => {
    let action = addPost('it kamsutra')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it(`message of new post should be correct`, () => {
    let action = addPost('it kamsutra')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].post).toBe('it kamsutra')
})

it(`after deleting length should be decrement`, () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})

