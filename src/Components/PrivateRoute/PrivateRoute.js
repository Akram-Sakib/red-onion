import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
import {Spinner} from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
