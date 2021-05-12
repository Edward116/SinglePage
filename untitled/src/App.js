import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {connect, Provider} from "react-redux";
import {initialize} from "./Redux/Reducers/appReducer";
import {compose} from "redux";
import Loader from "./AnotherThings/Loader/Loader";
import store from "./Redux/Store/Store";
const Dialogs = React.lazy(() => import('./Components/Dialogs/Dialogs'));
const Login = React.lazy(() => import('./Components/Login/Login'));


class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if(!this.props.initialized){
        return  <Loader/>
        }

        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='content'>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Route path='/login'
                               render={() =>
                                   <Login/>
                               }/>
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs/>
                           }/>
                    </React.Suspense>
                    <Route path='/users'
                           render={() =>
                               <UsersContainer/>
                           }/>
                    <Route path='/profile/:userId?'
                           render={() =>
                               <ProfileContainer/>
                           }/>
                </div>
            </div>
        );

    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialize}))
(App)

export const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}