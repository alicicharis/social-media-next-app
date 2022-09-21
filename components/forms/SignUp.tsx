import { Fragment, useContext, useRef, useState } from "react";
import { useRouter } from "next/router";

import classes from "./SignUp.module.css";
import DisplayContext from "../../store/FormContext";
import Button from "../UI/Button";

async function createUser(userName: string, email: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ userName, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const SignUp: React.FC = () => {
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [userNameIsValid, setUserNameIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const userNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const displayCtx = useContext(DisplayContext);

  const clickHandler = () => {
    displayCtx?.setDisplay();
  };

  const formSubmitHandler = async (event: React.FormEvent) => {
    setEmailIsValid(true);
    setUserNameIsValid(true);
    setPasswordIsValid(true);

    event.preventDefault();

    const enteredUserName = userNameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    try {
      const result = await createUser(
        enteredUserName,
        enteredEmail,
        enteredPassword
      );
      router.push(`/profile/${enteredEmail}`);
    } catch (error) {
      const errorMsg = error + "";

      if (errorMsg.includes("Username")) {
        setUserNameIsValid(false);
        setErrorMessage(errorMsg.slice(6));
      }
      if (errorMsg.includes("Email")) {
        setEmailIsValid(false);
        setErrorMessage(errorMsg.slice(6));
      }
      if (errorMsg.includes("Password")) {
        setPasswordIsValid(false);
        setErrorMessage(errorMsg.slice(6));
      }
    }
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <label className={classes.label} htmlFor="username">
            Username
            {!userNameIsValid && (
              <p className={classes.error}>{errorMessage}</p>
            )}
            <input
              className={classes.input}
              type="text"
              ref={userNameInputRef}
            />
          </label>
          <label className={classes.label} htmlFor="email">
            Email
            {!emailIsValid && <p className={classes.error}>{errorMessage}</p>}
            <input className={classes.input} type="email" ref={emailInputRef} />
          </label>
          <label className={classes.label} htmlFor="password">
            Password
            {!passwordIsValid && (
              <p className={classes.error}>{errorMessage}</p>
            )}
            <input
              className={classes.input}
              type="password"
              ref={passwordInputRef}
            />
          </label>
          <Button>Sign Up</Button>

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
