import classes from "./Info.module.css";
import Image from "next/image";
import photo from "../../public/myphoto.jpg";
import { Fragment } from "react";

const Info: React.FC<any> = ({ userName }) => {
  return (
    <Fragment>
      <div className={classes.info}>
        <Image
          layout="fixed"
          className={classes["profile-image"]}
          src={photo}
          width={150}
          height={150}
          alt="profile picture"
        />

        <h1 className={classes["profile-name"]}>{userName}</h1>
      </div>
      <span className={classes.span}></span>
    </Fragment>
  );
};

export default Info;
