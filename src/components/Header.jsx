import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

//Header component
const Header = ({ setSearch, setRate }) => {
  return (
    <>
      <div className="header">
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
          />
          <h1>MovieSpace</h1>
        </div>
        <Filter setSearch={setSearch} setRate={setRate} />
      </div>
    </>
  );
};

export default Header;
