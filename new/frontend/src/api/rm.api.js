export async function getCharacters(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${id}`
    );
    const json = await response.json();
    const data = JSON.stringify(json);
    const formated = JSON.parse(data);
    return formated.results;
    // updateCharacterCardColors(data);
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}
