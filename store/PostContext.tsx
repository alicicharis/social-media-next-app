import React, { useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

interface PostContext {
  posts: object[];
  initatePosts: () => void;
  newPosts: () => void;
}

const PostsContext = React.createContext<PostContext | null>(null);

export const PostContextProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<object[]>([]);

  const initatePosts = (posts: object[]) => {
    setPosts(posts);
  };

  const updatePosts = (newPost: object) => {
    setPosts((prevState) => [...prevState, newPost]);
  };

  const context: any = {
    posts,
    initatePosts: initatePosts,
    newPosts: updatePosts,
  };

  return (
    <PostsContext.Provider value={context}>{children}</PostsContext.Provider>
  );
};

export default PostsContext;
