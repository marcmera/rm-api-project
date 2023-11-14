<<<<<<< HEAD
export async function getCharacters(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${id}`
    );
    const json = await response.json();
    const data = JSON.stringify(json);
    const formated = JSON.parse(data);
    return formated.results;
=======
export async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const json = await response.json();
    const data = JSON.stringify(json);
    return data;
>>>>>>> 29ea3dc466a8d95d7fa5722f719f0d42f5bdd6ec
    // updateCharacterCardColors(data);
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}
