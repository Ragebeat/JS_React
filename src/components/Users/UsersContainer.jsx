import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unFollowAC} from "../../Redux/users-reducer";
import * as axios from "axios";

class Usersapi extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3000/temp/users.json")
            .then(response =>{
                let newarr=[];
                for (let i=(this.props.currentPage-1)*this.props.pageSize;i<this.props.currentPage*this.props.pageSize;i++){
                    //for (let i=0;i<response.data.users.length;i++){
                    if (response.data.users[i]!==undefined){
                        newarr.push(response.data.users[i])
                    }
                }
                this.props.setUsers(newarr);
                this.props.setUsersCount(response.data.users.length);
                //console.log(this.props.pageSize)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get("http://localhost:3000/temp/users.json")
            .then(response =>{
                let newarr=[];
                for (let i=(pageNumber-1)*this.props.pageSize;i<pageNumber*this.props.pageSize;i++){
                    //for (let i=0;i<response.data.users.length;i++){
                    if (response.data.users[i]!==undefined){
                        newarr.push(response.data.users[i])
                    }
                }
                this.props.setUsers(newarr);
                this.props.setUsersCount(response.data.users.length);
                //console.log(this.props.pageSize)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}/>}
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users));
        }, setUsersCount: (usersCount) =>{
            dispatch(setUsersCountAC(usersCount));
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Usersapi);