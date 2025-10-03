import { Link } from "react-router-dom";

//Moviecard component
const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card roboto">
        <img src={movie.posterURL} alt={movie.title} />

        <div className="title-rate">
          <h2>{movie.title}</h2>
          <span>{movie.rating}</span>
        </div>
        <p>{movie.description}</p>
      </div>
        <Link style={{textDecoration:"none"}}
          to={`/movies/${movie.title
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          <button className="watch-btn">
            Watch Trailer
          </button>
        </Link>
    </>
  );
};

export default MovieCard;
