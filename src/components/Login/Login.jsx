import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../containers/Grid/Grid';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import axios, { controllerPath } from '../../util/axios';
import { CoopRemitLogo } from '../../util/icons/Icon';
import * as util from '../../util/util';
import MUIButton from '../UI/MUI/Button/Button';
import MUITextField from '../UI/MUI/TextField/TextField';
import MUIPasswordField from '../UI/MUI/PasswordField/PasswordField';
import CustomProgress from '../UI/Progress/CustomProgress/CustomProgress';
import ProgressPage from '../UI/Progress/ProgressPage';
import style from './Login.module.css';
import CustomAlert from '../Alert/CustomAlert';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showPassword: false,
            error: {
                name: "",
                message: "",
                subMessage: ""
            },
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
            userAuth: false,
            user: null,
            alert: {
                show: false,
                error: false,
                severity: "success",
                message: ""
            }
        }
    }

    loginHandler = (event) => {
        if ((event.type === "keyup" && event.code === "Enter") || event.type === "click") {
            this.login();
        }
    }

    showPasswordHandler = () => this.setState(state => ({
        showPassword: !state.showPassword
    }));

    alertCloseHandler = () => {
        this.setState(state => ({
            alert: {
                show: false,
                error: state.alert.error,
                severity: state.alert.severity,
                message: state.alert.message,
            }
        }));
    }

    login = () => {
        if (this.state.username.trim() && this.state.password.trim()) {

            this.setState({
                loginLoading: true
            });

            axios.post(controllerPath.login, {
                username: this.state.username,
                password: this.state.password
            })
                .then(response => {
                    const userData = response.data;


                    if (userData.success) {
                        console.log("Response: ", response.data);
                        //Simulate login for test
                        setTimeout(() => {
                            localStorage.setItem("userAuthToken", userData.success);
                            this.setState({
                                userAuth: true,
                                loginLoading: false,
                                user: userData.user
                            });
                        }, 2000);
                    } else {
                        console.log("Response: ", response.data);
                        this.setState({
                            password: "",
                            loginLoading: false,
                            error: {
                                name: "",
                                message: userData.message,
                                subMessage: ""
                            },
                            errors: {
                                username: {
                                    isError: true,
                                    errorMessage: ""
                                },
                                password: {
                                    isError: true,
                                    errorMessage: ""
                                }
                            },
                            alert: {
                                show: true,
                                error: true,
                                severity: "error",
                                message: userData.message
                            }
                        });
                    }
                })
                .catch(error => {
                    this.setState({
                        loginLoading: false,
                        error: {
                            name: error.name,
                            message: error.message,
                            subMessage: error.subMessage
                        },
                        alert: {
                            show: true,
                            error: true,
                            severity: "error",
                            message: error.message
                        }
                    });
                })
                .finally (() => {
                    console.log("Error: ", this.state.error);
                });





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
            } else if (!this.state.username.trim()) {

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
            } else if (!this.state.password.trim()) {

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

    onChangeHandler = (event, type) => {
        this.setState((state) => {
            return {
                username: type === "text" ? event.target.value : state.username,
                password: type === "password" ? event.target.value : state.password,
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

        // console.log("Loging!");

        if (this.state.userAuth) {
            // console.log("You were logged in!");
            return <Redirect to={{
                pathname: "/dashboard",
                state: {
                    username: this.state.user.username
                }
            }} />;
        } else {
            console.log(this.props.history.location.pathname);
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

                                    <Row extraClasses={["g-2"]}>
                                        <Column extraClasses={["col-12"]}>
                                            <MUITextField
                                                key={"username_field"}
                                                id={style.Username}
                                                value={this.state.username}
                                                error={this.state.errors.username.isError}
                                                helperText={this.state.errors.username.errorMessage}
                                                label="Username"
                                                onChange={(event) => this.onChangeHandler(event, "text")} />
                                        </Column>

                                        <Column extraClasses={["col-12"]}>
                                            <MUIPasswordField
                                                key={"password_field"}
                                                showPassword={this.state.showPassword}
                                                id={style.Password}
                                                value={this.state.password}
                                                error={this.state.errors.password.isError}
                                                helperText={this.state.errors.password.errorMessage}
                                                label="Password"
                                                onChange={(event) => this.onChangeHandler(event, "password")}
                                                showPasswordHandler={this.showPasswordHandler} />
                                        </Column>
                                    </Row>

                                    {/* <div className={style.CheckBoxWrapper}>
                                        <CheckBox
                                            checked={this.state.rememberMe ? "checked" : ""}
                                            rememberMeToggleHandler={this.rememberMeToggleHandler}
                                            label="Remember Me"
                                            name="rememberMe"
                                            id={style.RememberMe} />
                                    </div> */}

                                    <div className={style.LoginButtonWrapper}>

                                        <MUIButton
                                            buttonText="Login"
                                            onClick={(event) => this.loginHandler(event)} />
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
                                <Link to={{
                                    pathname: util.paths.signup
                                }} id={style.SignUp}>
                                    Sign Up!
                                </Link>
                            </div>
                        </div>

                        <div className={style.AlertWrapper}>
                            {
                                <CustomAlert
                                    open={this.state.alert.show}
                                    severity={this.state.alert.severity}
                                    message={this.state.alert.message}
                                    alertCloseHandler={this.alertCloseHandler} />
                            }
                        </div>
                    </div>

                </Aux>

            );
        }

    }
}

export default Login;
