import { Fragment, useRef } from "react";

import classes from "./ProfileForm.module.css";

const ProfileForm: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
  };

  return (
    <Fragment>
      <h1 className={classes["profile-title"]}>How Was Your Day ?</h1>
      <form onSubmit={formSubmitHandler}>
        <input
          className={classes["profile-input"]}
          type="text"
          placeholder="Your thoughts..."
          ref={textInputRef}
        />
      </form>
    </Fragment>
  );
};

export default ProfileForm;
