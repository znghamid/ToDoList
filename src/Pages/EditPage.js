import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../Components/Header";

const EditPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [taskId, setTaskId] = useState(null);

  const [isAdding, setIsAdding] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAdding(true);
    setIsDisabled(true);

    let task = {
      title: title,
      body: body,
      id: taskId
    };

    axios.put(`http://localhost:8888/posts/${task.id}`, task, {
      timeout: 4000
    }).then(() => {
      history.push('/');
    });
  }

  useEffect(() => {
    axios.get(`http://localhost:8888/posts/${id}`, {
      timeout: 4000
    }).then(res => {
      const data = res.data;
      setTitle(data.title);
      setBody(data.body);
      setTaskId(data.id);
    })
  }, []);

  return (
    <>
      {taskId &&
        <>
          <Header title={`Edit ${title}`} url="/" icon="home" />
          <form className="create-todo" onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="title..." required />
            <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows="8" type="text" placeholder="body..." required />
            <input type="submit" className={isDisabled ? 'disabled btn' : 'btn'} value={!isAdding ? 'Add' : 'Adding...'} />
          </form>
        </>
      }
    </>
  );
}

export default EditPage;