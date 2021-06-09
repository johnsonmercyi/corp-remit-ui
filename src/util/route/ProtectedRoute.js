import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = (props) => {
    let content = (childProps) => {
        if (localStorage.getItem("userAuthToken")) {
            return props.children
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: childProps.location
            }}/>
        }
    }

    return (
        <Route path={props.path} render={(childProps) => content(childProps)} />
    );
}

export default ProtectedRoute;