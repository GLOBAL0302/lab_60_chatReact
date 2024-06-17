import { IPost } from '../../types';
import Post from './Post/Post';

interface Props{
  posts :IPost[]
}

const Posts:React.FC<Props> = ({posts}) => {
  return (
    <div>
      {posts.map(post =>(
        <Post
          key={post._id}
          post={post}/>
      ))}
    </div>
  );
};

export default Posts;