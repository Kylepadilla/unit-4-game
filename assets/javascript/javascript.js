

// character toggle hide/show on map var 

var playerSelect = 0;
var enemySelect = 0;

var startAP = 0;
var deathCounter = 0;
// Light or Dark side selector
var side = 0;

var tempPlayer = {
  HP: 0,
  AP: 0
}

var tempEnemy = {
  HP: 0,
  AP: 0
}


// Character list
var sky = {
  HP: 100,
  AP: 10
}
var solo = {
  HP: 100,
  AP: 10
}
var yoda = {
  HP: 100,
  AP: 10
}
var vader = {
  HP: 100,
  AP: 10
}
var boba = {
  HP: 100,
  AP: 10
}
var jaba = {
  HP: 100,
  AP: 10
}


$(document).ready(function() {
  $(".attack").hide();
});

$(".char").click(function() {
console.log(this.id);

if (playerSelect == 0) {
playerSelect = this.id

// Light side characters

  if(playerSelect == "sky") {
    tempPlayer = sky;
    $("#light").hide();
    $("#playerPic").html("<img src= 'assets/images/Skywalker.png'>");
    $("#playerHP").html(sky.HP);
    $("#playerAP").html(sky.AP);
    $("#title-character").html("Select Your Opponent");
    startAP = sky.AP   
  }
  else if(playerSelect == "solo") {
    tempPlayer = solo;

    $("#light").hide();
    $("#playerPic").html("<img src= 'assets/images/Solo.png'>");
    $("#playerHP").html(solo.HP);
    $("#playerAP").html(solo.AP);
    $("#title-character").html("Select Your Opponent");
    startAP = solo.AP;
  }
  else if(playerSelect == "yoda") {
    tempPlayer = yoda;
    $("#light").hide();
    $("#playerPic").html("<img src= 'assets/images/Yoda.png'>");
    $("#playerHP").html(yoda.HP);
    $("#playerAP").html(yoda.AP);
    $("#title-character").html("Select Your Opponent")
    startAP = yoda.AP;  }
  // Dark side characters

  else if(playerSelect == "vader") {
    tempPlayer = vader;
    $("#dark").hide();
    $("#playerPic").html("<img src= 'assets/images/Darth.png'>");
    $("#playerHP").html(vader.HP);
    $("#playerAP").html(vader.AP);
    $("#title-character").html("Select Your Opponent")
    startAP = vader.AP }

  else if(playerSelect == "boba") {
    tempPlayer = boba;
    $("#dark").hide();
    $("#playerPic").html("<img src= 'assets/images/BobaFett.png'>");
    $("#playerHP").html(boba.HP);
    $("#playerAP").html(boba.AP);
    $("#title-character").html("Select Your Opponent")
    startAP = boba.AP;}

  else if(playerSelect == "jaba") {
    tempPlayer = jaba;
    $("#dark").hide();
    $("#playerPic").html("<img src= 'assets/images/Jabada.png'>");
    $("#playerHP").html(jaba.HP);
    $("#playerAP").html(jaba.AP);
    $("#title-character").html("Select Your Opponent")
    startAP = jaba.AP ;  }
  }
}
);


// Opponent select function



$(".char").click(function() {
  console.log(this.id);
 

  if (playerSelect !== 0 && enemySelect == 0 && this.id !== playerSelect) {
    
    enemySelect = this.id

    if(enemySelect == "sky") {
      tempEnemy = sky;
     
      $("#enemyPic").html("<img src= 'assets/images/Skywalker.png'>");
      $("#enemyHP").html(sky.HP);
      $("#enemyAP").html(sky.AP);
      $("#sky").css("visibility", "hidden");
      $(".attack").show();
    }
    else if(enemySelect == "solo") {
      tempEnemy = solo;

      $("#enemyPic").html("<img src= 'assets/images/Solo.png'>");
      $("#enemyHP").html(solo.HP);
      $("#enemyAP").html(solo.AP);
      $("#solo").css("visibility", "hidden");
      $("#title-character").html("Select Your Opponent");
      $(".attack").show();

    }
    else if(enemySelect == "yoda") {
      tempEnemy = yoda;

      $("#enemyPic").html("<img src= 'assets/images/Yoda.png'>");
      $("#enemyHP").html(yoda.HP);
      $("#enemyAP").html(yoda.AP);
      $("#yoda").css("visibility", "hidden");
      $("#title-character").html("Select Your Opponent")
      $(".attack").show();

    }
    // Dark side characters
  
    else if(enemySelect == "vader") {
      tempEnemy = vader;

      $("#enemyPic").html("<img src= 'assets/images/Darth.png'>");
      $("#enemyHP").html(vader.HP);
      $("#enemyAP").html(vader.AP);
      $("#vader").css("visibility", "hidden");
      $("#title-character").html("Select Your Opponent")
      $(".attack").show();

    }
    else if(enemySelect == "boba") {
      tempEnemy = boba;

      $("#enemyPic").html("<img src= 'assets/images/BobaFett.png'>");
      $("#enemyHP").html(boba.HP);
      $("#enemyAP").html(boba.AP);
      $("#boba").css("visibility", "hidden");
      $("#title-character").html("Select Your Opponent");
      $(".attack").show();

    }
    else if(enemySelect == "jaba") {
      tempEnemy = jaba;

      $("#enemyPic").html("<img src= 'assets/images/Jabada.png'>");
      $("#enemyHP").html(jaba.HP);
      $("#enemyAP").html(jaba.AP);
      $("#jaba").css("visibility", "hidden");
      $("#title-character").html("Select Your Opponent")
      $(".attack").show();

    }
  }
});


// Attack


$(".attack").click(function() {

  console.log("attack button");

  if (tempPlayer.HP > 0 && tempEnemy.HP > 0){

  
    tempPlayer.HP -= tempEnemy.AP;
    tempEnemy.HP -= tempPlayer.AP;
    tempPlayer.AP += startAP; 

    $("#enemyHP").html(tempEnemy.HP);
    $("#playerHP").html(tempPlayer.HP);
    $("#playerAP").html(tempPlayer.AP);

    stattrack()
  }
});

// Player Stat Track

function stattrack() {
  if(tempPlayer.HP < 1) {
    alert("game over")
  }
    if(tempEnemy.HP < 1){
      $("#enemyPic").html("");
      $("#enemyHP").html("");
      $("#enemyAP").html("");

      enemySelect = 0;

      deathCounter++;

      if(deathCounter == 3) {
        $(".map").html("Victory!");
        $("#dark").hide();
        $("#title-character");
        $("#light").hide();
      }


      else{
        $(".char").click(function() {
          console.log(this.id);
         
        
          if (playerSelect !== 0 && enemySelect == 0 && this.id !== playerSelect) {
            
            enemySelect = this.id
        
            if(enemySelect == "sky") {
              tempEnemy = sky;
             
              $("#enemyPic").html("<img src= 'assets/images/Skywalker.png'>");
              $("#enemyHP").html(sky.HP);
              $("#enemyAP").html(sky.AP);
              $("#sky").css("visibility", "hidden");
              $(".attack").show();
            }
            else if(enemySelect == "solo") {
              tempEnemy = solo;
        
              $("#enemyPic").html("<img src= 'assets/images/Solo.png'>");
              $("#enemyHP").html(solo.HP);
              $("#enemyAP").html(solo.AP);
              $("#solo").css("visibility", "hidden");
              $("#title-character").html("Select Your Opponent");
              $(".attack").show();
        
            }
            else if(enemySelect == "yoda") {
              tempEnemy = yoda;
        
              $("#enemyPic").html("<img src= 'assets/images/Yoda.png'>");
              $("#enemyHP").html(yoda.HP);
              $("#enemyAP").html(yoda.AP);
              $("#yoda").css("visibility", "hidden");
              $("#title-character").html("Select Your Opponent")
              $(".attack").show();
        
            }
            // Dark side characters
          
            else if(enemySelect == "vader") {
              tempEnemy = vader;
        
              $("#enemyPic").html("<img src= 'assets/images/Darth.png'>");
              $("#enemyHP").html(vader.HP);
              $("#enemyAP").html(vader.AP);
              $("#vader").css("visibility", "hidden");
              $("#title-character").html("Select Your Opponent")
              $(".attack").show();
        
            }
            else if(enemySelect == "boba") {
              tempEnemy = boba;
        
              $("#enemyPic").html("<img src= 'assets/images/BobaFett.png'>");
              $("#enemyHP").html(boba.HP);
              $("#enemyAP").html(boba.AP);
              $("#boba").css("visibility", "hidden");
              $("#title-character").html("Select Your Opponent");
              $(".attack").show();
        
            }
            else if(enemySelect == "jaba") {
              tempEnemy = jaba;
        
              $("#enemyPic").html("<img src= 'assets/images/Jabada.png'>");
              $("#enemyHP").html(jaba.HP);
              $("#enemyAP").html(jaba.AP);
              $("#jaba").css("visibility", "hidden");
              $("#title-character").html("Select Your Opponent")
              $(".attack").show();
        
            }
          }
        });
        




      }
    }
    
};

$("#reset").click(function(){
  location.reload();

});
