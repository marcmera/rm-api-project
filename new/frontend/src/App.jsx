import { useState, useEffect } from "react";

import { getCharacters } from "./api/rm.api";
import { getColors } from "./api/jsonplaceholder.api";

function App() {
  const [character, setCharacters] = useState([]);
  const [color, setColors] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.addEventListener("load", () => {});
    async function loadCharacters() {
      const res = await getCharacters(page);
      console.log(res);
      setCharacters(res);
    }
    async function loadColors() {
      const res = await getColors();
      setColors(res);
    }
    loadCharacters();
    // loadColors();
  }, [page]);
  // function characterList() {
  //   return
  //   ));
  // }
  function colorList() {
    return color.map((color) => (
      <div key={color.id}>
        <h1>{color.title}</h1>
      </div>
    ));
  }
  return (
    <main className="App">
      <h1 className="text-6xl text-center p-16">Characters</h1>
      <div className="card">
        {character.map((character) => (
          <div key={character.id}>
            <h1 className="text-2xl">{character.name}</h1>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
        <div className="w-screen br-red-500">
          <button className="btn" onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <button className="btn" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
