import { IPost } from '../../types';
import Post from './Post/Post';

interface Props {
  posts: IPost[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="border border-5 p-3 bg-body-secondary">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
