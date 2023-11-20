export async function getColors() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await response.json();
    const colors = json.map((color) => "#" + color.thumbnailUrl.slice(-6));
    updateCharacterCardColors(colors);
  } catch (error) {
    console.error("Error fetching colors:", error.message);
  }
}

function updateCharacterCardColors(colors) {
  const characterCards = document.querySelectorAll(".name");
  characterCards.forEach((card, index) => {
    console.log("nanfjdasn");
    card.style.color = colors[index % colors.length];
  });
}
