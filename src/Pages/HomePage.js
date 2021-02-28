import Header from "../Components/Header";
import ToDo from "../Components/ToDo";
import useFetch from "../hooks/useFetch";


const HomePage = () => {
  const {data: task, isPending, errorFetch} = useFetch('http://localhost:8000/posts');

  return (
    <>
      <Header title="All ToDo's" url="/create" icon="addNew" />
      { errorFetch && <div>{ errorFetch }</div> }
      { isPending && <div>loading...</div> }
      { task && <ToDo task={task} />}
    </>
  );
}

export default HomePage;