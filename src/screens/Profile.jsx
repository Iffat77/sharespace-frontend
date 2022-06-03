import React from "react";
import { useState, useEffect } from "react";
import ProfileComp from "../components/ProfileComp";

function Profile({ user, posts, setToggle, setUser }) {

  // const [userPosts, setUserPosts] = useState([]);
  // const [posts, setPosts] = useState(null);
  

  const [profile, setProfile] = useState({
    first_name: "",
    about: "",
  });

  useEffect(() => {
    if (user) {
      setProfile({
        username: user.username,
        about: user.profile.about,
      });
    }
  }, [user]);

  // console.log(user)
  // useEffect(() => {
  //   let userPostsData =
  //     posts &&
  //     user &&
  //     posts.filter(posts => {
  //       return posts.profile_id === user.profile.id;
  //     });
  //   setUserPosts(userPostsData);
  // }, [posts]);

  return (
    <div className="profile-screen-container">
      <div className="profilecomp">
        <h1>Profile screen</h1>
        <div>
          <ProfileComp
            profile={profile}
            username={user?.username}
          />
        </div>
  </div>
    </div>
  );
}

export default Profile;