import React, { useEffect, useState } from "react";

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
    <div>
      <h1>Feed Screen</h1>
      <div>
        {posts &&
          posts.map((post) => (
            <div>
              <h3>{post.post}</h3>
              <div>
                {names
                  .filter((name) => {
                    return name.user_id === post.profile;
                  })
                  .map((prof, index) => (
                    <p key={index}>{prof.first_name}</p>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
