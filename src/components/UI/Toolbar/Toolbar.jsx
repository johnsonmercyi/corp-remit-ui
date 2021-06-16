import React from 'react';

import style from './Toolbar.module.css';
import { CoopRemitLogo } from '../../../util/icons/Icon';
import MenuIcon from '../MenuIcon/MenuIcon';
import NavigationItemsBar from '../NavigationItemsBar/NavigationItemsBar';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Toolbar = ({ }) => {
    return (
        <div className={style.Toolbar}>
            <div className={style.Menu}>
                <MenuIcon />
            </div>
            <div className={style.Logo}>
                <CoopRemitLogo
                    width={""}
                    height={""}
                    strokeColor="#fff" />

                <h1 className={style.LogoText}>CooRe</h1>
            </div>
            <div className={style.Tools}>
                <NavigationItemsBar
                    items={{
                        home: {
                            label: "Home",
                            icon: <HomeOutlinedIcon/>,
                            showIcon: "mobile"
                        },
                        activities: {
                            label: "Activities",
                            icon: <StorageOutlinedIcon />,
                            showIcon: "mobile"
                        },
                        portfolio: {
                            label: "Portfolio",
                            icon: <WorkOutlineOutlinedIcon />,
                            showIcon: "mobile"
                        },
                        userAccount: {
                            label: "Account",
                            icon: <AccountCircleOutlinedIcon />,
                            showIcon: "mobile"
                        }
                    }} />
            </div>
        </div>
    );
}

export default Toolbar;