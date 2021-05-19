import React, { Component } from 'react'

import style from './Layout.module.css'
import { Header, Main } from '../HtmlBodyParts/HtmlBodyParts';

class Layout extends Component {
    state = {}
    render() {
        return (
            <div className={style.Layout}>
                <Header>
                    Header
                </Header>

                <Main>
                    App main Body
                </Main>
            </div>
        );
    }
}

export default Layout;
