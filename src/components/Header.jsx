import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

//Header component
const Header = () => {
  return (
    <>
      <div className="header-name">
        <div>
          <FontAwesomeIcon icon={faVideo} className="svg" />
        </div>
        <h1>MovieSpace</h1>
      </div>
    </>
  );
};

export default Header;
