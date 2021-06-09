import { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import ProtectedRoute from './util/route/ProtectedRoute';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* Login Component Route */}
            <Route path="/login" exact render={(props) => (
              <Login {...props}/>
            )} />

            <ProtectedRoute path="/">
              <Layout />
            </ProtectedRoute>

            <Route path="*">
              <Redirect from="/" to="/dashboard" />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
