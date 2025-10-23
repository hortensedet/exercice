// This function takes a boolean parameter
// that says if password was entered correctly
// (true = yes, false = no)
function logIn(passwordIsCorrect) {
  if (passwordIsCorrect != true) {
    console.log("Your password is not correct, you can't log in");
  } else {
    console.log("Welcome back! You are now signed in.");
  }
}
passwordIsCorrect = true

logIn(passwordIsCorrect)


function litersToGallons(liters) {
  var result = Number(liters) * 3.785
  var message = liters.toString() + " liters are " + result.toString() + " gallons.";
  console.log(message);
}

liters = 5678

litersToGallons(liters)




function isGreatherThan10(number) {
  if (Number(number) > 10) {
        console.log("The number is greater than 10.");
  } else {
    console.log("The number is smaller than 10.");
  }
}

number = 10
isGreatherThan10(number) 