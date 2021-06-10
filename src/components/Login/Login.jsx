import React, { Component } from 'react'

import style from './Login.module.css';
import ripple from '../../assets/css/ripple.module.css';
import { CoopRemitLogo } from '../../util/icons/Icon';
import TextField from '../UI/TextField/TextField';
import CheckBox from '../UI/CheckBox/CheckBox';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            userAuth: false
        }
    }

    onChangeHandler = (event) => {
        this.setState((state) => {
            return {
                username: event.target.type === "text" ? event.target.value : state.username,
                password: event.target.type === "password" ? event.target.value : state.password
            }

        });
    }

    render() {

        console.log("Layout.jsx");

        return (
            <div className={style.Login}>
                <div className={style.Content}>
                    <div className={style.Logo}>
                        <CoopRemitLogo
                            width={"4rem"}
                            height={"4rem"}
                            strokeColor="#fff" />

                        <h1 className={style.LogoText}>CooRe</h1>

                    </div>

                    <div className={style.Body}>
                        <h1 className={style.Header}>Please Login</h1>
                        <div className={style.Form}>
                            <TextField
                                onChangeHandler={this.onChangeHandler}
                                value={this.state.username}
                                type="text"
                                name="username"
                                id={style.Username}
                                placeholder="Username" />

                            <TextField
                                onChangeHandler={this.onChangeHandler}
                                value={this.state.password}
                                type="password"
                                name="password"
                                id={style.Password}
                                placeholder="Password" />

                            <div className={style.CheckBoxWrapper}>
                                <CheckBox
                                    label="Remember Me"
                                    name="rememberMe"
                                    id={style.RememberMe} />
                            </div>

                            <div className={style.LoginButtonWrapper}>
                                <button className={[style.LoginButton, ripple.ripple].join(" ")}>Login</button>
                            </div>

                            <div className={style.BodyFooter}>
                                <a
                                    id={style.ForgetPassword}
                                    href="javacript:void(0)">Forgot Password? </a>
                            
                            </div>
                        </div>
                    </div>

                    <div className={style.Footer}>
                        <span>New to CooRe?</span>
                        <a
                            id={style.SignUp}
                            href="javacript:void(0)">Sign Up! </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
