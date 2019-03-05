
$(document).ready(function() {

var character = ["skywalker", "solo", "yoda", "vader", "boba", "jaba"]

var player = {
    playerChar={},
    playerHP = 150,
    playerAP = 15,
}


var enemy = {
    enemyChar= {},
    enemyHP = {},
    enemyAP = {},
}


var playerSelect = false;
var enemySelect = false;
var playerHP = player.HP-enemy.AP;
var enemyHP = player.playerAP-enemy.enemyHP;
var randomStat = enemy.enemyHP + randomStat;
var playerChar = character.indexof();
var enemyChar =  character.indexof();


var scoreboard = {
    wins = 0,
    loss = 0,
}



// player character select 
$("#button").on("click", function) {
    console.log(click);


function playerselect() {

    for (var i = 0; i < character.length; i++) {
        playerSelect = inde
        player.playerChar.push("_");
        console.log(playerselect)
      }
}
};

// enemy character select
function enemyselect(){


}




// sets enemy stats 
function setenemystat() {
    enemy.HP = {};
    enemy.AP = {};
    
    if (playerSelect === false) {
        for (var i = 0; i < 10; i++) {
            enemy.HP = i 
        }
    }

}


// counts player stats
function countplayerstats() {
    player.playerHP = 150;
    player.playerAP = 15;

}




// counts enemy stats

function countenemystats() {
    enemy.enemyHP = {};
    enemy.enemyAP = {};
}

//alerts a win or loss
function scoreboard() {
    wins = 0;
    loss = 0;
}

// reset game
function reset() {

}
}
