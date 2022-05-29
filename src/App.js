import { Route, Routes } from 'react-router-dom';
import './App.css';

import Landing from './screens/Landing/Landing';
import People from './screens/People/People';
import Navbar from './components/Navbar/Navbar';
import Profile from './screens/Profile/Profile';
import Feed from './components/Feed/Feed';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Profile /> */}
      {/* <Feed /> */}
      <Post />
      {/* <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/activeusers' element={<People />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes> */}
    </div>
  );
}

export default App;
