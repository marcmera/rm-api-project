import { useState, useEffect } from "react";

import { getCharacters } from "./api/rm.api";
import { getColors } from "./api/jsonplaceholder.api";

function App() {
  const [character, setCharacters] = useState([]);
  const [color, setColors] = useState([]);
<<<<<<< HEAD
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.addEventListener("load", () => {});
    async function loadCharacters() {
      const res = await getCharacters(page);
      console.log(res);
      setCharacters(res);
=======
  useEffect(() => {
    async function loadCharacters() {
      const res = await getCharacters();
      const name = res;
      console.log(name);
      // setCharacters(res);
>>>>>>> 29ea3dc466a8d95d7fa5722f719f0d42f5bdd6ec
    }
    async function loadColors() {
      const res = await getColors();
      setColors(res);
    }
    loadCharacters();
    // loadColors();
<<<<<<< HEAD
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
    <main>
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
=======
  }, []);
  return <div>hola</div>;
>>>>>>> 29ea3dc466a8d95d7fa5722f719f0d42f5bdd6ec
}

export default App;
