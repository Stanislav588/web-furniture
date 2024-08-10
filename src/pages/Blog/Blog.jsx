import React from "react";
import "./Blog.css";
import Header from "../../components/Header/Header";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import { headerName } from "../../assets/assets";
function Blog() {
  return (
    <>
      <Header {...headerName[3]} />
      <RecentBlog />
      <div>Blog</div>;
    </>
  );
}

export default Blog;
