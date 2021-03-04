import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const ResultPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();
    fetch(`http://localhost:8888/posts/${id}`, {
      signal: abortCont.signal
    })
      .then(res => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setTask(data);
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
  }, []);

  return (
    <>
      { task &&
        <>
          <Header title={`${task.title}`} url="/" icon="home" />
          <article key={task.id}>
            <p>{task.body}</p>
          </article>
        </>
      }
      { errorFetch && <div>{errorFetch}</div>}
      { isPending && <div>loading...</div>}
    </>
  );
}

export default ResultPage;