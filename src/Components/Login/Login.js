import React from 'react';
import { Link, useHistory,useLocation } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    
  const {signInUsingGoogle,user, setIsLoading} = useAuth();
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location?.state.from;

  console.log(redirect_uri);

  const googleLogin = () => {

    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setIsLoading(false);
      })
      .catch((error) => {
        
      });
  }

    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-25">
          <h2 className="text-primary">Login</h2>
          <form onSubmit="">
            <label htmlFor="name">Name:</label>
            <input
              className="w-100 mb-2"
              type="text"
              id="name"
              placeholder="Name"
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              onBlur=""
              className="w-100 mb-2"
              type="email"
              id=""
              placeholder="Email"
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              onBlur=""
              className="w-100"
              type="password"
              id=""
              placeholder="Password"
              required
            />
            <br />
            <br />
            <br />
            <input
              className=" bg-danger border-0 btn-outline-light rounded-1 w-100"
              type="submit"
              value="Submit"
            />
          </form>
          <div>------------or-------------</div>
          <p>
            <span>
              Create New Account?<Link to="/register"> Sign up</Link>
            </span>
          </p>
          <span className="text-danger"></span>
          <br />
          <button onClick={googleLogin} className="btn btn-danger">
            Sign In With Google
          </button>
        </div>
      </div>
    );
};

export default Login;