const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");
// Info
const creatureNameP = document.getElementById("creature-name");
const creatureIdP = document.getElementById("creature-id");
const weightP = document.getElementById("weight");
const heightP = document.getElementById("height");
const typesP = document.getElementById("types");

// stats
const hpP = document.getElementById("hp");
const attackP = document.getElementById("attack");
const defenseP = document.getElementById("defense");
const specialAttackP = document.getElementById("special-attack");
const specialDefenseP = document.getElementById("special-defense");
const speedP = document.getElementById("speed");

const fetchCreature = async (inputVal) => {
  try {
    const res = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${inputVal}`
    );
    const data = await res.json();
    console.log(data);
    displayCreature(data);
  } catch (err) {
    console.error("Error", err);
    alert("Creature not found");
  }
};

const displayCreature = (data) => {
  const { id, name, weight, height, types, stats } = data;

  console.log(types);
  // info
  creatureNameP.textContent = name.toUpperCase();
  creatureIdP.textContent = id;
  weightP.textContent = weight;
  heightP.textContent = height;
  // types
  typesP.textContent = "";
  types.forEach((typeObj) => {
    const typeP = document.createElement("span");
    typeP.textContent = typeObj.name.toUpperCase();
    typesP.appendChild(typeP);
  });
  // stats
  hpP.textContent = stats[0].base_stat;
  attackP.textContent = stats[1].base_stat;
  defenseP.textContent = stats[2].base_stat;
  specialAttackP.textContent = stats[3].base_stat;
  specialDefenseP.textContent = stats[4].base_stat;
  speedP.textContent = stats[5].base_stat;
};

searchButton.addEventListener("click", () => {
  const inputVal = searchInput.value.trim().toLowerCase();

  if (inputVal) {
    fetchCreature(inputVal);
  }
});
