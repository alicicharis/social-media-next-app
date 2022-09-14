import classes from "./Navigation.module.css";
import Link from "next/link";

const Navigation: React.FC = () => {
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
          <a className={classes.link}>Logout</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
