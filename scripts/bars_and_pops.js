$(document).ready(function(){
  setTimeout(function(){
    loadNotificationBar()
  }, 3500)
  // revealSaleModal()
})

var loadNotificationBar = function(){
  // create the notification
  window.notification = new NotificationFx({
    message : '<p>Save money on your purchases. Shop now. <a href="#">See details.</a></p>',
    layout : 'bar',
    effect : 'slidetop',
    type : 'notice', // notice, warning or error
    onClose : function() {
      bttn.disabled = false;
    }
  });

  // show the notification
  notification.show();
  $('.normal-body').addClass('show')
}

var revealSaleModal = function(){
  $('.md-effect-1').addClass('md-show')
}

var hideSaelModal = function(){
  $('.md-effect-1').removeClass('md-show')
}