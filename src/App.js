import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom'
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
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

            </div>
        </div>
    );

}


export default App;
