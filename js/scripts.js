//Business Logic
let n = parseInt($("#userInput").val());



// This returns string "0-n", but returns "13" as "1wont you be my neighbor" instead of "wont you be my neighbor"

function mrRogerizer(n) {
  const empty = []
  for (let i = 0; i < n+1; i++) {
    empty.push(i);}
  const string = empty.join(" ");
  let neighborString = string.replace(/\D3\D/g, " won't you be my neighbor ");
  let boopString = neighborString.replace(/\D2\D/g, " boop ");
  let beepString = boopString.replace(/\D1\D/g, " beep ");
  let threeString = beepString.replace(/\d3/g, " wont you be my neighbor ");
  let thirtyString = threeString.replace(/3\d/g, " wont you be my neighbor ");
  let twoString = thirtyString.replace(/\d2/g, " boop ");
  let twentyString = twoString.replace(/2\d/g, " boop ");
  let oneString = twentyString.replace(/\d1/g, " beep ");
  let tenString = oneString.replace(/1\d/g, " beep ");
  return tenString;
}


// weekend attempts
const array = [1,2,0,3,7,13,23];

array.forEach(function(el){
  let element = array.indexOf(el);
  if (el == 3) {
      array.splice(element, 1, "wont you be my neighbor");
  }
  else if (el == 2) {
      array.splice(element, 1, "boop")
    }
  else if (el == 1) {
      array.splice(element, 1, "beep")
    }
  });

// another iteration below

const string = "1,2,3,4,5,13,23,45,43";

function mrRogerizer(el) {
  let threeString = el.replace(/3+|\d3+|3\d+/g, "wont you be my neighbor?");
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
