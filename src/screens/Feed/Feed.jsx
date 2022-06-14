import React, { useEffect, useState } from "react";
import './feed.css';

export default function Feed({ posts }) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/profile/all")
      .then((res) => res.json())
      .then((data) => {
        setNames(data);
      });
  }, []);

  return (
    <div className="feed-holder">
    <div className="feed-main-container">
      <div className="feed-container">
        {posts &&
          posts.map((post) => (
            <div className="all-feed">
              <h3 className="feed-text">{post.post}</h3>
              {names
                .filter((name) => {
                  return name.user_id === post.profile;
                })
                .map((prof, index) => (
                  <p className="poster-name" key={index}>{prof.first_name}</p>
                ))}
                {/* add post date field */}
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}
