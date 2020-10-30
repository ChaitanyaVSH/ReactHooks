import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css";

function DataFetching() {
  const [post, getPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        getPost(response.data);
      })
      .catch(() => {});
  }, [idFromButton]);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleClick = () => {
    setIdFromButton(id);
  };

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        name="postid"
        value={id}
        placeholder="Enter id"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      <br />
      <hr />
      <h2>{post.title}</h2>
      {/* {posts.map((post) => (
        <h2 key={post.id} className="postcontainer">
          {post.title}
        </h2>
      ))} */}
    </div>
  );
}

export default DataFetching;
