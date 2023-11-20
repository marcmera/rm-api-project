import { useEffect, useState } from "react";
import { getCharacters } from "../api/rm.api";
import { getColors } from "../api/jsonplaceholder.api";
import { useContext } from "react";
import { CharacterContext } from "../pages/CharacterPage";

export function CharactersList() {

  const [character, setCharacters] = useState([]);
  const [color, setColors] = useState([]);
  const  [loading, setLoading] = useState(false); 
  const { state } = useContext(CharacterContext);

  useEffect(() => {
    async function loadCharacters() {
      try {
        setLoading(true); 

        let first, second = false; 

        await getCharacters(state.page).then((res) => setCharacters(res)).finally(() => first = true);
        await getColors().then((res) => setColors(res)).finally(() => second = true);

        if(first && second) {
          setLoading(false); 
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    }
    loadCharacters();

    window.scrollTo(0, 0);
  }, [state.page]);

  function speakText(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }

  if(loading) return <div>
    Cargando...
  </div>

  return (
    <main className="App">
      <div className="cards">
        {character.map((character) => (
          <div key={character.id} className="card">
            <h1 id="text-to-speak" className="text-2xl p-5 name text-ellipis truncate" title={ character.name }>
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
