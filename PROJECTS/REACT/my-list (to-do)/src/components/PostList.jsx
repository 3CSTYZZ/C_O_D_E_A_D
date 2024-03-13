import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, remove }) => {
  return (
    <>
      <h1 style={{ color: "cyan" }}>{title}</h1>

      {posts.map((post, indexID) => (
        <PostItem
          remove={remove}
          index={indexID + 1}
          post={post}
          key={post.id}
        />
      ))}
    </>
  );
};
