import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import StorageIcon from '@material-ui/icons/Storage';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import React from 'react';
import { CoopRemitLogo } from '../../../util/icons/Icon';
import MenuIcon from '../MenuIcon/MenuIcon';
import NavigationItemsBar from '../NavigationItemsBar/NavigationItemsBar';
import style from './Toolbar.module.css';



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
                            active: true,
                            label: "Home",
                            icon: <HomeOutlinedIcon />,
                            iconFilled: <HomeIcon style={{
                                color:"#ffd166",
                                transition: "all .6s ease"
                            }}/>,
                            showIcon: "mobile"
                        },
                        activities: {
                            active: false,
                            label: "Activities",
                            icon: <StorageOutlinedIcon />,
                            iconFilled: <StorageIcon style={{
                                color:"#ffd166",
                                transition: "all .6s ease"
                            }}/>,
                            showIcon: "mobile"
                        },
                        portfolio: {
                            active: false,
                            label: "Portfolio",
                            icon: <WorkOutlineOutlinedIcon />,
                            iconFilled: <WorkIcon style={{
                                color:"#ffd166",
                                transition: "all .6s ease"
                            }}/>,
                            showIcon: "mobile"
                        },
                        userAccount: {
                            active: false,
                            label: "Account",
                            icon: <AccountCircleOutlinedIcon />,
                            iconFilled: <AccountCircleIcon style={{
                                color:"#ffd166",
                                transition: "all .6s ease"
                            }} />,
                            showIcon: "mobile"
                        }
                    }} />
            </div>
        </div>
    );
}

export default Toolbar;