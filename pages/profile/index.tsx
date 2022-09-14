import type { NextPage } from "next";
import { Fragment } from "react";

import Navigation from "../../components/Navigation/Navigation";
import Profile from "../../components/profile/Profile";
import Info from "../../components/profile/Info";
import ProfileForm from "../../components/profile/ProfileForm";
import ProfilePosts from "../../components/profile/ProfilePosts";

const ProfilePage: NextPage = () => {
  return (
    <Fragment>
      <Navigation />
      <Profile>
        <Info />
        <ProfileForm />
        <ProfilePosts />
      </Profile>
    </Fragment>
  );
};

export default ProfilePage;
