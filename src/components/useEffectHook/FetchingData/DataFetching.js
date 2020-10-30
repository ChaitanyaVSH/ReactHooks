import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css";

function DataFetching() {
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        getPosts(response.data);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <h2 key={post.id} className="postcontainer">
          {post.title}
        </h2>
      ))}
    </div>
  );
}

export default DataFetching;
