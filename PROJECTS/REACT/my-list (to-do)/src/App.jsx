import { useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML",
      body: "Descr",
    },
    {
      id: 2,
      title: "CSS",
      body: "Descr",
    },
    {
      id: 3,
      title: "JavaScript",
      body: "Descr",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (postDelete) => {
    setPosts(posts.filter((postCurrent) => postCurrent.id !== postDelete.id));
  };

  return (
    <>
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={"Basic lvl"} />
      ) : (
        <h2 style={{ textAlign: "center" }}>Posts are not found</h2>
      )}
    </>
  );
}

export default App;
