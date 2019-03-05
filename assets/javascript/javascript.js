

// character toggle hide/show on map 

// Skywalker
var skywalker;

$(document).ready(function(){
  $("#button-sky").click(function(){
  $("#skywalker").toggle(1000);
});
});
  $(document).ready(function(){
    $("#button-sky").click(function(){
    $("#skywalkerSelect").show(1000);
  });

});

// Han Solo
    $(document).ready(function(){
      $("#button-solo").click(function(){
          $("#solo").hide(1000);
        });
      });
// Yoda
      $(document).ready(function(){
        $("#button-yoda").click(function(){
            $("#yoda").hide(1000);
          });
        });

// Darth Vader
      $(document).ready(function(){
          $("#button-vader").click(function(){
              $("#vader").hide(1000);
            });
          });

// Boba Fett
      $(document).ready(function(){
            $("#button-boba").click(function(){
                $("#boba").hide(1000);
              });
            });

// Jabadahut
              $(document).ready(function(){
                $("#button-jaba").click(function(){
                    $("#jaba").hide(1000);
                  });
                });

 // sets player stats 

$(document).ready(function() {
$("#button").on("click", function(){
      

});

// sets the enemy player stats
$(document).ready(function() {
  $("#button").on("click", function(){

    var enemyHP = 0
    var enemyAP = "";
    // var enemySelect = true;

    //   if (enemySelect = true) {

    //   }

      
      for (var i = 0; i < 9; i++) {
        var randomNum = Math.round(Math.random() * 2);
        enemyHP = randomNum + enemyHP;
        console.log(enemyHP);

      };


      for (var i = 0; i < 200; i++) {
        var randomNum = Math.round(Math.random()*2);
        enemyAP = randomNum + enemyAP;
        console.log(enemyAP);
      };

      


});
});