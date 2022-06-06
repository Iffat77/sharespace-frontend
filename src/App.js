import { Route, Routes } from 'react-router-dom';
import './App.css';

import Landing from './screens/Landing/Landing';
import People from './screens/People/People';
import Navbar from './components/Navbar/Navbar';
import Profile from './screens/Profile/Profile';
import Feed from './components/Feed/Feed';
import Post from './components/Post/Post';
import Userbox from './components/Userbox/Userbox';
import SignIn from './screens/SignIn/SignIn';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Profile /> */}
      {/* <Feed /> */}
      {/* <Post /> */}
      {/* <Userbox /> */}
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/signin' element={<SignIn
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          setUser={setUser}/>}/>
        <Route path='/activeusers' element={<People />}/>
        <Route path='/profile' element={<Profile
          setToggle={setToggle}
          posts={posts}
          user={user}
          setUser={setUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
