import React from "react";

function FilmCard({ film }) {
  return (
    <div className="film-card">
      <img src={film.posterURL} alt={film.titre} />
      <h2>{film.titre}</h2>
      <p>{film.description}</p>
      <p>Note : {film.note}</p>
    </div>
  );
}

export default FilmCard;
