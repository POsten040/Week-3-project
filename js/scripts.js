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



function arrayMaker(n) {
  const empty = []
  for (let i = 0; i < n+1; i++) {
    empty.push(i);}
  const string = empty.join(" ");
  return string;
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
    (mrRogerizer(n));
    });
  };
