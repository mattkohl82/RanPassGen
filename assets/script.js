function writePassword() {
  var clickButton = window.confirm('Would you like to make a password?')
  if (!clickButton) {
    window.alert("You need to provide an answer! Please try again.")
  return writePassword();
  } 

  const passLength = window.prompt('How long between 8-124 do you want your password?')
    if (!passLength  || parseInt(passLength) < 8 || parseInt(passLength) > 124) {
      window.alert("please enter value between 8 - 124")
      return writePassword();
    }
  const lowerConfirm = window.confirm('Would you like to use Lowercase letter?')
  const upperConfirm = window.confirm('Would you like to use Uppercase letters?')
  const numConfirm = window.confirm('Would you like to use numbers?')
  const symConfirm = window.confirm('Would you like to use symbols?')

  if (!lowerConfirm && upperConfirm === false && numConfirm === false && symConfirm === false) {
    window.alert('You didnt select any items for your password, Try again.')
    return writePassword();
  }


  var password = generatePassword(lowerConfirm, upperConfirm, numConfirm, symConfirm, parseInt(passLength));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(lowerConfirm, upperConfirm, numConfirm, symConfirm, passLength) {
  
  let passArray = []

  const lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  const upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','O','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  const numArray = ['1','2','3','4','5','6','7','8','9','0']

  const symArray = ['!','#','@','$','%','^','&','*','(',')','?','>','<']

  if (lowerConfirm === true) {
    passArray = [...lowerArray]
  } 
  if (upperConfirm === true) {
    passArray = [...upperArray, ...passArray]
  }
  if (numConfirm === true) {
    passArray = [...numArray, ...passArray]
  }
  if (symConfirm ===true) {
    passArray = [...symArray, ...passArray]
  }

  let password = "";
  for(i = 1; i <= passLength; i++) {
    let randomNum = Math.floor(Math.random() * passArray.length);
    password += passArray[randomNum];
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);