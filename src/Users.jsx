import React from 'react';
import classes from './Users.module.css'
import image from './Assets/Images/userlogo.jpg'
import { NavLink } from "react-router-dom";
import * as axios from 'axios';
import { usersAPI } from './Api/api';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage} key={p.id}
                    onClick={() => { props.onPageChanged(p) }} >{p}</span>
            })}
        </div>


        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/content' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : image}
                                alt='' className={classes.photo} />
                        </NavLink>
                    </div>
                    <div>{u.name} </div>
                    <div>{u.id}</div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                             onClick={() => {
                                 props.unfollow(u.id);
                                // props.toggleFollowingProgress(true, u.id);
                                // usersAPI.unfollow(u.id)
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {

                                    //     withCredentiale: true,
                                    //     headers: {
                                    //         'API-KEY': '514354dd-7621-43f6-91d9-43268599e37e'
                                    //     }
                                    // } )
                                    // .then(response => {
                                    //     if (response.data.resaltCode === 0) {
                                    //         props.unfollow(u.id)
                                    //     }
                                    //     props.toggleFollowingProgress(false, u.id);
                                    // })
                            }} >UnFollow</button>


                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.follow(u.id);
                                    // props.toggleFollowingProgress(true, u.id);
                                    // usersAPI.follow(u.id)
                                        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {

                                        //     withCredentiale: true,
                                        //     headers: {
                                        //         'API-KEY': '514354dd-7621-43f6-91d9-43268599e37e'
                                        //     }
                                        // } )
                                        // .then(response => {
                                        //     if (response.data.resaltCode === 0) {
                                        //         props.follow(u.id)
                                        //     }
                                        //     props.toggleFollowingProgress(false, u.id);
                                        // })
                                }} >Follow</button>}

                    </div>
                </span>
            </div>

        )}

    </div>
}


export default Users;