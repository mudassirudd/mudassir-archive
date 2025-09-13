const userInputField = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const regex = /[^a-z0-9]/gi;

const getValidInput = () => {
  const input = userInputField.value;
  if (input === "") {
    alert("Please input a value");
    return null;
  }
  console.log(input);
  const validInput = input.replace(regex, "").toLowerCase();
  console.log(validInput);

  const reversedInput = validInput.split("").reverse().join("");
  console.log(reversedInput);

  if (validInput === reversedInput) {
    return [true, validInput];
  } else {
    return [false, validInput];
  }
};

checkBtn.addEventListener("click", () => {
  const result = getValidInput();
  console.log(result[0]);
  console.log(result[1]);
  if (result[0] === true) {
    resultDiv.innerHTML = `${userInputField.value} is a palindrome.`;
  } else {
    resultDiv.innerHTML = `${userInputField.value} is not a palindrome.`;
  }
});
