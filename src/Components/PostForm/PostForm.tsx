import {useState } from 'react';
import { IPost } from '../../types';

const postInitialState = {
  message:"",
  author: ""
}

const PostForm = () => {
  const [myPost, setmyPost] = useState<IPost>({
    message: "",
    author: ""
  });

  const onChangeInfo = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setmyPost((prevState)=>({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onFormSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const data = new URLSearchParams();
    data.set("message",`${myPost.message}`)
    data.set("author",`${myPost.author}`)
    await fetch('http://146.185.154.90:8000/messages', {
      method:"post",
      body: data
    })


    setmyPost(postInitialState)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Author</span>
        <input
          onChange={onChangeInfo}
          value={myPost.author}
          id="author"
          name="author"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Message</span>
        <input
          onChange={onChangeInfo}
          value={myPost.message}
          id="message"
          name="message"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"/>
      </div>
      <button
        className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
