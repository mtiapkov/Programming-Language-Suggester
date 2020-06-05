$(document).ready(function(){
  $("form#info").submit(function(event){
    const beach = $("beachWalk").val();
    const yes = $(".yes").val();
    const no = $(".no").val();
    const fires = $(".firesOut").val();
    const puzzles = $(".puzzleSolve").val();
    const confusion = $(".confusedState").val();
    const age = parseInt($("input#age").val());
    
    if (beach  === "Yes"){
      $(".answer1").show()
      
    
    event.preventDefault()
  }
  });
});

