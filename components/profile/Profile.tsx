import classes from "./Profile.module.css";

interface props {
  children: React.ReactNode;
}

const Profile = (props: props) => {
  return <div className={classes.profile}>{props.children}</div>;
};

export default Profile;
