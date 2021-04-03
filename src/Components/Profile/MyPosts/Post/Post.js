import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.postItem}>
                {props.posts.map(data => {
                    return(
                        <div>
                            <img src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg" alt=""/>
                            {data.post}
                            <div>
                                <span>Likes: {data.likesCount}</span>
                            </div>
                        </div>
                    );
                })}


        </div>
    );

}


export default Post;
