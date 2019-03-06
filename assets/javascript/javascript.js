

// character toggle hide/show on map var 

var playerSelect = 0;
var enemmySelect = 0;

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
  HP: 10,
  AP: 10
}
var solo = {
  HP: 10,
  AP: 10
}
var yoda = {
  HP: 10,
  AP: 10
}
var vader = {
  HP: 10,
  AP: 10
}
var boba = {
  HP: 10,
  AP: 10
}
var jaba = {
  HP: 10,
  AP: 10
}


$(".char").click(function() {
console.log(this.id);

if (playerSelect == 0) {
playerSelect = this.id

// Light side characters

  if(playerSelect == "sky") {
    $("#light").hide();
    $("#playerPic").html("<img src= 'assets/images/Skywalker.png'>");
    $("#playerHP").append(sky.HP);
    $("#playerAP").append(sky.AP);
    $("#title-character").html("Select Your Opponent")
    
  }
  else if(playerSelect == "solo") {
    $("#light").hide();
    $("#playerPic").html("<img src= 'assets/images/Solo.png'>");
    $("#playerHP").append(solo.HP);
    $("#playerAP").append(solo.AP);
    $("#title-character").html("Select Your Opponent")
    
  }
  else if(playerSelect == "yoda") {
    $("#light").hide();
    $("#playerPic").html("<img src= 'assets/images/Yoda.png'>");
    $("#playerHP").append(yoda.HP);
    $("#playerAP").append(yoda.AP);
    $("#title-character").html("Select Your Opponent")
    
  }
  // Dark side characters

  else if(playerSelect == "vader") {
    $("#dark").hide();
    $("#playerPic").html("<img src= 'assets/images/Darth.png'>");
    $("#playerHP").append(vader.HP);
    $("#playerAP").append(vader.AP);
    $("#title-character").html("Select Your Opponent")
    
  }
  else if(playerSelect == "boba") {
    $("#dark").hide();
    $("#playerPic").html("<img src= 'assets/images/BobaFett.png'>");
    $("#playerHP").append(boba.HP);
    $("#playerAP").append(boba.AP);
    $("#title-character").html("Select Your Opponent")
    
  }
  else if(playerSelect == "jaba") {
    $("#dark").hide();
    $("#playerPic").html("<img src= 'assets/images/Jabada.png'>");
    $("#playerHP").append(jaba.HP);
    $("#playerAP").append(jaba.AP);
    $("#title-character").html("Select Your Opponent")
    
  }



}
});











// $(".reset").click(function() {
//   console.log(this.id);
// });

// $(document).ready(function(){
//   $("#button-sky").click(function(){
//   $("#skywalker").toggle(1000);
// });
// });
//   $(document).ready(function(){
//     $("#button-sky").click(function(){
//     $("#skywalkerSelect").show(1000);
//   });

// });

// // Han Solo
//     $(document).ready(function(){
//       $("#button-solo").click(function(){
//           $("#solo").hide(1000);
//         });
//       });
// // Yoda
//       $(document).ready(function(){
//         $("#button-yoda").click(function(){
//             $("#yoda").hide(1000);
//           });
//         });

// // Darth Vader
//       $(document).ready(function(){
//           $("#button-vader").click(function(){
//               $("#vader").hide(1000);
//             });
//           });

// // Boba Fett
//       $(document).ready(function(){
//             $("#button-boba").click(function(){
//                 $("#boba").hide(1000);
//               });
//             });

// // Jabadahut
//               $(document).ready(function(){
//                 $("#button-jaba").click(function(){
//                     $("#jaba").hide(1000);
//                   });
//                 });

//  // sets player stats 

// $(document).ready(function() {
// $("#button").on("click", function(){
      

// });

// // sets the enemy player stats
// $(document).ready(function() {
//   $("#button").on("click", function(){

//     var enemyHP = 0
//     var enemyAP = "";
//     // var enemySelect = true;

//     //   if (enemySelect = true) {

//     //   }

      
//       for (var i = 0; i < 9; i++) {
//         var randomNum = Math.round(Math.random() * 2);
//         enemyHP = randomNum + enemyHP;
//         console.log(enemyHP);

//       };


//       for (var i = 0; i < 200; i++) {
//         var randomNum = Math.round(Math.random()*2);
//         enemyAP = randomNum + enemyAP;
//         console.log(enemyAP);
//       }; 