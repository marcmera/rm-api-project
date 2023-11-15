import { useState, useEffect } from "react";

import { getCharacters } from "./api/rm.api";
import { getColors } from "./api/jsonplaceholder.api";

function App() {
  const [character, setCharacters] = useState([]);
  const [color, setColors] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function loadCharacters() {
      try {
        const res = await getCharacters(page);
        setCharacters(res);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    }
    // async function loadColors() {
    //   try {
    //     const res = await getColors();
    //     setColors(res);
    //   } catch (error) {
    //     console.error("Error fetching colors:", error);
    //   }
    // }
    loadCharacters();
    // loadColors();
  }, [page]);

  // function colorList() {
  //   return color.map((color) => (
  //     <div key={color.id}>
  //       <h1>{color.title}</h1>
  //     </div>
  //   ));
  // }
  function speakText(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
  return (
    <main className="App">
      <h1 className="text-6xl text-center p-16">Characters</h1>
      <div className="card">
        {character.map((character) => (
          <div key={character.id}>
            <h1 id="text-to-speak" className="text-2xl">
              {character.name}
            </h1>
            <img src={character.image} alt={character.name} />
            <button onClick={() => speakText(character.name)}>Leer</button>
          </div>
        ))}
        <div className="w-[1200px] flex justify-around ">
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
