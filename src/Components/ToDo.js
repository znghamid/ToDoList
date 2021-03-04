import { faCalendarCheck, faEdit, faEye, faTasks, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const ToDo = ({ task }) => {

  const history = useHistory();

  const [doneTask, setDoneTask] = useState([]);
  const [progressTask, setProgressTask] = useState([]);

  useEffect(() => {
    setDoneTask(task.filter((todo) => todo.done));
    setProgressTask(task.filter((todo) => !todo.done));
  }, [task])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8888/posts/${id}`)
      .then(() => {
        history.push('/');
      });
  }

  const handleDone = (data) => {
    let task = { "title": data.title, "body": data.body, "done": true };
    axios.put(`http://localhost:8888/posts/${data.id}`, task, {
      timeout: 4000
    }).then(() => {
      history.push('/');
    }).catch(err => {
      if (axios.isCancel(err)) {
        console.log('axois cancle');
      }
    });
  }

  const handleNotDoned = (data) => {
    let task = { "title": data.title, "body": data.body, "done": false };
    axios.put(`http://localhost:8888/posts/${data.id}`, task, {
      timeout: 4000
    }).then(() => {
      history.push('/');
    }).catch(err => {
      if (axios.isCancel(err)) {
        console.log('axois cancle');
      }
    });
  }

  return (
    <div className="todo-list">

      {progressTask.length !== 0 && <h4>
        <FontAwesomeIcon icon={faTasks} />
        <span>in Progress</span>
        </h4>
      }

      {progressTask.map((todo) => (!todo.done &&

        // When in progress
        <div className="todo" key={todo.id}>
          <nav>
            <h3 onClick={() => handleDone(todo)}>{todo.title}</h3>
            <div>
              <Link to={`/result/${todo.id}`} className="show-button"><FontAwesomeIcon icon={faEye} /></Link>
              <Link to={`/edit/${todo.id}`} className="edit-button"><FontAwesomeIcon icon={faEdit} /></Link>
              <button className="trash-button" onClick={() => handleDelete(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
          </nav>
          <p>{(todo.body).slice(0, 70) + ' ...'}</p>
        </div>

      ))}

      {doneTask.length !== 0 && <h4>
        <FontAwesomeIcon icon={faCalendarCheck} />
        <span>Doned</span>
        </h4>
      }

      {doneTask.map((todo) => (todo.done &&

        // When Done ...
        <div className="todo done" key={todo.id}>
          <nav>
            <h3 className="done" onClick={() => handleNotDoned(todo)}>{todo.title}</h3>
          </nav>
          <p className="done">{(todo.body).slice(0, 70) + ' ...'}</p>
        </div>

      ))}
    </div>
  );
}

export default ToDo;