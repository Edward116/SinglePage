import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateTextActionCreator} from "../../../Redux/state";



const MyPost = (props) => {
    let newPostElement = React.createRef();

    const addPost = () =>{
        props.dispatch(addPostActionCreator())
    }

    const onTextChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateTextActionCreator(text));
    }



    return (
                <div className={s.post}>
                    My post
                    <div>
                        <textarea ref={newPostElement}
                        onChange={onTextChange}
                        value={props.posts.textInTextarea}/>
                        <button onClick={addPost}>Add post</button>
                    </div>
                    <Post posts={props.posts.posts}/>
                </div>
    );

}


export default MyPost;
