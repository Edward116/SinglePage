import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../AnotherThings/utils/validators/validator";
import {Textarea} from "../../../AnotherThings/FormsControl/FormsControl";
import {deletePost} from "../../../Redux/Reducers/ProfileReducer";

const maxLength = maxLengthCreator(10)

const PostForm1 = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
              <Field name='newPost'
                     component={Textarea}
                     validate={[required, maxLength]}/>
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
    const addPost = (values) => {
        props.addPost(values.newPost);
    }

    return (
        <div className={s.post}>
            My post
            <div>
                <PostForm onSubmit={addPost}/>
            </div>
            <Post
                posts={props.profilePage.posts}
                deletePost={props.deletePost}
            />
        </div>
    )

}



export default MyPost;
