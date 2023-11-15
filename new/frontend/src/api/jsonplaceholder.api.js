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

function updateCharacterCardColors(colors) {
  // Seleccionar todas las fichas de personajes
  const characterCards = document.querySelectorAll(".card");
  // Asignar un color de fondo a cada ficha de personaje
  characterCards.forEach((card, index) => {
    // Aquí deberías tener una lógica para escoger un color basado en los datos obtenidos
    // por ejemplo, usando el título o algún dato de los colores obtenidos como clase.
    const colorClass = `color-bg-${(index % colors.length) + 1}`; // ejemplo de clase dinámica
    card.classList.add(colorClass);
  });
}
