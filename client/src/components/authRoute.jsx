import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUser } from "../contexts/usercontext";

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  const userId = useUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default AuthorizedRoute;
