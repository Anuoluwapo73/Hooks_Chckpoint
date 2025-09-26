import React, { useState } from "react";
import MovieCard from "./MovieCard";

//Movie component
const MovieList = ({movies}) => {
  return (
    <>
      <div className="movie-list" >
        {movies.map((movieItem, index) => (
          <MovieCard key={index} movie={movieItem} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
