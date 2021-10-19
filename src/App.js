import React from 'react';
import classes from './App.module.css';
import Navbar from './Navbar';
import Content from './Content';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './DialogsContainer';
import UsersContainer from './UsersContainer';
import HeaderContainer from './HeaderContainer';
import LoginPage from './Login';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <HeaderContainer />
        <Navbar />
        <div>
          <Route path='/content/:userId?'
            render={() => <Content store={props.store} />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer store={props.store} />} />
          <Route path='/users'
            render={() => <UsersContainer store={props.store} />} />
          <Route path='/login'
            render={() => <LoginPage store={props.store} />} />
        </div>

      </div>
    </BrowserRouter>

  )
}



export default App;
