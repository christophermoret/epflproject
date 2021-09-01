//Constants
const stats = document.getElementById("stats");
const enemy = document.getElementById("enemy");
const actions = document.getElementById("actions");

// MODELS:
let player;
function Player(name, HP, ATK) {
    this.name = name;
    this.HP = HP;
    this.ATK = ATK;
}

let monster;
function Monster(name, HP, ATK) {
    this.name = name;
    this.HP = HP;
    this.ATK = ATK;
}

//Functions
// Create player:
if (localStorage.getItem("Hero") == "Warrior") {
    player = new Player("Warrior", 100, 80);
    stats.innerHTML = "<h2>Hero stats: </h2>" + "<h3>" + player.name + "</h3>"
        + "<h3> HP: " + player.HP + "</h3>"
        + "<h3>" + "ATK: " + player.ATK + "</h3>"
} else {
    player = new Player("Magician", 80, 90);
    stats.innerHTML = "<h2>Stats: </h2>" + "<h3>" + player.name + "</h3>"
        + "<h3> HP: " + player.HP + "</h3>"
        + "<h3>" + "ATK: " + player.ATK + "</h3>"
}

//Create Monster
monster = new Monster("Guardian", 85, 40);
enemy.innerHTML = '<h2>Enemy stats:</h2> <img src="/static/img/guardian.png" style="width:200px;height:200px;">'
    + "<h3>" + monster.name + "</h3>"
    + "<h3> HP: " + monster.HP + "</h3>"
    + "<h3>" + "ATK: " + monster.ATK + "</h3>"



//Attack
function attack() {
    player.HP = player.HP - monster.ATK;
    monster.HP = monster.HP - player.ATK;
    console.log(player.HP);
    stats.innerHTML = "<h2>Stats: </h2>" + "<h3>" + player.name + "</h3>"
        + "<h3> HP: " + player.HP + "</h3>"
        + "<h3>" + "ATK: " + player.ATK + "</h3>"
    enemy.innerHTML = '<h2>Enemy stats:</h2> <img src="/static/img/guardian.png" style="width:200px;height:200px;">'
        + "<h3>" + monster.name + "</h3>"
        + "<h3> HP: " + monster.HP + "</h3>"
        + "<h3>" + "ATK: " + monster.ATK + "</h3>"
    if (monster.HP <= 0) {
        console.log("enemy dead");
        alert("YOU WON!")
        
    }
}



//Debug
console.log("Debug:")
console.log(player)
console.log(monster)
