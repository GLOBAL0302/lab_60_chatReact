import './App.css';
import { useEffect, useState } from 'react';
import { IPost } from './types';
import PostForm from './Components/PostForm/PostForm';
import Posts from './Components/Posts/Posts';


let url: string = 'http://146.185.154.90:8000/messages';
const getTime = async ()=>{
  const response = await fetch(url)
  const data = await response.json()
  url+= "?datetime=" + (data[data.length - 1]).datetime
  return url
}
getTime().then(response => url= response)


const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [lastTime, setLastTime] = useState<string>('');


  useEffect(() => {

    const interval = setInterval(async ()=>{
      const response = await fetch(url);
      const data = await response.json()
      if(data.length){
        setLastTime(data[data.length - 1].datetime)
      }
      setPosts(data)
    }, 3000)

    return ()=>{
      clearInterval(interval)
    }
  }, [lastTime]);
  return (
    <>
      <PostForm
      />
      <Posts posts={posts}/>
    </>
  );
};

export default App;
