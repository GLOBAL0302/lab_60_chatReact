import { IPost } from '../../../types';

const convertDateTime = (value:string) => {
  let fullDate = new Date(Date.parse(value))
  let twoDigitMonth = fullDate.getMonth() + '';
  if (twoDigitMonth.length == 1)
    twoDigitMonth = '0' + twoDigitMonth;
  let twoDigitDate = fullDate.getDate() + '';
  if (twoDigitDate.length == 1)
    twoDigitDate = '0' + twoDigitDate;
  return twoDigitDate + '/' + twoDigitMonth + '/'
    + fullDate.getFullYear() + " "
    + (fullDate.getHours() > 9?fullDate.getHours() : "0" + fullDate.getHours())
    + ":" + (fullDate.getMinutes() > 9?fullDate.getMinutes() : "0" + fullDate.getMinutes)  + ":"
    + (fullDate.getSeconds() > 9?fullDate.getSeconds() : "0" + fullDate.getSeconds())
};

interface Props {
  post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {

  convertDateTime(post.datetime)
  return (
    <div className='border border-5 mb-3 p-2 border rounded'>
      <p><strong>Author:</strong>{post.author}</p>
      <p><strong>Message:</strong>{post.message}</p>
      <p><strong>Time:</strong>{convertDateTime(post.datetime)}</p>
    </div>
  );
};

export default Post;