let total = 0;
let display = document.getElementById("total");
let input = document.getElementById("number");

function add() {
    total = total + Number(input.value);
    display.innerHTML = "Total: " + total;
    input.value = "";
}