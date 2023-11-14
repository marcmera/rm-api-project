import { useState, useEffect } from "react";

import { getCharacters } from "./api/rm.api";
import { getColors } from "./api/jsonplaceholder.api";

function App() {
  const [character, setCharacters] = useState([]);
  const [color, setColors] = useState([]);
  useEffect(() => {
    async function loadCharacters() {
      const res = await getCharacters();
      const name = res;
      console.log(name);
      // setCharacters(res);
    }
    async function loadColors() {
      const res = await getColors();
      setColors(res);
    }
    loadCharacters();
    // loadColors();
  }, []);
  return <div>hola</div>;
}

export default App;
