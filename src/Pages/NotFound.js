import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="modal not-found">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" >Go Home</Link>
    </div>
  );
}
 
export default NotFound;