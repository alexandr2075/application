import { addMessageCreator, updateMessageCreator } from './redux/Dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from './Hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendClick: () => {
            dispatch(addMessageCreator())
        },
        onTextChange: (body) => {
            dispatch(updateMessageCreator(body))
        }
    }
}


//let AuthRedirectComponent = withAuthRedirect(Dialogs);

// (props) => {
//     if(!this.props.isAuth) return <Redirect to = {'/login'}/>;
//     return <Dialogs {...props}/>
// }

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
;