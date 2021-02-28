import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const ResultPage = () => {
  const {id} = useParams();
  return (
    <>
      <Header title={`${id}`} url="/" icon="home" />
      <div className="modal">
        <p>body result</p>
      </div>
    </>
  );
}
 
export default ResultPage;