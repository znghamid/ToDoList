import { faHome, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Header = ( { title, url, icon } ) => {

  if(icon === 'home'){
    icon = faHome;
  } else if(icon === 'addNew') {
    icon = faPlusCircle;
  }

  return (
    <header>
      <nav>
        <h2>{title}</h2>
        <Link to={url}>
          <FontAwesomeIcon icon={icon} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;