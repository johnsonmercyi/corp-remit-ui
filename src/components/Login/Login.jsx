import React, { Component } from 'react'

import style from './Login.module.css';
import ripple from '../../assets/css/ripple.module.css';
import { CoopRemitLogo } from '../../util/icons/Icon';
import TextField from '../UI/TextField/TextField';
import CheckBox from '../UI/CheckBox/CheckBox';
import ProgressPage from '../UI/Progress/ProgressPage';
import CircularIndeterminate from '../UI/Progress/CircularIndeterminate/CircularIndeterminate';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import CustomProgress from '../UI/Progress/CustomProgress/CustomProgress';
import { Redirect } from 'react-router';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {
                username: {
                    isError: false,
                    errorMessage: ""
                },
                password: {
                    isError: false,
                    errorMessage: ""
                }
            },
            usernameError: false,
            passwordError: false,
            loginLoading: false,
            rememberMe: false,
            userAuth: false
        }
    }

    loginHandler = (event) => {
        if ((event.type === "keyup" && event.code === "Enter") || event.type === "click") {
            this.login();
        }
    }

    login = () => {
        if (this.state.username.trim() && this.state.password.trim()) {

            this.setState({
                loginLoading: true
            });

            //Simulate login for test
            setTimeout(() => {
                localStorage.setItem("userAuthToken", "true");
                this.setState({
                    userAuth: true,
                    loginLoading: false
                });
            }, 7000);

            // This portion of code should execute upon a successful validation of the user on the server.
            // localStorage.setItem("userAuthToken", "true");

            // this.setState({
            //     userAuth: true
            // });
        } else {
            if (!this.state.username.trim() && !this.state.password.trim()) {

                this.setState((state) => {
                    return {
                        errors: {
                            username: {
                                isError: true,
                                errorMessage: "Username is required!"
                            },
                            password: {
                                isError: true,
                                errorMessage: "Password is required!"
                            }
                        }
                    }
                });
            }else if (!this.state.username.trim()) {

                this.setState((state) => {
                    return {
                        errors: {
                            username: {
                                isError: true,
                                errorMessage: "Password is required!"
                            },
                            password: {
                                isError: state.errors.password.isError,
                                errorMessage: state.errors.password.errorMessage
                            }
                        }
                    }
                });
            }else if (!this.state.password.trim()) {

                this.setState((state) => {
                    return {
                        errors: {
                            username: {
                                isError: state.errors.username.isError,
                                errorMessage: state.errors.username.errorMessage
                            },
                            password: {
                                isError: true,
                                errorMessage: "Password is required!"
                            }
                        }
                    }
                });
            }
        }
    }

    onChangeHandler = (event) => {
        this.setState((state) => {
            return {
                username: event.target.type === "text" ? event.target.value : state.username,
                password: event.target.type === "password" ? event.target.value : state.password,
                errors: event.target.type === "text" ? {
                    username: event.target.value !== "" ? {
                        isError: false,
                        errorMessage: ""
                    } : {
                        isError: true,
                        errorMessage: "Username is required!"
                    },
                    password: {
                        isError: state.errors.password.isError,
                        errorMessage: state.errors.password.errorMessage
                    }
                } : {
                    username: {
                        isError: state.errors.username.isError,
                        errorMessage: state.errors.username.errorMessage
                    },
                    password: event.target.value !== "" ? {
                        isError: false,
                        errorMessage: ""
                    } : {
                        isError: true,
                        errorMessage: "Password is required!"
                    }
                }
            }

        });
    }

    rememberMeToggleHandler = () => {
        this.setState((state) => {
            return {
                rememberMe: !state.rememberMe
            }
        });
    }

    render() {

        console.log("Loging!");

        if (this.state.userAuth) {
            // console.log("You were logged in!");
            return <Redirect to="/" />;
        } else {
            return (
                <Aux>
    
                    <ProgressPage
                        backgroundColor={"#7f5539"}
                        load={this.state.loginLoading}>
                        {/* <CircularIndeterminate progressColor="#06d6a0" /> */}
                        <CustomProgress
                            width={"4rem"}
                            height={"4rem"}
                            strokeColor="#ffd166" />
                        {/* <span className={style.Text}>Please wait, we're logging you in!</span> */}
                    </ProgressPage>
    
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
                                        placeholder="Username"
                                        isError={this.state.errors.username.isError}
                                        errorMessage={this.state.errors.username.errorMessage} />
    
                                    <TextField
                                        onChangeHandler={this.onChangeHandler}
                                        value={this.state.password}
                                        type="password"
                                        name="password"
                                        id={style.Password}
                                        placeholder="Password"
                                        isError={this.state.errors.password.isError}
                                        errorMessage={this.state.errors.password.errorMessage} />
    
                                    <div className={style.CheckBoxWrapper}>
                                        <CheckBox
                                            checked={this.state.rememberMe ? "checked" : ""}
                                            rememberMeToggleHandler={this.rememberMeToggleHandler}
                                            label="Remember Me"
                                            name="rememberMe"
                                            id={style.RememberMe} />
                                    </div>
    
                                    <div className={style.LoginButtonWrapper}>
                                        <button
                                            onClick={(event) => this.loginHandler(event)}
                                            className={[style.LoginButton, ripple.ripple].join(" ")}>
                                            Login
                                    </button>
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
    
                </Aux>
    
            );
        }

    }
}

export default Login;
