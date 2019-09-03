import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (<div>
        <div>
            <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TTdXiYvi2B9VwxScP1gwfpQKKLmoikPXj8wCLowaIh4xcly6" alt="pulsar"></img>
        </div>
        <ProfileInfo/>
        <Posts posts={props.state.posts}/>
    </div>);
}


export default Profile;