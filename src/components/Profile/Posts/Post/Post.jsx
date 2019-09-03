import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGepLflukaxs9OsQEqLyH-whYEUlazTYWHFYOtYvby-MqIrvk" alt="" />
            {props.message}
            <div>
            <span>Likes: {props.likes}</span></div>
        </div>);
}

export default Post;