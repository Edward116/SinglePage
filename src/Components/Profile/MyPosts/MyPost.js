import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
                <div className={s.post}>
                    My post
                    <div>
                        <textarea></textarea>
                        <button>Add post</button>
                    </div>
                    <Post posts={props.posts}/>
                </div>
    );

}


export default MyPost;
