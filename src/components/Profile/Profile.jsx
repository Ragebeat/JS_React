import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (<div>
        <div>
            <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TTdXiYvi2B9VwxScP1gwfpQKKLmoikPXj8wCLowaIh4xcly6" alt="pulsar"></img>
        </div>
        <ProfileInfo/>
        <PostsContainer/>
    </div>);
}


export default Profile;