function writePassword() {
  
  
  var clickButton = window.prompt('Would you like to make a password?');
  if (clickButton === "" || clickButton === null) {
    window.alert("You need to provide an answer! Please try again.");
  return writePassword();
  }

  clickButton = clickButton.toLowerCase();

  if (clickButton === "no") {
    var noThanks = window.confirm("Are you sure?");

    if (noThanks) {
      window.alert("OK goodbye");
      return writePassword();
    }
  }

  if (clickButton === "yes") {
    var yesPassword = window.confirm("Ok!");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  while (i = 0, i < 25, i++); {
    return String.fromCharCode(Math.floor(Math.random() * 95) + 35);
  }
}

var char = 'asdfghjklzxcvbnmwertyuio';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);