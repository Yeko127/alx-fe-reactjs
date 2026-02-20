import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Login from './components/Login'
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog  Post 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/profile"
        element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
        }
        >
          <Route path="details" element={<ProfileDetails />}  />
          <Route path="settings" element={<ProfileSettings />}  />
        </Route>

        <Route path="/blog/:id" element={<BlogPost />}  />

        <Route path="login" element={<Login />}  />
      </Routes>
    </Router>

  );
    

}

export default App;
