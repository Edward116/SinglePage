import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {reduxForm, Field} from 'redux-form'


const PostForm1 = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
              <Field name='newPost' component='textarea' />
            </div>
            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
}

const PostForm = reduxForm({
    form: 'ProfileForm'
})(PostForm1)

const MyPost = (props) => {

    const addPost = (values) =>{
        props.addPost(values.newPost);
    }

    return (
                <div className={s.post}>
                    My post
                    <div>
                        <PostForm onSubmit={addPost}/>
                    </div>
                    <Post posts={props.profilePage.posts}/>
                </div>
    );

}




export default MyPost;
