export async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const json = await response.json();
    const data = JSON.stringify(json);
    return data;
    // updateCharacterCardColors(data);
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}
