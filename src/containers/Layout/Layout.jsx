import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import { Header, Main } from '../HtmlBodyParts/HtmlBodyParts';
import style from './Layout.module.css';


const { Provider, Consumer } = React.createContext();

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            clientWidth: 0,
            clientHeight: 0,
            mobileDeviceSize: 575,
            sideMenuToggled: false,
            searchFieldToggled: false,
            searchString: "",
            userAuth: true,
            sideMenuGroups:{
                
            }
        }
    }

    updateDimensions = () => {
        this.setState({
            clientWidth: document.documentElement.clientWidth,
            clientHeight: document.documentElement.clientHeight,
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    componentDidMount() {
        /**
         * Here, make request to the server (isTokenExpired API point) to
         * check if the token is expired.
         * 
         * If expired:
         *      - mark the user login token in the db as expired
         *      - return true here and remove the userAuthToken key in the localStorage
         *      - that returns us to the login page authomatically
         * If not expired:
         *      - Do nothing. Just load in the dashboard that's all.
         */
        // localStorage.removeItem("userAuthToken");
        this.updateDimensions();//updates dimensions
        window.addEventListener('resize', this.updateDimensions); //registers window resize event listener
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    logoutHandler = () => {
        localStorage.removeItem("userAuthToken");

        this.setState({
            userAuth: false
        });
    }

    render() {

        console.log(this.props.match.path + "login");

        return (

            <Provider

                value={{
                    width: this.state.width,
                    height: this.state.width,
                    clientWidth: this.state.clientWidth,
                    clientHeight: this.state.clientHeight,
                    mobileDeviceSize: this.state.mobileDeviceSize,
                    routerProps: {
                        history: this.props.history,
                        location: this.props.location,
                        match: this.props.match
                    },
                    toggleHandler: this.sideMenuToggleHandler,
                    toggled: this.state.sideMenuToggled,
                    logoutHandler: this.logoutHandler
                }}>

                <div className={style.Layout}>
                    <Header>
                        <Toolbar />
                    </Header>

                    <Main>
                        <Switch>

                            {/* Dashboard Component*/}
                            <Route path={this.props.match.path} render={(props) => (
                                <Dashboard {...props} />
                            )} />

                        </Switch>
                    </Main>
                </div>

            </Provider>
        );
    }
}

export default withRouter(Layout);
export { Consumer as LayoutContextConsumer };

