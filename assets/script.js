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
    var yesPassword = window.confirm("Ok! Your password will be completely random and between 8 - 124 characters!");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var min = 8;
  var max = 124;

  let passArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','O','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','!','#','@','$','%','^','&','*','(',')','?','>','<'];
  var length = Math.floor((Math.random() * max) + min);

  let password = "";
  for(i = 0; i <= length; i++) {
    let randomNum = Math.floor(Math.random() * passArray.length);
    password += passArray[randomNum];
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);