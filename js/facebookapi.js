$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '192730574248207',
      version: 'v2.3' // or v2.0, v2.1, v2.0
    });  
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    var loggedIn = false;
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        loggedIn = true;
        console.log(response);
        FB.api('/me', function(response) {
          console.log(response);
          $('#status').html(response.name);
        });
      }
      else {
        //FB.login();
      }
    });
    $('#signInBtn').on('click', function(){
        if(!loggedIn){
          FB.login();
        }else{
          FB.logout();
        }
    });
  });
});