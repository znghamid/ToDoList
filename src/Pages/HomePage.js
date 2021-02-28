import Header from "../Components/Header";

const HomePage = () => {
  return (
    <>
      <Header title="All ToDo's" url="/create" icon="addNew" />
      <div className="modal">
        <p>body all</p>
      </div>
    </>
  );
}

export default HomePage;