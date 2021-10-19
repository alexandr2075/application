import { addPostActionCreator, updateTextActionCreator } from './redux/Content-reducer'
import Text from './Text';
import {connect} from 'react-redux'



const mapStateToProps = (state) => {
    
    return {
        messagesData: state.contentPage.messagesData,
        newMessData: state.contentPage.newMessData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addText: () => {
            dispatch(addPostActionCreator())
        },
        textOnChange: (textik) => {
            dispatch(updateTextActionCreator(textik))
        }
    }
}

const TextContainer = connect(mapStateToProps, mapDispatchToProps) (Text)

export default TextContainer;