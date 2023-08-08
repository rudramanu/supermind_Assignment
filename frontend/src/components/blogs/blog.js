import React, { useEffect, useState } from "react";
import "./blogs.css";
const token = localStorage.getItem("token");
const url = "http://3.6.39.101:9800/post/posts";
const Blog = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        url,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        },
        []
      );
      const data = await res.json();
      // console.log("hello");
      // console.log(data);
      setPost(data);
    };
    fetchData();
  });
  return (
    <div>
      <a href="/create">
        <button>Create</button>
      </a>
      {post.map((el) => (
        <div key={el.id} className="navbar">
          <h3>{el.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blog;
