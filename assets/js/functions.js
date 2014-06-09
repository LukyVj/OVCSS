$(document).ready(function(){


function sidebar(){
  var trigger = $('.menusign, #close'),
  menu = $('.sidebar');

  trigger.on('click',function(){
   menu.toggleClass('closed');
   $('.container').toggleClass('blurred');
  });
}

function emptyModal(){
  var close = $('#myModal button.close');
  var modal = $('#myModal');
  var modalContent = $('#myModal pre code .modal-content');
  close.on('click', function(){
    modalContent.empty();
    modal.find('pre code').append('<div class="modal-content"></div>');
  });
}


 function deploy(){
  sidebar();
  emptyModal();
 }

 deploy();

});

