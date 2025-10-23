
function thermo(celsius){
    
    var message1 = "degrees celius are"
    var far = (celsius*5/9)+32
    return r.toString() + message1 + far.toString()
}   

var r = 18.5;

console.log(thermo(r))




function change(eur){
    txt1 = "eur is the equivalent of"
    txt2 = Math.round(eur/1.1),2;
    return x.toString() + txt1 + txt2;
}

var x = 200;

console.log(change(x));


var apples = 7
var pear = 7

if (apples => pear) {
    console.log("there are more or equal apples than pears")
}


var secret = "raffaele"
var guess = prompt("Guess the word : ")

if (secret == guess) {
    console.log("Congrats!")
}

else {
    console.log("Try again")
}



var weather = "sunny"

if (weather == "sunny"){
    console.log("take sunglasses");
}
else if (weather == "rainy"){
    console.log("take umbrella");
}
else if (weather == "cold"){
    console.log("take jacket");
}
else {
    console.log("idk");
}




function greet(gender){

    var msgmale = "Hello Sir !"
    var msgfemale = "Hello Madam!"
    var msgneutral = "Hello!"

    if (gender == "male"){
        return msgmale;
        } 
    else if (gender == "female"){
        return msgfemale;
        }
    else{
        return msgneutral;
    }
}

    var input = "male"

    console.log(greet(input))

var nb1 = 13
var nb2 = 789

if (Number(nb1) > 10 && Number(nb2) > 10){
    console.log("both are greater than 10")
}
else {
    console.log("at least one is less than 10")
}


var a = 8;
var b = 12;

if (a > 10 || b > 10) {
  console.log("At least one of the numbers is greater than 10");
} else {
  console.log("Both numbers are not greater than 10");
}




var lang = "Python"
var laang = "Java"
var nb = 10
var color = "blue"

if (lang=="Python" || lang=="Java"){
    console.log("ok");
}

if (lang=="Python" && laang=="Java"){
    console.log("TCC");
}




var lang = "Python"
var laang = "Java"
var nb = 10
var color = "blue"

if (lang=="Python" || lang=="Java"){
    console.log("ok");
}

if (lang=="Python" && laang=="Java"){
    console.log("TCC");
}

