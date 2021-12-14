import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Column, Row } from '../../../../containers/Grid/Grid';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';
import axios, { controllerPath } from '../../../../util/axios';
import * as util from '../../../../util/util';
import ErrorActionPage from '../../../ErrorActionPage/ErrorActionPage';
import ErrorPage from '../../../ErrorPage/ErrorPage';
import SuccessfullActionPage from '../../../SuccessfulActionPage/SuccessfulActionPage';
import MUIButton from '../../../UI/MUI/Button/Button';
import MUITextField from '../../../UI/MUI/TextField/TextField';
import MUIPasswordField from '../../../UI/MUI/PasswordField/PasswordField';
// import CustomProgress from '../../../UI/Progress/CustomProgress/CustomProgress';
import CircularIndeterminate from '../../../UI/Progress/CircularIndeterminate/CircularIndeterminate';
import ProgressPage from '../../../UI/Progress/ProgressPage';
import CustomSelect from '../../../UI/Select/CustomSelect';
import style from './RegisterUser.module.css';
import CustomProgress from '../../../UI/Progress/CustomProgress/CustomProgress';


class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            actionLoading: false,
            actionSuccess: false,
            actionError: false,
            isError: false,
            error: {
                name: "",
                message: "",
                subMessage: ""
            },
            errors: {
                firstname: {
                    isError: false,
                    errorMessage: ""
                },
                lastname: {
                    isError: false,
                    errorMessage: ""
                },
                gender: {
                    isError: false,
                    errorMessage: ""
                },
                username: {
                    isError: false,
                    errorMessage: ""
                },
                password: {
                    isError: false,
                    errorMessage: ""
                },
                confirmPassword: {
                    isError: false,
                    errorMessage: ""
                },
                email: {
                    isError: false,
                    errorMessage: ""
                }
            },
            form: {
                firstname: "",
                lastname: "",
                genders: [
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" }
                ],
                selectGender: "none",
                username: "",
                password: "",
                confirmPassword: "",
                email: "",
                showPassword: false,
                showConfirmPassword: false,
            },
        }
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    signUpHandler = (event) => {
        this.signUp();
    }

    signUp = () => {
        if (this.state.form.firstname.trim() &&
            this.state.form.lastname.trim() &&
            this.state.form.selectGender.trim() &&
            this.state.form.username.trim() &&
            this.state.form.password.trim() &&
            this.state.form.confirmPassword.trim() &&
            this.state.form.email.trim()) {

            this.setState({ actionLoading: true });

            //Make http request here
            const signUpPayload = {
                firstname: this.state.form.firstname,
                lastname: this.state.form.lastname,
                gender: this.state.form.selectGender,
                username: this.state.form.username,
                password: this.state.form.password,
                email: this.state.form.email
            }

            axios.post(controllerPath.signup, signUpPayload)
                .then(response => {
                    const userData = response.data;

                    if (userData.success) {
                        console.log("User Registration Response: ", userData);
                        this.setState({ actionSuccess: true, actionError: false });
                    } else {
                        this.setState({
                            actionError: true,
                            actionSuccess: false,
                            error: {
                                name: "Server Error",
                                message: userData.message,
                                subMessage: ""
                            }
                        });
                    }

                }).catch(error => {
                    this.setState({
                        actionError: true,
                        actionSuccess: false,
                        // isError: true,
                        error: {
                            name: error.name,
                            message: error.message,
                            subMessage: error.subMessage
                        }
                    });
                }).finally(() => {

                });

        } else {
            this.setState(state => ({
                errors: {
                    firstname: state.form.firstname === "" ? {
                        isError: true,
                        errorMessage: "Firstname is required"
                    } : {
                        isError: false,
                        errorMessage: ""
                    },

                    lastname: state.form.lastname === "" ? {
                        isError: true,
                        errorMessage: "Lastname is required"
                    } : {
                        isError: false,
                        errorMessage: ""
                    },

                    gender: state.form.selectGender === "none" ? {
                        isError: true,
                        errorMessage: "Gender is required"
                    } : {
                        isError: false,
                        errorMessage: ""
                    },

                    username: state.form.username === "" ? {
                        isError: true,
                        errorMessage: "Username is required"
                    } : {
                        isError: false,
                        errorMessage: ""
                    },

                    password: state.form.password === "" ? {
                        isError: true,
                        errorMessage: "Password is required"
                    } : String(state.form.password).length < 8 ? {
                        isError: true,
                        errorMessage: "Password must be minimum of 8 characters"
                    } : {
                        isError: false,
                        errorMessage: ""
                    },

                    confirmPassword: state.form.confirmPassword === "" ? {
                        isError: true,
                        errorMessage: "Please confirm password"
                    } : state.form.confirmPassword !== state.form.password ? {
                        isError: true,
                        errorMessage: "Password mismatch"
                    } : {
                        isError: false,
                        errorMessage: ""
                    },

                    email: state.form.email === "" ? {
                        isError: true,
                        errorMessage: "Email is required"
                    } : {
                        isError: false,
                        errorMessage: ""
                    },
                }
            }))
        }
    }

    onChangeHandler = prop => event => this.setState(state => ({
        form: {
            ...state.form,
            [prop]: event.target.value
        },
        //form validations
        errors: {
            firstname: prop === "firstname" ?
                event.target.value !== "" ? {
                    isError: false,
                    errorMessage: ""
                } : {
                    isError: true,
                    errorMessage: "Firstname is required"
                } : {
                    isError: state.errors.firstname.isError,
                    errorMessage: state.errors.firstname.errorMessage
                },

            lastname: prop === "lastname" ?
                event.target.value !== "" ? {
                    isError: false,
                    errorMessage: ""
                } : {
                    isError: true,
                    errorMessage: "Lastname is required"
                } : {
                    isError: state.errors.lastname.isError,
                    errorMessage: state.errors.lastname.errorMessage
                },

            gender: prop === "selectGender" ?
                event.target.value !== "none" ? {
                    isError: false,
                    errorMessage: ""
                } : {
                    isError: true,
                    errorMessage: "Gender is required"
                } : {
                    isError: state.errors.gender.isError,
                    errorMessage: state.errors.gender.errorMessage
                },

            username: prop === "username" ?
                event.target.value !== "" ? {
                    isError: false,
                    errorMessage: ""
                } : {
                    isError: true,
                    errorMessage: "Username is required"
                } : {
                    isError: state.errors.username.isError,
                    errorMessage: state.errors.username.errorMessage
                },

            password: prop === "password" ?
                event.target.value === "" ? {
                    isError: true,
                    errorMessage: "Password is required"
                } : String(event.target.value).length < 8 ? {
                    isError: true,
                    errorMessage: "Password must be minimum of 8 characters"
                } : {
                    isError: false,
                    errorMessage: ""
                } : {
                    isError: state.errors.password.isError,
                    errorMessage: state.errors.password.errorMessage
                },

            confirmPassword: prop === "confirmPassword" ?
                event.target.value !== "" ?
                    event.target.value !== state.form.password ? {
                        isError: true,
                        errorMessage: "Password mismatch"
                    } : {
                        isError: false,
                        errorMessage: ""
                    } : {
                        isError: true,
                        errorMessage: "Please confirm password"
                    } : {
                    isError: state.errors.confirmPassword.isError,
                    errorMessage: state.errors.confirmPassword.errorMessage
                },

            email: prop === "email" ?
                event.target.value !== "" ? {
                    isError: false,
                    errorMessage: ""
                } : {
                    isError: true,
                    errorMessage: "Email is required"
                } : {
                    isError: state.errors.email.isError,
                    errorMessage: state.errors.email.errorMessage
                },
        }
    }))

    showPasswordHandler = () => this.setState(state => ({
        form: {
            ...state.form,
            showPassword: !state.form.showPassword,
        }
    }));

    showConfirmPasswordHandler = () => this.setState(state => ({
        form: {
            ...state.form,
            showConfirmPassword: !state.form.showConfirmPassword,
        }
    }));

    genderSelectHandler = (event) => {
        this.setState(state => {
            return {
                form: {
                    firstname: state.form.firstname,
                    lastname: state.form.lastname,
                    genders: state.form.genders,
                    selectGender: event.target.value,
                    username: state.form.username,
                    password: state.form.password,
                    confirmPassword: state.form.confirmPassword,
                    email: state.form.email
                }
            }
        });
    }

    registrationSuccessActionHandler = () => {
        this.props.history.push("/login");
    }

    registrationErrorActionHandler = () => {
        this.setState({ 
            actionLoading: false,
            actionError: false,
            actionSuccess: false
        });
    }

    render() {

        const progressPageComponent = () => {

            let component = <CustomProgress
                width={"4rem"}
                height={"4rem"}
                strokeColor="#ffd166" />;

            if (this.state.actionSuccess) {
                component = <SuccessfullActionPage
                    header={`Hey ${this.state.form.firstname}!`}
                    subHeader={"You're now a Coore User. Please proceed to login :)"}
                    actionText={"Login"}
                    actionHandler={this.registrationSuccessActionHandler} />
            }

            if (this.state.actionError) {
                component = <ErrorActionPage
                    header={`${this.state.error.name}`}
                    subHeader={`${this.state.error.message}`}
                    actionText={"Exit"}
                    actionHandler={this.registrationErrorActionHandler} />
            }

            return component;

        }
        return <Aux>
                <ProgressPage
                    backgroundColor={"#7f5539"}
                    load={this.state.actionLoading}
                    action={this.state.actionSuccess || this.state.actionError ? true : false}>
                    {/* <CircularIndeterminate progressColor="#06d6a0" /> */}
                    {progressPageComponent()}
                    {/* <span className={style.Text}>Please wait...</span> */}
                </ProgressPage>

                <div className={[style.RegisterUser].join(" ")}>

                    <div className={style.Content}>
                        <div className={style.Body}>
                            <h1 className={style.Header}>User Registration</h1>
                            <div className={style.Form}>

                                <Row extraClasses={["g-2"]}>
                                    <Column extraClasses={["col-12 "]}>
                                        <MUITextField
                                            type={"text"}
                                            id="first_name_field"
                                            value={this.state.form.firstname}
                                            error={this.state.errors.firstname.isError}
                                            helperText={this.state.errors.firstname.errorMessage}
                                            label="First Name"
                                            onChange={this.onChangeHandler("firstname")} />

                                    </Column>

                                    <Column extraClasses={["col-12 "]}>
                                        <MUITextField
                                            type={"text"}
                                            id="last_name_field"
                                            value={this.state.form.lastname}
                                            error={this.state.errors.lastname.isError}
                                            helperText={this.state.errors.lastname.errorMessage}
                                            label="Last Name"
                                            onChange={this.onChangeHandler("lastname")} />
                                    </Column>

                                    <Column extraClasses={["col-12 "]}>
                                        <CustomSelect
                                            error={this.state.errors.gender.isError}
                                            helperText={this.state.errors.gender.errorMessage}
                                            label="Gender"
                                            width="100%"
                                            value={this.state.form.selectGender}
                                            menuItems={[
                                                { value: "none", label: "" },
                                                ...this.state.form.genders
                                            ]}
                                            onChange={this.onChangeHandler("selectGender")}>
                                        </CustomSelect>
                                    </Column>

                                    <Column extraClasses={["col-12 "]}>
                                        <MUITextField
                                            type={"text"}
                                            id="username_field"
                                            value={this.state.form.username}
                                            error={this.state.errors.username.isError}
                                            helperText={this.state.errors.username.errorMessage}
                                            label="Username"
                                            onChange={this.onChangeHandler("username")} />
                                    </Column>

                                    <Column extraClasses={["col-12 "]}>
                                        <MUIPasswordField
                                            showPassword={this.state.form.showPassword}
                                            id="password_field"
                                            value={this.state.form.password}
                                            error={this.state.errors.password.isError}
                                            helperText={this.state.errors.password.errorMessage}
                                            label="Password"
                                            onChange={this.onChangeHandler("password")}
                                            showPasswordHandler={this.showPasswordHandler} />
                                    </Column>

                                    <Column extraClasses={["col-12 "]}>
                                        <MUIPasswordField
                                            type={"password"}
                                            showPassword={this.state.form.showConfirmPassword}
                                            id="confirm_password_field"
                                            value={this.state.form.confirmPassword}
                                            error={this.state.errors.confirmPassword.isError}
                                            helperText={this.state.errors.confirmPassword.errorMessage}
                                            label="Confirm Password"
                                            onChange={this.onChangeHandler("confirmPassword")}
                                            showPasswordHandler={this.showConfirmPasswordHandler} />
                                    </Column>

                                    <Column extraClasses={["col-12 "]}>
                                        <MUITextField
                                            type={"text"}
                                            id="email_field"
                                            value={this.state.form.email}
                                            error={this.state.errors.email.isError}
                                            helperText={this.state.errors.email.errorMessage}
                                            label="Email"
                                            onChange={this.onChangeHandler("email")} />
                                    </Column>
                                </Row>

                            </div>
                        </div>
                        <div className={style.Footer}>
                            <div className={style.ButtonWrapper}>
                                <MUIButton
                                    buttonText="Sign Up"
                                    onClick={this.signUpHandler} />
                            </div>

                            <div className={style.LoginPrompt}>
                                <span>Already a CooRe User?</span>
                                <Link to={{
                                    pathname: util.paths.login
                                }} id={style.SignUp}>
                                    Login!
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>




    }
}

export default RegisterUser;
