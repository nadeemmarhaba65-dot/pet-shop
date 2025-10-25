// script.js

// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("breedSelect");
  const info = document.getElementById("breedInfo");

  // Populate the dropdown
  catBreeds.forEach(breed => {
    const option = document.createElement("option");
    option.value = breed.name;
    option.textContent = breed.name;
    select.appendChild(option);
  });

  // Handle selection
  select.addEventListener("change", e => {
    const selected = e.target.value;
    const breed = catBreeds.find(b => b.name === selected);

    if (breed) {
      info.innerHTML = `
        <img src="${breed.image}" alt="${breed.name}">
        <h3>${breed.name}</h3>
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p>${breed.description}</p>
      `;
    } else {
      info.innerHTML = "";
    }
  });
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("breedSelect");
  const info = document.getElementById("breedInfo");
  const clickCountDisplay = document.getElementById("clickCount");

  let clickCount = 0;

  // Populate the dropdown
  for (let i = 0; i < catBreeds.length; i++) {
    const option = document.createElement("option");
    option.value = catBreeds[i].name;
    option.textContent = catBreeds[i].name;
    select.appendChild(option);
  }

  // Handle selection and count clicks
  select.addEventListener("change", (e) => {
    const selected = e.target.value;
    const breed = catBreeds.find(b => b.name === selected);

    // Increment click count using for loop (loop runs once per click)
    for (let i = 0; i < 1; i++) {
      clickCount++;
    }

    clickCountDisplay.textContent = clickCount;

    if (breed) {
      info.innerHTML = `
        <img src="${breed.image}" alt="${breed.name}">
        <h3>${breed.name}</h3>
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p>${breed.description}</p>
      `;
    } else {
      info.innerHTML = "";
    }
  });
});

