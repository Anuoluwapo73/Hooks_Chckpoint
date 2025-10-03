import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import TrailerDisp from "./pages/TrailerDisp";

const AppRoutes = ({
  movies,
  filteredMovies,
  setMovies,
  setSearch,
  setRate,
}) => {
  return (
    <Routes>
      {/* Redirect root to /movies */}
      <Route path="/" element={<Navigate to="/movies" />} />

      {/* Movies List */}
      <Route
        path="/movies"
        element={
          <div style={{ margin: "0 auto", display: "flex" }}>
            <div className="container">
              <div className="header">
                <Header />
                <Filter setSearch={setSearch} setRate={setRate} />
              </div>
              <MovieList movies={filteredMovies} />
              <AddMovie movies={movies} setMovies={setMovies} />
            </div>
          </div>
        }
      />

      {/* Single Movie */}
      <Route path="/movies/:title" element={<TrailerDisp movies={movies} />} />
    </Routes>
  );
};

export default AppRoutes;
