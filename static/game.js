//Constants
const stats = document.getElementById("stats");
const enemy = document.getElementById("enemy");
const enemyStats = document.getElementById("enemyStats");
const actions = document.getElementById("actions");
var level = localStorage.getItem("Level");

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

//Load level
function loadLevel() {
    if (level == 1) {
        monster = new Monster("Door guardian", 40, 10);
        enemy.innerHTML = '<h2>Enemy stats:</h2> <img src="/static/img/guardian.png" style="width:200px;height:200px;">'
        enemyStats.innerHTML = "<h3>" + monster.name + "</h3>"
            + "<h3> HP: " + monster.HP + "</h3>"
            + "<h3> ATK: " + monster.ATK + "</h3>";
    }
    if (level == 2) {
        monster = new Monster("Goblin", 50, 20);
        enemy.innerHTML = '<h2>Enemy stats:</h2> <img src="/static/img/goblin.png" style="width:200px;height:200px;">'
        enemyStats.innerHTML = "<h3>" + monster.name + "</h3>"
            + "<h3> HP: " + monster.HP + "</h3>"
            + "<h3> ATK: " + monster.ATK + "</h3>";
    }

    if (level == 3) {
        monster = new Monster("Big BOSS", 500, 500);
        enemy.innerHTML = '<h2>Enemy stats:</h2> <img src="/static/img/elf.png" style="width:200px;height:200px;">'
        enemyStats.innerHTML = "<h3>" + monster.name + "</h3>"
            + "<h3> HP: " + monster.HP + "</h3>"
            + "<h3> ATK: " + monster.ATK + "</h3>";
    }
}

//Attack
function attack() {
    player.HP = player.HP - monster.ATK;
    monster.HP = monster.HP - player.ATK;
    stats.innerHTML = "<h2>Stats: </h2>" + "<h3>" + player.name + "</h3>"
        + "<h3> HP: " + player.HP + "</h3>"
        + "<h3> ATK: " + player.ATK + "</h3>"
    enemyStats.innerHTML = "<h3>" + monster.name + "</h3>"
        + "<h3> HP: " + monster.HP + "</h3>"
        + "<h3> ATK: " + monster.ATK + "</h3>";
    if (player.HP <= 0) {
        alert("YOU ARE DEAD!")
        localStorage.setItem("Level", 1);
        document.location.href = 'http://127.0.0.1:5000/hero';
    }
    if (monster.HP <= 0) {
        console.log("Ding Dong the witch is dead");
        localStorage.setItem("Level", ++level);
        console.log(level);
        loadLevel();
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

loadLevel();
