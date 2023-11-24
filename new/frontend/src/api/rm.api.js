const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page) {
  try {
    const response = await fetch(`${BASE_URL}/character/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}

export async function getCharacter(id) {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
}

export async function getEpisodes(page) {
  try {
    const response = await fetch(`${BASE_URL}/episode/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    throw error;
  }
}

export async function getEpisode(id) {
  try {
    const response = await fetch(`${BASE_URL}/episode/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching episode:", error);
    throw error;
  }
}

export async function getLocations(page) {
  try {
    const response = await fetch(`${BASE_URL}/location/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
}

export async function getLocation(id) {
  try {
    const response = await fetch(`${BASE_URL}/location/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
}
