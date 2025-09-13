const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const regex = /^1?\s?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;

const isNumberValid = (str) => regex.test(str);

const checkNumber = () => {
  const inputValue = input.value;
  console.log(inputValue);
  if (inputValue.trim() === "") {
    alert("Please provide a phone number");
    return;
  }
  isNumberValid(inputValue);
  renderResult();
  input.value = "";
};

const renderResult = () => {
  const isRegexValid = isNumberValid(input.value);
  if (isRegexValid) {
    resultsDiv.innerHTML += `<p class="result valid">Valid US number: ${input.value}</p>`;
  } else {
    resultsDiv.innerHTML += `<p class="result invalid">Invalid US number: ${input.value}</p>`;
  }
};
const clearResults = () => {
  resultsDiv.innerHTML = "";
};

clearBtn.addEventListener("click", clearResults);
checkBtn.addEventListener("click", checkNumber);
