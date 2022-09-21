import classes from "./Navigation.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const router = useRouter();
  const logoutHandler = (event: React.FormEvent) => {
    event.preventDefault();
    signOut();
    router.push("/success");
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
