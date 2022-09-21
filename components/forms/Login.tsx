import { useRouter } from "next/router";
import React, { Fragment, useContext, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

import classes from "./SignUp.module.css";
import DisplayContext from "../../store/FormContext";
import Button from "../UI/Button";

const Login: React.FC = () => {
  const [userValid, setUserValid] = useState<boolean>(true);

  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const displayCtx = useContext(DisplayContext);

  const clickHandler = () => {
    displayCtx?.setDisplay();
  };
  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    const session = await getSession();
    if (!result?.error) {
      setUserValid(true);
      console.log("Ovo gledaj", session);
      router.push(`/profile/${session!.user!.email}`);
      return;
    }

    setUserValid(false);
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <label className={classes.label} htmlFor="email">
            Email
            <input className={classes.input} type="email" ref={emailInputRef} />
          </label>
          <label className={classes.label} htmlFor="password">
            Password
            <input
              className={classes.input}
              type="password"
              ref={passwordInputRef}
            />
          </label>
          {!userValid && (
            <p className={classes.error}>No User With That Credentials!</p>
          )}
          <Button>Log In</Button>
          <p>
            {" "}
            Do Not Have An Account ?{" "}
            <span onClick={clickHandler} className={classes.span}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
