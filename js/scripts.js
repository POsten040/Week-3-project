//Business Logic
let n = parseInt($("#userInput").val());
// const empty = []

// function arrayMaker(n) {
//   for (let i = 0; i < n+1; i++) {
//     empty.push(i);}
// }

// function mrRogerizer(array) {
//   array.splice(3, 1, "wont you be my neighbor");
//   array.splice(2, 1, "boop");
//   array.splice(1, 1, "beep");
//   let newArray = array;
//   console.log(newArray);
// }


// This returns string "0-n", but returns "13" as "1wont you be my neighbor" instead of "wont you be my neighbor"

// function stringMaker(n) {
//   const empty = []
//   for (let i = 0; i < n+1; i++) {
//     empty.push(i);}
//   const string = empty.join(" ");
//   let replacedString = string.replace(/3/g, "won't you be my neighbor");
//   return replacedString;
// }
  
function stringMaker(n) {
  const empty = []
  for (let i = 0; i < n+1; i++) {
    empty.push(i);}
  return empty;
}

function mrRogerizer(array) {
  array.splice(3, 1, "wont you be my neighbor");
  array.splice(2, 1, "boop");
  array.splice(1, 1, "beep");
  let newArray = array;
  console.log(newArray);
}

// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let input = parseInt($("#userInput").val());
    });
  });

