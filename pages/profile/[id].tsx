import type { NextPage } from "next";
import { Fragment } from "react";

import Navigation from "../../components/Navigation/Navigation";
import Profile from "../../components/profile/Profile";
import Info from "../../components/profile/Info";
import ProfileForm from "../../components/profile/ProfileForm";
import ProfilePosts from "../../components/profile/ProfilePosts";
import getPaths from "../../lib/paths";
import getPosts from "../../lib/posts";
import { GetServerSideProps } from "next";

const ProfilePage: NextPage<any> = ({ data }) => {
  const userName = data.userName;

  return (
    <Fragment>
      <Navigation />
      <Profile>
        <Info userName={userName} />
        <ProfileForm />
        <ProfilePosts posts={data.posts} />
      </Profile>
    </Fragment>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const email = context.params!.id;

  const response = await getPaths(email);

  const userName = response!.userName;

  const posts = await getPosts(email);

  const data = {
    posts: JSON.parse(JSON.stringify(posts)),
    userName,
  };

  return {
    props: { data },
  };
};
