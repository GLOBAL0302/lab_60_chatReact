import './App.css';
import { useEffect, useState } from 'react';
import { IPost } from './types';
import PostForm from './Components/PostForm/PostForm';

const url: string = 'http://146.185.154.90:8000/messages';
const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [lastTime, setLastTime] = useState('');

  return (
    <>
      <PostForm />
    </>
  );
};

export default App;
