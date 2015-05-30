
$(document).ready(function(){
  eventBinding()

})

var eventBinding = function(){
  $('#new_user').on('submit', newUser)
}
   var newUser = function(event){
event.preventDefault();
  $.ajax({
    type: 'post',
    data: $(this).serialize(),
    url: 'http://localhost:3000/users',

  }).done(function(data){
    console.log(data);
    debugger

  })
   }

