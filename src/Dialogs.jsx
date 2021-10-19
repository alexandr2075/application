import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog';
import Phrase from './Phrase';





const Dialogs = (props) => {

    let phraseElements = props.dialogsPage.phraseData
        .map(phra => <Phrase id={phra.id} phrase={phra.phrase} />)

    let dialogElements = props.dialogsPage.dialogData
        .map(dial => <Dialog id={dial.id} name={dial.name} />)

    let onSendClick = () => {
        props.onSendClick()
    }

    let onTextChange = (e) => {
        let body = e.target.value
        props.onTextChange(body)
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div>
                <div>{phraseElements}</div>
                <div><textarea onChange={onTextChange} value={props.dialogsPage.newMessageText} placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendClick}>Send</button></div>

            </div>
        </div>
    )
}

export default Dialogs;