import React, { Component } from 'react'
import { LayoutContextConsumer } from '../../containers/Layout/Layout';

import style from './Dashboard.module.css'
import Home from './Home/Home';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        // console.log(localStorage.getItem("userAuthToken"));
        return (
            <LayoutContextConsumer>
                {
                    context => {
                        return <div className={style.Dashboard}>
                            <Home />
                        </div>
                    }
                }
            </LayoutContextConsumer>

        );
    }
}

export default Dashboard;
