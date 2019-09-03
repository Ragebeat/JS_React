import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.lastposts}>
                <Post message="Hellow everyone" likes="15"/>
                <Post message="It's my first post" likes="20"/>
                <Post/>
                <Post/>
            </div>
        </div>);
}

export default Posts;