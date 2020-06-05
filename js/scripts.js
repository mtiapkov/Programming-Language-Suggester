$(document).ready(function(){
  $("form#info").submit(function(event){
    const beach = $("beachWalk").val();
    const yes = $(".yes").val();
    if (beach === yes) {
      alert("Yes");
    }
    $("#language").text("test")
  
  
    event.preventDefault();
  

  });
})
