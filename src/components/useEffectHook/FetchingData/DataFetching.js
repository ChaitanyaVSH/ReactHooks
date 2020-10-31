import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css";

function DataFetching() {
  const [post, getPost] = useState({});
  const [id, setId] = useState(0);

  const inputRef = React.createRef();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        getPost(response.data);
      })
      .catch(() => {});
  }, [id]);

  const handleClick = () => {
    // console.log(inputRef.current.value);
    // console.log("id: " + inputRef.current.value);
    setId(inputRef.current.value);
  };

  return (
    <div>
      <h1>Posts</h1>
      <input type="text" name="postid" placeholder="Enter id" ref={inputRef} />
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
