import classes from "./Info.module.css";
import Image from "next/image";
import photo from "../../public/myphoto.jpg";
import { Fragment } from "react";

const Info: React.FC = () => {
  return (
    <Fragment>
      <div className={classes.info}>
        <Image
          className={classes["profile-image"]}
          src={photo}
          width={200}
          height={200}
          alt="profile picture"
        />

        <h1 className={classes["profile-name"]}>Haris Alicic</h1>
      </div>
      <span className={classes.span}></span>
    </Fragment>
  );
};

export default Info;
