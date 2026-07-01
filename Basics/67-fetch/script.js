async function fetchData() {
  try {
    const pokemonName = document
      .getElementById('pokemonName')
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error('Pokémon not found');
    }

    const data = await response.json();

    const imgElement = document.getElementById('pokemonSprite');
    const titleElement = document.getElementById('pokemonTitle');
    const typeElement = document.getElementById('pokemonType');
    const card = document.querySelector('.card');

    // Image
    imgElement.src = data.sprites.front_default;

    // Name
    titleElement.textContent = data.name.toUpperCase();

    // Type (first type only)
    typeElement.textContent = 'Type: ' + data.types[0].type.name;

    // Show card
    card.style.display = 'block';
  } catch (error) {
    console.error(error);
    alert('Pokémon not found!');
  }
}
