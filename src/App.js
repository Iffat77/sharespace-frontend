import "./App.css";
import Landing from "./screens/Landing.jsx";
import Profile from "./screens/Profile.jsx";
import SignIn from "./screens/SignIn.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./HOC/Layout";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/post/")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, [user, toggle]);
  console.log(isAuthenticated)
  console.log(user)

  return (
    <div>
      <Layout
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      >
      <Routes>
        <Route path='/' element={<Landing  isAuthenticated={isAuthenticated} />}/>
        <Route path='/signin' element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>}/>
        <Route path='/profile' element={<Profile user={user} setUser={setUser} />}/>
      </Routes>
      </Layout>
    </div>
    
  //  <div className="app">
  //   <Routes>
  //   <Route path='/' element={<Landing />} />
  //   </Routes>
    
  // </div> 
  


  );
}

export default App;

{/* <Routes>
<Route
    path="/"
    element={<Landing isAuthenticated={isAuthenticated} />}
  />
<Route
    path="/profile"
    element={
      isAuthenticated ? (
        <Profile
          setToggle={setToggle}
          posts={posts}
          user={user}
          setUser={setUser}
        />
      ) : (
        <Navigate to="/" />
      )
    }
  />
  <Route
    path="/signin"
    element={
      <SignIn
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      />
    }
  />

</Routes> */}