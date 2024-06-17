import { IPost } from '../../../types';

interface Props{
  post:IPost
}
const Post:React.FC<Props> = ({post}) => {
  return (
    <div className="border border-5 mb-3 p-2 border rounded">
      <p><strong>Author:</strong>{post.author}</p>
      <p><strong>Message:</strong>{post.message}</p>
    </div>
  );
};

export default Post;