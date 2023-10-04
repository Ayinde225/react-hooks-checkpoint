import React, { useState } from "react";

function Filtrer({ onFilter }) {
  const [filtreTitre, setFiltreTitre] = useState("");
  const [filtreNote, setFiltreNote] = useState("");

  const handleFiltrer = () => {
    onFilter({ titre: filtreTitre, note: filtreNote });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter par titre"
        value={filtreTitre}
        onChange={(e) => setFiltreTitre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter par note"
        value={filtreNote}
        onChange={(e) => setFiltreNote(e.target.value)}
      />
      <button onClick={handleFiltrer}>Filtrer</button>
    </div>
  );
}

export default Filtrer;
