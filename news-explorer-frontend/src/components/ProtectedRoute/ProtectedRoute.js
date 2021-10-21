import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  if (!props.Loggedin){
    props.handleSigninClick();
  }
  return (
    <Route>
      {
        () => props.Loggedin ? <Component {...props} /> : <Redirect to='./' />
      }
    </Route>
)};

export default ProtectedRoute;