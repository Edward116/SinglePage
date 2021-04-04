import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom'

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

            </div>
        </div>
    );

}


export default App;
