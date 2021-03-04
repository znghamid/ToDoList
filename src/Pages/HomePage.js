import { useEffect, useState } from "react";
import Header from "../Components/Header";
import ToDo from "../Components/ToDo";


const HomePage = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();
    fetch("http://localhost:8888/posts", { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        setTask(data);
        if (task.length === 0) {
          setTitle("No Task's to do");
        } else {
          setTitle("All ToDo's");
        }
        setIsPending(false);
        setErrorFetch(null);
      })
      .catch(err => {
        if (err.message === 'AbortError') {
          // 
        } else {
          setErrorFetch(err.message);
          setIsPending(false);
        }
      });
  }, [task]);

  return (
    <>
      <Header title={title} url="/create" icon="addNew" />
      { errorFetch && <div>{errorFetch}</div>}
      { isPending && <div>loading...</div>}
      { task && <ToDo task={task} />}
    </>
  );
}

export default HomePage;