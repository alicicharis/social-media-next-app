import Image from "next/image";
import { Fragment } from "react";
import classes from "./ProfilePosts.module.css";
import photo from "../../public/myphoto.jpg";

const ProfilePosts: React.FC = () => {
  return (
    <Fragment>
      <h1 className={classes["profile-posts-title"]}>Posts</h1>
      <div className={classes["profile-posts"]}>
        <div className={classes["profile-post"]}>
          <div className={classes["post-info"]}>
            <Image
              layout="fixed"
              className={classes["post-image"]}
              src={photo}
              alt="profile-photo"
              height={100}
              width={100}
            />
            <div className={classes["post-description"]}>
              <p>Haris Alicic</p>
              <p>October 9, 2001</p>
            </div>
          </div>
          <span className={classes["post-span"]}></span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            dolorum provident nulla ipsam, animi ipsa consequuntur sapiente
            odit! Saepe expedita fugiat odit nisi sapiente ea nesciunt iste
            possimus a vitae!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePosts;
