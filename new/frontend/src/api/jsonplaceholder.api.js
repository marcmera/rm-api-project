export async function getColors() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    // Como antes, extraer y aplicar los colores
    return data;
    // updateCharacterCardColors(data);
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
}
