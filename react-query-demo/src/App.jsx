import { useState } from 'react';
import PostsComponent from './components/PostsComponent'
import './App.css'

function App() {
  const [showPosts, setShowPosts] = useState(true);
  return (
    <div>
      <button onClick={() =>setShowPosts(!showPosts)}>
        Toggle Posts
      </button>
      {showPosts && <PostsComponent />}
    </div>
  );
}

export default App;
