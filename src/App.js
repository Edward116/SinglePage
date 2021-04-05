import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom'
import Users from "./Components/Users/Users";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <NavBar/>
            <div className='content'>
                <Route path='/profile'
                       render={() =>
                           <Profile />
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
