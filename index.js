
  // ------- TOGGLER BUTTON-----


var hamburgerClick = $(".navbar-toggler-icon").on("click", function(){


  $(".main-wraper").hide();
  $(".container-footer").hide();
  $(".attribution").hide();
  $(".hamburguer-menu").show();
});

// ------ EXIT BUTTON MOBILE MENU----

var buttonExitClick = $(".button-exit-menu").on("click", function(){
  $(".hamburguer-menu").hide();
  $(".main-wraper").show();

})



   //------ THIRD SECTION FLASH IMAGE ON CLICK

   var imageFlash =  $(".flash");

  for(var i = 0; i < imageFlash.length; i++){

    imageFlash[i].addEventListener("click", function(){

   var button = imageFlash.attr("class");

    var parent = $(this).parent().addClass("pressed");

    setTimeout(function(){
    parent.removeClass("pressed")}, 120);
    })
  }

// DON'T EVEN KNOW HOW I MADE THE FOOR LOOP WORKS... 
