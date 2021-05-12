import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../AnotherThings/FormsControl/FormsControl";
import {required} from "../../AnotherThings/utils/validators/validator";
import {connect} from 'react-redux'
import {login} from "../../Redux/Reducers/authReducer";
import {Redirect} from "react-router-dom"
import styles from '../../AnotherThings/FormsControl/FormControl.module.css'



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password, formData.rememberMe);
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>

    );

}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       validate={[required]}
                       component={Input}
                        type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}

                       component={Input}/>
                <span>remember me</span>
            </div>
            {error && <div className={styles.summaryError}>
                {error}
            </div>}
            <div>
                <button>LogIn</button>
            </div>
        </form>


    );

}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
