import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader";
import userPhoto from "../../../images/noava.jpg";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (


        <div  className={s.profileDescription}>
            <img className={s.avatar} src={props.profile.photos.large!=null ? props.profile.photos.large:userPhoto} alt=""/>
            <div>
                <div className={s.div}>Имя:</div>
                <div className={s.div}>{props.profile.fullName}</div>
            </div>
            <div>
                <div className={s.div}>Обо мне:</div>
                <div className={s.div}>{props.profile.aboutMe}</div>
            </div>
            <div>
                <div className={s.div}>Контакты:</div>
                <div className={s.div}>{Object.keys(props.profile.contacts).map(function(key) {return <div key={key}>{[props.profile.contacts[key]]}</div>})}</div>
            </div>
            <div>
                <div className={s.div}>{props.profile.lookingForJob? "Ишу работу:": "Не ишу работу:"}</div>
                <div className={s.div}>{props.profile.lookingForJobDescription}</div>
            </div>
        </div>);
}

export default ProfileInfo;