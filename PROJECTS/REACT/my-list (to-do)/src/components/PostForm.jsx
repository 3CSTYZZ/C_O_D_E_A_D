import React from "react";
import { useState } from "react";
import { MyInput } from "./UI/input/MyInput";
import { MyButton } from "./UI/button/MyButton";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState("");

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = { ...post, id: Date.now() };

    create(newPost);

    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Title"
      />

      <MyInput
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Description"
      />
      
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};
