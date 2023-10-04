import React, { useState } from "react";
import "./App.css";
import ListeFilms from "./components/FilmList";
import Filtrer from "./components/Filter";

function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      image: "data:image/jpeg;base64,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",
      titre: "Film 2",
      description: "Description du Film 2",
      posterURL: "URL_du_poster_2",
      note: 7.5,
    },
    {
      id: 2,
      image: "URL_de_l_image_2",
      titre: "Film 2",
      description: "Description du Film 2",
      posterURL: "URL_du_poster_2",
      note: 7.5,
    },
    {
      id: 3,
      image: "URL_de_l_image_3",
      titre: "Film 3",
      description: "Description du Film 3",
      posterURL: "URL_du_poster_3",
      note: 6.8,
    },
  ]);

  const [filtre, setFiltre] = useState({ titre: "", note: "" });
  const [nouveauFilm, setNouveauFilm] = useState({
    image: "",
    titre: "",
    description: "",
    posterURL: "",
    note: "",
  });

  const ajouterFilm = (nouveauFilm) => {
    setFilms([...films, { id: films.length + 1, ...nouveauFilm }]);
    setNouveauFilm({
      image: "",
      titre: "",
      description: "",
      posterURL: "",
      note: "",
    });
  };

  const filtrerFilms = ({ titre, note }) => {
    setFiltre({ titre, note });
  };

  const filmsFiltres = films.filter((film) => {
    return (
      film.titre.toLowerCase().includes(filtre.titre.toLowerCase()) &&
      (filtre.note === "" || film.note >= parseFloat(filtre.note))
    );
  });

  return (
    <div className="App">
      <h1>Cinéma MAJESTIC</h1>
      <Filtrer onFilter={filtrerFilms} />
      <ListeFilms films={filmsFiltres} />
      <div className="ajouter-film">
        <h2>Ajouter un nouveau film</h2>
        <form>
          <input
            type="url"
            placeholder="URL de l'image"
            value={nouveauFilm.image}
            onChange={(e) =>
              setNouveauFilm({ ...nouveauFilm, image: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Titre"
            value={nouveauFilm.titre}
            onChange={(e) =>
              setNouveauFilm({ ...nouveauFilm, titre: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={nouveauFilm.description}
            onChange={(e) =>
              setNouveauFilm({ ...nouveauFilm, description: e.target.value })
            }
          />
          <input
            type="url"
            placeholder="URL du poster"
            value={nouveauFilm.posterURL}
            onChange={(e) =>
              setNouveauFilm({ ...nouveauFilm, posterURL: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Note"
            value={nouveauFilm.note}
            onChange={(e) =>
              setNouveauFilm({ ...nouveauFilm, note: e.target.value })
            }
          />
          <button type="button" onClick={() => ajouterFilm(nouveauFilm)}>
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
