const character = {
  name: "Swamp Beast Diplomat",
  class: "Beast",
  level: 5,
  health: 100,
  image: "snortleblat.png",

  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(this.name + " has died!");
    }
    updateUI();
  },

  levelUp() {
    this.level += 1;
    updateUI();
  }
};

// DOM Update Function
function updateUI() {
  document.getElementById("charName").textContent = character.name;
  document.getElementById("charClass").textContent = "Class: " + character.class;
  document.getElementById("charLevel").textContent = "Level: " + character.level;
  document.getElementById("charHealth").textContent = "Health: " + character.health;
  document.getElementById("charImage").src = "images/snortleblat.png";
  document.getElementById("charImage").alt = character.name + " Image";
}

// Initialize
updateUI();