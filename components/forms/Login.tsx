import React, { Fragment, useContext } from "react";

import classes from "./SignUp.module.css";
import DisplayContext from "../../store/FormContext";
import Button from "../UI/Button";

const Login = () => {
  const displayCtx = useContext(DisplayContext);

  const clickHandler = () => {
    displayCtx?.setDisplay();
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <form onSubmit={formSubmitHandler} className={classes.form}>
          {/* <label className={classes.label} htmlFor="username">
            Username
            <input className={classes.input} type="text" />
          </label> */}
          <label className={classes.label} htmlFor="email">
            Email
            <input className={classes.input} type="email" />
          </label>
          <label className={classes.label} htmlFor="password">
            Password
            <input className={classes.input} type="text" />
          </label>
          <Button>Log In</Button>
          <p>
            {" "}
            Do Not Have An Account ?{" "}
            <span onClick={clickHandler} className={classes.span}>
              Sign In
            </span>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
