import React from "react";
import { useState, useEffect } from "react";
import ProfileComp from "../components/ProfileComp";
import AddPost from "../components/AddPost";
import PostComp from "../components/PostComp";

function Profile({ user, posts, setToggle, setUser }) {

  const [userPosts, setUserPosts] = useState([]);
  const [post, setPost] = useState(null);

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

  // useEffect(() => {
  //   let userPostsData =
  //     posts &&
  //     user &&
  //     posts.filter(post => {
  //       return post.profile === user.profile.user_id;
  //     });
  //   setUserPosts(userPostsData);
  // }, [posts]);
  
  // console.log(user.profile.user_id)
  
  // console.log(posts[8].profile)
  // post.profile === user.profile.user_id

  useEffect(() => {
    let newArr = []
    let userPostsData =
      posts &&
      user &&
      posts.forEach(post => {
        if (post.profile === user.profile.user_id) {
       newArr.push(post.post)
        }});
      setUserPosts(newArr);
    }, [posts]);
    
    console.log(userPosts)



  
  return (
    <div className="profile-screen-container">
      <div className="profilecomp">
        <h1>Profile screen</h1>
        <div>
          <ProfileComp
            profile={profile}
            username={user?.username}
          />
          <AddPost
            setToggle={setToggle}
            user={user}
          />
          <PostComp
            posts={userPosts}
            setPost={setPost}
            user={user}
          />

        </div>
  </div>
    </div>
  );
}

export default Profile;