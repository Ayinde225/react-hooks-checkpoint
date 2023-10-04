import React from "react";
import FilmCard from "./FilmCard";

function ListeFilms({ films }) {
  return (
    <div className="liste-films">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default ListeFilms;
