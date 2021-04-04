// Assignment code here
var length = ""
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


function generatePassword() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  // determine length
  while (isNaN(length) || length < 8 || length > 128) {
    alert("Your password must be between 8-128 characters \nTry Again");
    var length = parseInt(prompt("How many characters would you like your password to contain?"));
  }

  alert(`Your password will have ${length} characters`);

  // determine other parameters

  var confirmSpecialCharacter = confirm("Click OK to confirm if you want to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you want to include numerals");
  var confirmUpperCase = confirm("Click OK to confirm if you want to include upper case letters");
  var confirmLowerCase = confirm("Click OK to confirm if you want to include lower case letters");

  while (confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }

  var generators = []

  if (confirmLowerCase)
    generators.push(getRandomLower)

  if (confirmUpperCase)
    generators.push(getRandomUpper)

  if (confirmNumericCharacter)
    generators.push(getRandomNumber)

  if (confirmSpecialCharacter)
    generators.push(getRandomSymbol)

  finalPassword = ""

  for (let i = 0; i < length; i++) {
    var randomStart = getRandomInt(0, generators.length)
    finalPassword = finalPassword + (generators[randomStart]())
  }
  return finalPassword
}

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}


//generating the values for lower, upper, numbers and symbols
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
