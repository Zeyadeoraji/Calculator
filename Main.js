let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);
console.log(arr);

arr.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    // console.log(buttons);
    if (e.target.innerHTML == "=") {
      display.value = eval(string);
      string = "";
      // console.log(display.value);
      display.value.innerHTML = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "DE") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
