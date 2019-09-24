import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../Api/api";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userid = this.props.match.params.userId;
        if (!userid){
            userid=1632;
        }
        //this.props.toggleIsFetching(true);
        userAPI.getUserProfile(userid).then(data => {
                this.props.setUserProfile(data);
                //this.props.toggleIsFetching(false);
            })
    }

    render() {
    return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect (mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));