import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateTextActionCreator} from "../../../Redux/state";



const MyPost = (props) => {
    let newPostElement = React.createRef();

    const addPost = () =>{
        props.addPost();
    }

    const onTextChange = () => {
        let text = newPostElement.current.value
        props.updatePostText(text);
    }



    return (
                <div className={s.post}>
                    My post
                    <div>
                        <textarea ref={newPostElement}
                        onChange={onTextChange}
                        value={props.profilePage.textInTextarea}/>
                        <button onClick={addPost}>Add post</button>
                    </div>
                    <Post posts={props.profilePage.posts}/>
                </div>
    );

}


export default MyPost;
