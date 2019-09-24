import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    Follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow
} from "../../Redux/users-reducer";
import Preloader from "../common/preloader";

class Usersapi extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageNumber,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber,this.props.pageSize)
    };

    render() {
        return (
        <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                Follow={this.props.Follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {Follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers} )(Usersapi);