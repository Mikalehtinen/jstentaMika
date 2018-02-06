//Mouseover effekter för samtliga tre menyval.

$(document).ready(function(){
  //vid mouseover för första menyvalet, ändra bakgrundsfärg.
  $('#nav1').mouseover(function(){
      $('#nav1').css('background-color', 'yellow');
  });
  //vid mouseout för första menyvalet, ändra tillbaka bakgrundsfärgen
  $('#nav1').mouseout(function(){
    $('#nav1').css('background-color', 'lightgrey');
  });
  //funktion för att ändra on-click. Fadeto ("tiden det tar för färgen att ändras vid click", "opacityn")
  $('#nav1').click(function(){
    $('#nav1').fadeTo(1000, 1);
    $('#nav2').fadeTo(1000, 0.4);
    $('#nav3').fadeTo(1000, 0.4);
  });

  //vid mouseover för andra menyvalet, ändra bakgrundsfärg.
  $('#nav2').mouseover(function(){
      $('#nav2').css('background-color', 'yellow');
  });
  //vid mouseout för andra menyvalet, ändra tillbaka bakgrundsfärgen
  $('#nav2').mouseout(function(){
    $('#nav2').css('background-color', 'lightgrey');
  });
  //funktion för att ändra on-click. Fadeto ("tiden det tar för färgen att ändras vid click", "opacityn")
  $('#nav2').click(function(){
    $('#nav1').fadeTo(1000, 0.4);
    $('#nav2').fadeTo(1000, 1);
    $('#nav3').fadeTo(1000, 0.4);
  });

  //vid mouseover för tredje menyvalet, ändra bakgrundsfärg.
  $('#nav3').mouseover(function(){
      $('#nav3').css('background-color', 'yellow');
  });
    //vid mouseout för tredje menyvalet, ändra tillbaka bakgrundsfärgen
  $('#nav3').mouseout(function(){
    $('#nav3').css('background-color', 'lightgrey');
  });
  //funktion för att ändra on-click. Fadeto ("tiden det tar för färgen att ändras vid click", "opacityn")
  $('#nav3').click(function(){
    $('#nav1').fadeTo(1000, 0.4);
    $('#nav2').fadeTo(1000, 0.4);
    $('#nav3').fadeTo(1000, 1);
  });
})
