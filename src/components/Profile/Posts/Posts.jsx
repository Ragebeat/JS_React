import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (<div>
        my posts
        <div>
            <textarea name="" id="" cols="30" rows="3"></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>);
}

export default Posts;