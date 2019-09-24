import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "./../../images/noava.jpg"
import {userAPI} from "../../Api/api";
const Users = (props) =>{
        let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages=[];
        for (let i=1;i <= pageCount;i++){
            pages.push(i);
        }
    return (
        <div className={s.maindiv}>
            <div className={s.divpaginator_div}>
                {pages.map (p =>{
                        return(
                        <span className={s.paginator_element+" "+(props.currentPage===p ? s.selected:"")} key={p} onClick={() => {props.onPageChanged(p)}}>&nbsp;&nbsp;{p}&nbsp;&nbsp;</span>)
                    }
                    )
                }
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.contentdiv}>
                    <div className={s.div+" "+s.div1}>
                        <div>
                            <NavLink to={'/profile/'+u.id}>
                                <img className={s.img} src={u.photos.small!=null ? u.photos.small:userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={()=>{
                                    props.toggleFollowingProgress(true,u.id);
                                    userAPI.unFollow(u.id)
                                        .then(data => {
                                            if(data.resultCode===0){
                                                props.unFollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false,u.id);
                                        });

                                }}>Unfollow</button>
                                :  <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={()=>{
                                    props.toggleFollowingProgress(true,u.id);
                                    userAPI.Follow(u.id)
                                        .then(response => {
                                            if(response.data.resultCode===0){
                                                props.Follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false,u.id);
                                        });
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.div+" "+s.div2}>
                        <div className={s.div+" " + s.div_left}>
                            <div><h3>{u.name}</h3></div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.div+" " + s.div_right}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
}

export default Users;