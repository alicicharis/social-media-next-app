import { Fragment, useRef } from "react";
import { getSession } from "next-auth/react";

import PostsContext from "../../store/PostContext";
import classes from "./ProfileForm.module.css";

const ProfileForm: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const postText = textInputRef.current!.value;

    const session = await getSession();

    const email = session?.user!.email;

    const userName = session!.user!.email;

    const date = new Date().toLocaleDateString();

    try {
      const response = await fetch("/api/profile-posts/profile-posts", {
        method: "POST",
        body: JSON.stringify({ email, postText, date, userName }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
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
