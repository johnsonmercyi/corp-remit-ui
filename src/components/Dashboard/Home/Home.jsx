import React, { Component } from 'react';
import style from './Home.module.css';
import Button from '../../UI/MUI/Button/Button';
import axios, { controllerPath } from '../../../util/axios';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    onClickHandler = (event) => {
        axios.get(controllerPath.users)
        .then(response => {
            console.log("Home Response: ", response.data)
        })
        .catch(error => {
            console.log("Home Error: ", error)
        })
        .finally (() => {

        })
    }

    render() {
        return (
            <div className={style.Home}>
                <div className={style.Header}>

                    <div className={style.Balance}>
                        <p className={style.Desc}>Total Sales </p>
                        <h1 className={style.Figure}>NGN 5,000,000</h1>
                    </div>

                    <div className={style.HeaderToolBox}>
                        <Button
                            buttonText={"click me!"}
                            onClick={this.onClickHandler} />
                    </div>

                </div>

                <div className={style.Body}>
                    body
                </div>

                <div className={style.Footer}>

                </div>
            </div>
        );
    }
}

export default Home;
