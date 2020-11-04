//Business Logic

function mrRogerizer(n) {
  const empty = []
  for (let i = 0; i < n+1; i++) {
    empty.push(i);}
  const string = empty.join(" ");
  let threeString = string.replace(/3+|\d3+|3\d+/g, "wont you be my neighbor?");
  let twoString = threeString.replace(/2+|\d2+|2\d+/g, "boop");
  let oneString = twoString.replace(/1+|\d1+|1\d+/g, "beep");
  return oneString;
}

// UI Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let input = parseInt($("#userInput").val());
    let rogerizedInput = mrRogerizer(input);
    $("#results").text(rogerizedInput);
    event.preventDefault();
    $("#userInput").val("");
  });  
});
