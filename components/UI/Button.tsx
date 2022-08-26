import classes from "./Button.module.css";

type Props = {
  children: string;
};

const Button: React.FC<Props> = ({ children }) => {
  return <button className={classes.btn}>{children}</button>;
};

export default Button;
