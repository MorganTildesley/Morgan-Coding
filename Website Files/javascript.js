"Hi There! It's " + "sunny out"

var firstName = prompt("What is your first Name?")
var lastName = prompt("What is your last Name?")
var fullName = firstName + lastName
alert("Thanks! " + "So your full Name is: " + fullName)


var first = prompt("enter first number");
var second = prompt("enter second number");
var sum = Number(first) + Number(second);
alert("The sum is:" + sum);

var age = prompt("How old are you?")
    if (age < "18") {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (age === "18") {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (age > "18") {
        alert("Powering On. Enjoy the ride!");
    }