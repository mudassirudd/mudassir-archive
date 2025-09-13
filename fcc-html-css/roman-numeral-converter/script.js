const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const arr = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const getInputVal = () => {
  let inputVal = input.value;
  console.log(inputVal);

  if (inputVal === "") {
    outputDiv.textContent = "Please enter a valid number";
    return;
  } else if (inputVal <= 0) {
    outputDiv.textContent = " Please enter a number greater than or equal to 1";
    return;
  } else if (inputVal > 3999) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  const res = [];
  arr.forEach((array) => {
    while (inputVal >= array[1]) {
      res.push(array[0]);
      inputVal -= array[1];
    }
  });
  let resultNum = res.join("");
  outputDiv.textContent = resultNum;

  input.value = "";
};

convertBtn.addEventListener("click", getInputVal);
