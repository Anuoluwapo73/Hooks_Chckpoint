import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

//Movie component
const MovieList = ({ movies }) => {
  return (
    <>
      <br />
      <h1 style={{ width: "100%", paddingLeft: "13px", paddingTop:"80px"}}>Movies</h1>
      <div className="movie-list">
        {movies.map((movieItem, index) => (
          <MovieCard key={index} movie={movieItem} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
