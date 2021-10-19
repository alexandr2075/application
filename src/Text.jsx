import React from 'react';
import classes from './Text.module.css';
import Post from './Post';



const Text = (props) => {
    

    let postElements = props.messagesData
        .map(mess => <Post message={mess.message} id={mess.id} />)

    let postText = React.createRef()

    let addText = () => {
        props.addText()

    }

    let textOnChange = () => {
        let textik = postText.current.value;
        props.textOnChange(textik)


    }

    return (
        <div className={classes.text}>
            <div>
                <textarea onChange={textOnChange} ref={postText} className={classes.textarea} 
                            value={props.newMessData} />
            </div>
            <div>
                <button onClick={addText} className={classes.button}>
                    Add text
                </button>
            </div>
            <div>

                {postElements}
            </div>
        </div>
    )
}

export default Text;