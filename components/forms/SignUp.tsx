import { Fragment, ReactFragment, useContext } from "react";

import classes from "./SignUp.module.css";
import DisplayContext from "../../store/FormContext";
import Button from "../UI/Button";

const SignUp = () => {
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
          <label className={classes.label} htmlFor="username">
            Username
            <input className={classes.input} type="text" />
          </label>
          <label className={classes.label} htmlFor="email">
            Email
            <input className={classes.input} type="email" />
          </label>
          <label className={classes.label} htmlFor="password">
            Password
            <input className={classes.input} type="text" />
          </label>
          <Button>Sign In</Button>

          <p>
            Already Have An Account ?{" "}
            <span onClick={clickHandler} className={classes.span}>
              Log In
            </span>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
