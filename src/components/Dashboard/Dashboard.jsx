import React, { Component } from 'react'

import style from './Dashboard.module.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        localStorage.removeItem("userAuthToken");
    }

    render() {
        console.log("Dashboard");
        return (
            <div className={style.Dashboard}>
                Dashboard Component!
            </div>
        );
    }
}

export default Dashboard;
