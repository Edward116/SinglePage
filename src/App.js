import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom'
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

const App = (props) => {

    return (
        <div className='appWrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className='content'>
                <Route path='/profile/:userId?'
                       render={() =>
                           <ProfileContainer />
                       }/>
                <Route path='/dialogs'
                       render={() =>
                           <Dialogs />
                       }/>
                <Route path='/users'
                       render={() =>
                           <UsersContainer />
                       }/>
                <Route path='/login'
                       render={() =>
                           <Login />
                       }/>

            </div>
        </div>
    );

}


export default App;
