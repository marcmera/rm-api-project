function fetchCharacters() {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      // Procesar y mostrar los datos de los personajes aquí
      console.log(data);
      // Por ejemplo, podríamos llamar a una función que crea fichas de
      personaje;
      // createCharacterCards(data.results);
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
}

function fetchColors() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      // Aquí se podría extraer colores de `thumbnailUrl` si fuera posible,
      // o simplemente usar el título o algún otro campo como color.
      console.log(data);
      // Por ejemplo, actualizaríamos el color de fondo de las fichas
      // updateCharacterCardColors(data);
    })
    .catch((error) => {
      console.error("Error fetching colors:", error);
    });
}

function updateCharacterCardColors(colors) {
  // Seleccionar todas las fichas de personajes
  const characterCards = document.querySelectorAll(".character-card");
  // Asignar un color de fondo a cada ficha de personaje
  characterCards.forEach((card, index) => {
    // Aquí deberías tener una lógica para escoger un color basado en los datos obtenidos
    // por ejemplo, usando el título o algún dato de los colores obtenidos como clase.
    const colorClass = `color-bg-${(index % colors.length) + 1}`; //ejemplo de clase dinámica
    card.classList.add(colorClass);
  });
}

function speakText(elementId) {
  var text = document.getElementById(elementId).innerText;
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}
document.addEventListener("DOMContentLoaded", () => {
  const speakButton = document.getElementById("speak-button");
  const voiceSelect = document.getElementById("voice-select");
  const textPara = document.getElementById("text-to-speak");
  let voices = [];
  const loadVoices = () => {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  };
  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  speakButton.addEventListener("click", () => {
    const text = textPara.innerText;
    const selectedVoice = voices[voiceSelect.value];
    const msg = new SpeechSynthesisUtterance(text);
    msg.voice = selectedVoice;
    window.speechSynthesis.speak(msg);
  });
});
