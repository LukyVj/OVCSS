$(function(){


function sidebar(){
  var trigger = $('.menusign, #close'),
  menu = $('.sidebar');

  trigger.on('click',function(){
   menu.toggleClass('closed');
  });
}



 function deploy(){
  sidebar();
 }

 deploy();

}).call($(this));

