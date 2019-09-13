import React from 'react';
import s from './Users.module.css';

const Users = (props) =>{
        let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages=[];
        for (let i=1;i <= pageCount;i++){
            pages.push(i);
        }
    return (
        <div className={s.maindiv}>
            <div className={s.divpaginator_div}>
                {pages.map
                    (p =>{
                        return <span className={s.paginator_element+" "+(props.currentPage===p ? s.selected:"")} key={p} onClick={() => {props.onPageChanged(p)}}>&nbsp;&nbsp;{p}&nbsp;&nbsp;</span>
                        }
                    )
                }
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.contentdiv}>
                    <div className={s.div+" "+s.div1}>
                        <div><img className={s.img} src={u.avatar} alt=""/></div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                :  <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.div+" "+s.div2}>
                        <div className={s.div+" " + s.div_left}>
                            <div><h3>{u.fullName}</h3></div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.div+" " + s.div_right}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
}

export default Users;