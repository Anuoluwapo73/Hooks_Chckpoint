import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

//Movie component
const MovieList = ({ movies }) => {
  return (
    <>
      <div className="movie-list">
        <br/><h1 style={{width: "100%", paddingLeft:"13px"}}>Movies</h1>
        {movies.map((movieItem, index) => (
          <MovieCard key={index} movie={movieItem} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
