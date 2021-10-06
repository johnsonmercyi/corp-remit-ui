import React from 'react';

import style from './Home.module.css';

const Home = (props) => {
    return (
        <div className={style.Home}>
            <div className={style.Header}>

                <div className={style.Balance}>
                    <p className={style.Desc}>Total Active Contribution </p>
                    <h1 className={style.Figure}>NGN 5,000</h1>
                </div>

                <div className={style.HeaderToolBox}>

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

export default Home;
