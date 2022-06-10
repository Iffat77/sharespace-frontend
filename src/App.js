import "./App.css";
import Landing from "./screens/Landing.jsx";
import Profile from "./screens/Profile.jsx";
import SignIn from "./screens/SignIn.jsx";
import Feed from "./screens/Feed.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./HOC/Layout";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/posts/")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, [user, toggle]);
  // console.log(isAuthenticated)
  // console.log(user)
  // console.log(posts)

  return (
    <div>
      <Layout
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      >
      <Routes>
        <Route path='/' element={<Landing  isAuthenticated={isAuthenticated} />}/>
        <Route path='/signin' element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} setToggle={setToggle}/>}/>
        <Route path='/profile' element={ isAuthenticated ? (<Profile user={user} setUser={setUser} posts={posts} setPosts={setPosts} />) : (<Navigate to="/" />)}/>
        <Route path='/feed' element={<Feed isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} posts={posts} /> } />
        </Routes>
      </Layout>
    </div>
    


  );
}

export default App;

