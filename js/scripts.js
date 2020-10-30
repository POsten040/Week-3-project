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

function mrRogerizer(n) {
  const empty = []
  for (let i = 0; i < n+1; i++) {
    empty.push(i);}
  const string = empty.join(" ");
  let neighborString = string.replace(/3/g, "won't you be my neighbor");
  let boopString = neighborString.replace(/2/g, "boop");
  let beepString = boopString.replace(/1/g, "beep");
  return beepString;
}
  
// NON FUNCTIONING ATTEMPTS
// function stringMaker(n) {
//   const empty = []
//   for (let i = 0; i < n+1; i++) {
//     empty.push(i);}
//   const string = empty.join(" ");
//   let replacedString = string.replace(/[123]/g, "won't you be my neighbor");
//   return replacedString;
// }

// function mrRogerizer(array) {
//   array.map(function(el){
//     if (el === 3) {
//         array.splice(el, 1, "wont you be my neighbor");
//         return array;
//     }
// });
// }

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
