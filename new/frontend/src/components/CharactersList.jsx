import { useEffect, useState } from "react";
import { getCharacters } from "../api/rm.api";
import { getColors } from "../api/jsonplaceholder.api";

export function CharactersList() {
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
      <div className="card">
        {character.map((character) => (
          <div key={character.id} className="">
            <h1 id="text-to-speak" className="text-2xl p-5">
              {character.name}
            </h1>
            <img src={character.image} alt={character.name} />
            <button onClick={() => speakText(character.name)}>Leer</button>
          </div>
        ))}
      </div>
    </main>
  );
}
