import React, { Component } from 'react'

import style from './Dashboard.module.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        console.log(localStorage.getItem("userAuthToken"));
        return (
            <div className={style.Dashboard}>
                <div className={style.Header}>

                    <div className={style.Balance}>
                        <p className={style.Desc}>Total Active Contribution </p>
                        <h1 className={style.Figure}>NGN 5,000</h1>
                    </div>

                    <div className={style.HeaderToolBox}>

                    </div>

                </div>

                <div className={style.Body}>

                </div>

                <div className={style.Footer}>

                </div>
            </div>
        );
    }
}

export default Dashboard;
