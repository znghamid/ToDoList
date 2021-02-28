import { Link } from "react-router-dom";

const ToDo = ({ task }) => {
  return (
    <div className="todo-list">
      {task.map((todo) => (
        <Link to={`/result/${todo.id}`} className="todo" key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.body}</p>
        </Link>
      ))}
    </div>
  );
}

export default ToDo;