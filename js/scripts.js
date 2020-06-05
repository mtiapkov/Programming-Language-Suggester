$(document).ready(function(){
  $("form#info").submit(function(event){
    const beach = $("#beachWalk").val();
    const fires = $("#firesOut").val();
    const puzzles = $("#puzzleSolve").val();
    const confusion = $("#confusedState").val();
    const age = parseInt($("input#age").val());
    if (!age){
      alert("Please input your age in numbers");
    }
    else if(age > 120 || age < 0){
      alert("The Programming Language Suggester 5000 only provides suggestions for those who are alive. Please enter a living age.")
    }
    if ((beach === "Yes") && (fires === "Yes") && (puzzles === "Yes") && (confusion === "Yes")){
      $(".answer1").show();
    } else if ((beach === "No") && (fires === "No") && (puzzles === "No") && (confusion === "No")){
      $(".answer2").show();
    } else {
      $(".answer3").show();
    }
    $("form#info").trigger("reset");
    event.preventDefault()
  
  });
});

