import React from 'react';
import { connect } from 'react-redux'
import Profile from './Profile';
import { getUserProfile } from './redux/Content-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {getStatus, updateStatus} from './redux/Content-reducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        //     usersAPI.getProfile(userId)
        //    // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        //         .then(response => {
        //             this.props.setUserProfile(response.data)
        //         })
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
        </div>
    }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
    status: state.contentPage.status
})

//let WithUrlDataComponent = withRouter(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

//export default connect(mapStateToProps, { getUserProfile })(WithUrlDataComponent)

