import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
                <div className={s.post}>
                    My post
                    <div>
                        <textarea></textarea>
                        <button>Add post</button>
                    </div>
                    <Post message={'Hi'}/>
                    <Post message={'How are you?'}/>
                </div>
    );

}


export default MyPost;
