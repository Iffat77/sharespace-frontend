import React from "react";
import { useState, useEffect } from "react";
import "./postComp.css";

export default function PostComp({ posts, setPosts }) {
  return (
    <div className="user-feed-holder">
      <div className="user-feed-main-cont">
        <div className="user-feed-container">
            {posts &&
              posts.map((post) =>
                <div className="user-feed">
                <p >{post}</p>
                </div>
              )}
          </div>
      </div>
    </div>
  );
}
