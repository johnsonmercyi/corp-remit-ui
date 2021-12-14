import { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import ProtectedRoute from './util/route/ProtectedRoute';
import RegisterUser from './components/Modules/User/Register/RegisterUser';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* Login Component Route */}
            <Route path="/login" exact render={(props) => (
              <Login {...props} />
            )} />

            {/* Register User Component*/}
            <Route path="/sign-up" exact render={(props) => (
              <RegisterUser {...props} />
            )} />

            <ProtectedRoute path="/">
              <Layout />
            </ProtectedRoute>

            <ProtectedRoute path="*">
              <Redirect from="/" to="/dashboard" />
            </ProtectedRoute>

            {/* <Route path="*">
              <Redirect from="/" to="/dashboard" />
            </Route> */}

          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
