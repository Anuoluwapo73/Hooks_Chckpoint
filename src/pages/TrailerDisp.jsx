import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TrailerDisp = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate()

  // find the movie that matches the URL param
  const movie = movies.find(
    (m) => m.title.trim().toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!movie) {
    return <h2>Movie not found</h2>;
  }
  return (
    <div className="trailerDisp">
      <h2>{movie.title}</h2>
      {/* <img src={movie.posterURL} /> */}
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button className="watch-btn back" onClick={() => navigate(-1)}>⬅ Back</button>
    </div>
  );
};

export default TrailerDisp;
