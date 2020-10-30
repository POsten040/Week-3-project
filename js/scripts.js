//Business Logic
let n = parseInt($("#userInput").val());;
const emptyArray = []

function mrRogerizer(element) {
  for (let i = 0; i < element+1; i++) {
    let inputArray = emptyArray.push(i);
    let convertedArray = inputArray.map()
    }


// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    console.log(mrRogerizer(n));
    });
  };
