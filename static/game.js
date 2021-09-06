//Constants
const stats = document.getElementById("stats");
const enemy = document.getElementById("enemy");
const enemyStats = document.getElementById("enemyStats");
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

// Level
function level1() {
    monster = new Monster("Door guardian", 40, 10);
    enemy.innerHTML = '<h2>Enemy stats:</h2> <img src="/static/img/guardian.png" style="width:200px;height:200px;">'
    enemyStats.innerHTML = "<h3>" + monster.name + "</h3>"
        + "<h3> HP: " + monster.HP + "</h3>"
        + "<h3>" + "ATK: " + monster.ATK + "</h3>";
}

function level2() {
    alert("YOU WON! Moving on to the next level");
    monster = new Monster("Big BOSS", 500, 500);
    enemy.innerHTML = '<h2>Enemy stats:</h2> <img src="/static/img/elf.png" style="width:200px;height:200px;">'
    enemyStats.innerHTML = "<h3>" + monster.name + "</h3>"
        + "<h3> HP: " + monster.HP + "</h3>"
        + "<h3>" + "ATK: " + monster.ATK + "</h3>";
}


//Attack
function attack() {
    player.HP = player.HP - monster.ATK;
    monster.HP = monster.HP - player.ATK;
    stats.innerHTML = "<h2>Stats: </h2>" + "<h3>" + player.name + "</h3>"
        + "<h3> HP: " + player.HP + "</h3>"
        + "<h3>" + "ATK: " + player.ATK + "</h3>"
    enemyStats.innerHTML = "<h3>" + monster.name + "</h3>"
        + "<h3> HP: " + monster.HP + "</h3>"
        + "<h3>" + "ATK: " + monster.ATK + "</h3>";
    if (player.HP <= 0) {
        alert("YOU ARE DEAD!")
        document.location.href = 'http://127.0.0.1:5000/hero';
    }
    if (monster.HP <= 0) {
        level2();
    }
}



//Run game: 
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

level1();

//Debug
console.log("Debug:")
console.log(player)
console.log(monster)