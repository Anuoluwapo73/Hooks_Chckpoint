import React, { useState } from "react";

const AddMovie = ({ movies, setMovies }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState(null);
  const [rating, setRating] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPosterURL(reader.result); // or setThumbnail(reader.result)
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAdd = () => {
    //Appending new movies

    if (!title || !description || !posterURL || rating === "") {
      alert("Please fill all fields before adding a movie.");
      return;
    }
    const newMovie = {
      title: title,
      description: description,
      posterURL: posterURL,
      rating: Number(rating) + "/10",
    };

    //Reset input boxes back to default
    setMovies([...movies, newMovie]);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };
  return (
    <>
      <div className="add-movie">
        <h1>Add New Movies</h1>
        <form>
          <fieldset className="input-box">
            <legend>Enter Your Movie Details</legend>
            <label htmlFor="image">Image link:</label>
            <br />
            <input
              type="file"
              accept="image/*"
              required
              placeholder="Upload your image here..."
              onChange={handleImage}
            />
            <br />
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              value={title}
              required
              placeholder="Enter your Movie Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label htmlFor="title">Rating:</label>
            <br />
            <input
              type="number"
              required
              value={rating}
              placeholder="Enter your Movie Rating..."
              max={10}
              min={1}
              onChange={(e) => setRating(e.target.value)}
            />
            <br />
            <label htmlFor="title">Desciption:</label>
            <br />
            <input
              type="text"
              required
              value={description}
              placeholder="Enter your Movie Description..."
              maxLength={300}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <button type="button" className="add-btn" onClick={handleAdd}>
              Add
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default AddMovie;
