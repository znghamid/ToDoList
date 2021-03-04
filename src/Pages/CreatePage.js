import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Components/Header";

const CreatePage = () => {

  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [isAdding, setIsAdding] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAdding(true);
    setIsDisabled(true);

    let task = {
      title: title,
      body: body
    };

    axios.post("http://localhost:8888/posts/", task, {
      timeout: 4000
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <>
      <Header title="Add ToDo" url="/" icon="home" />
      <form className="create-todo" onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="title..." required />
        <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows="8" type="text" placeholder="body..." required />
        <input type="submit" className={isDisabled ? 'disabled btn' : 'btn'} value={!isAdding ? 'Add' : 'Adding...'} />
      </form>
    </>
  );
}

export default CreatePage;