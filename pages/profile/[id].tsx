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
import { getSession } from "next-auth/react";
import { PostContextProvider } from "../../store/PostContext";

const ProfilePage: NextPage<any> = ({ data }) => {
  const userName = data.userName;

  return (
    <Fragment>
      <Navigation />
      <Profile>
        <Info userName={userName} />
        <PostContextProvider>
          <ProfileForm />
          <ProfilePosts posts={data.posts} />
        </PostContextProvider>
      </Profile>
    </Fragment>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const userName = context.params!.id;

  // const response = await getPaths(userName);

  const posts = await getPosts(userName);

  const data = {
    posts: JSON.parse(JSON.stringify(posts)),
    userName,
  };

  return {
    props: { data },
  };
};
