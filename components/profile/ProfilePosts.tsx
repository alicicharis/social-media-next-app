import Image from "next/image";
import { Fragment } from "react";
import classes from "./ProfilePosts.module.css";
import photo from "../../public/myphoto.jpg";

// const DUMMY_POSTS = [
//   {
//     name: "Haris Alicic",
//     date: "October 9, 2001",
//     post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequidolorum provident nulla ipsam, animi ipsa consequuntur sapienteodit! Saepe expedita fugiat odit nisi sapiente ea nesciunt istepossimus a vitae!",
//   },
//   {
//     name: "Haris ",
//     date: "October 9, 2001",
//     post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequidolorum provident nulla ipsam, animi ipsa consequuntur sapienteodit! Saepe expedita fugiat odit nisi sapiente ea nesciunt istepossimus a vitae!",
//   },
// ];

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
                <p>Haris Alicic</p>
                <p>October 9, 2001</p>
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
