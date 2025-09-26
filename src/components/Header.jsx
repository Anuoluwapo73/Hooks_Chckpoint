import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

//Header component
const Header = () => {
  return (
    <>
      <div>
        <div className="header-name">
          <FontAwesomeIcon
            icon={faVideo}
            style={{
              width: "80px",
              height: "60px",
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "10px",
            }}
            className="svg"
          />
          <h1>MovieSpace</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
