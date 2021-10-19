import React from 'react';
import classes from './Content.module.css';
import TextContainer from './TextContainer';
import ProfileContainer from './ProfileContainer';

const Content = (props) => {

    return (
        <div className={classes.content}>
            <div className={classes.image}>
                <img src="https://uiaa-web.azureedge.net/wp-content/uploads/2021/01/Dolomites-
            stock-UIAA.jpg" alt="" />
            </div>
            <div>
                <ProfileContainer />
                <TextContainer store={props.store} />
            </div>
        </div>
    )
}

export default Content;