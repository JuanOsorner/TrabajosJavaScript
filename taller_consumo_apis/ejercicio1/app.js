// Galería de imágenes
async function loadPhotos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  const photos = await res.json();
  const grid = document.getElementById('photoGrid');
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.thumbnailUrl;
    img.alt = photo.title;
    grid.appendChild(img);
  });
}

// Clima actual
async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'TU_API_KEY_DE_OPENWEATHERMAP'; // Reemplaza con tu key
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`);
  const data = await res.json();
  const result = document.getElementById('weatherResult');
  if (data.main) {
    result.innerHTML = `<p>Temperatura en ${data.name}: ${data.main.temp}°C</p>`;
  } else {
    result.innerHTML = `<p>Ciudad no encontrada</p>`;
  }
}

// Pokédex
async function getPokemon() {
  const name = document.getElementById('pokemonInput').value.toLowerCase();
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();
  const card = document.getElementById('pokemonCard');
  card.innerHTML = `
    <h3>${data.name.toUpperCase()}</h3>
    <img src="${data.sprites.front_default}" alt="${data.name}" />
    <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(', ')}</p>
    <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
  `;
}

// Inicializar galería
loadPhotos();
