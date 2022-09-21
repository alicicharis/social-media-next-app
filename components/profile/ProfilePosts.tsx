import { Fragment, useState } from "react";

import Image from "next/image";
import classes from "./ProfilePosts.module.css";
import photo from "../../public/myphoto.jpg";

const ProfilePosts: React.FC<any> = (props) => {
  return (
    <Fragment>
      <h1 className={classes["profile-posts-title"]}>Posts</h1>
      <ul className={classes["profile-posts"]}>
        {props.posts.map((item: any) => (
          <li key={item._id} className={classes["profile-post"]}>
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
                <p>{item.userName}</p>
                <p>{item.date}</p>
              </div>
            </div>
            <span className={classes["post-span"]}></span>
            <p>{item.postText}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProfilePosts;
