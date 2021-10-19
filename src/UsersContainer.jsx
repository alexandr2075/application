import React from 'react';
import { follow, setCurrentPage,
     //setTotalUsersCount, setUsers, toggleIsFetching,
      unfollow,
     toggleFollowingProgress, getUsers}
 from './redux/Users-reducer'
import Users from './Users';
import { connect } from 'react-redux'
import Preloader from './Common/Preloader';
import { withAuthRedirect } from './Hoc/withAuthRedirect';
import { compose } from 'redux';



class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.currentPage, this.pageSize);
    //     this.props.toggleIsFetching(true)

    //    usersAPI.getUsers(this.currentPage, this.pageSize).then(data => {
            
    //         this.props.toggleIsFetching(false)
    //         this.props.setUsers(data.items)
    //         this.props.setTotalUsersCount(data.totalCount)
    //     })
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.pageSize);

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)

        // usersAPI.getUsers(pageNumber, this.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })


    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}           />
        </>
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }*/

    //let withRedirect = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, {
//     follow, unfollow, setCurrentPage,
//      //setUsers,  setTotalUsersCount, toggleIsFetching,
//       toggleFollowingProgress,getUsers})(UsersContainer)

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
         //setUsers,  setTotalUsersCount, toggleIsFetching,
          toggleFollowingProgress,getUsers})
)(UsersContainer);