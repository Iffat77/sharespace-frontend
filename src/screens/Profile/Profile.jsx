import React from "react";
import { useState, useEffect } from "react";
import ProfileComp from "../../components/ProfileComp/ProfileComp";
import AddPost from "../../components/AddPost/AddPost";
import PostComp from "../../components/PostComp";

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
  
// console.log(post.profile)
// console.log(user.profile.first_name)

  // useEffect(() => {
  //   let userPostsData =
  //     posts &&
  //     user &&
  //     posts.filter(post => {
  //       return post.profile === user.profile.user_id;
  //     });
  //   setUserPosts(userPostsData);
  // }, [posts]);

  
  return (
    <div className="profile-screen-container">
      <div className="profilecomp">
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