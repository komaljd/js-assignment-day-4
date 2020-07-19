

// using Arrow function
function Replacearrow(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  Replacearrow(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );




