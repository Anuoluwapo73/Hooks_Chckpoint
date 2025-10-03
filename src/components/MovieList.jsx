import React from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";

// Movie component
const MovieList = ({ movies }) => {
  return (
    <>
      <h1 style={{ width: "100%", paddingLeft: "13px" }}>Movies</h1>
      <div className="movie-list">
        {movies.map((movieItem) => (
          <div
            key={movieItem.id}
            to={`/movies/${movieItem.title
              .trim()
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <MovieCard movie={movieItem} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
