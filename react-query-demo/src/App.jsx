import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent'
import './App.css'

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <button onClick={() => setShowPosts(!showPosts)}>
          Toggle Posts
        </button>
        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
