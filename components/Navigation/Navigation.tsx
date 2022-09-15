import classes from "./Navigation.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";
import React from "react";

const Navigation: React.FC = () => {
  const logoutHandler = () => {
    signOut();
  };

  return (
    <div className={classes.nav}>
      <Link href="/">
        <a className={classes.link}>Profile</a>
      </Link>
      <div className={classes.right}>
        <Link href="/success">
          <a className={classes.link}>News</a>
        </Link>
        <Link href="/">
          <a className={classes.link} onClick={logoutHandler}>
            Logout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
