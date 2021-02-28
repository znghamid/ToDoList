import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const EditPage = () => {
  const {id} = useParams();
  return (
    <>
      <Header title={`Edit ${id}`} url="/" icon="home" />
      <div className="modal">
        <p>body edit</p>
      </div>
    </>
  );
}

export default EditPage;