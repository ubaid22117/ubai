// Task 1: Alerts
alert("Welcome to the JavaScript Basics Assignment!");
// Task 2: Variables for Strings
var favoriteFood = "Pizza";
console.log("My favorite food is: " + favoriteFood);

// Task 3: Variables for Numbers
var num1 = 10;
var num2 = 5; 
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
// Task 4: Variable Names Legal and Illegal
    // Legal Variable Names
    var legalVariable = "This is legal";

  
    var result = ((num1 + num2) * num1) / (num2 - 1);
        console.log("Result using BODMAS: " + result);


        var remainder = num1 % num2;
        console.log("Remainder of " + num1 + " divided by " + num2 + " is: " + remainder);
        var x = 5;
        var postIncrement = x++;
        console.log("Post Increment: " + postIncrement); // Outputs 5
        
    var y = 10;
    var preIncrement = ++y;
    console.log("Pre Increment: " + preIncrement); // Outputs 11
    var firstName = "ubaid";
    var lastName = "aqeel";
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);
    var userAge = prompt("Enter your age:");
    console.log("User's Age: " + userAge);
    var userNumber = prompt("Enter a number:");
    if (userNumber % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
    var userGrade = prompt("Enter your numerical grade:");
    var output = document.getElementById("output");
    if (userGrade >= 90) {
        output.innerHTML = "Your grade is A.";
    } else if (userGrade >= 80) {
        output.innerHTML = "Your grade is B.";
    } else if (userGrade >= 70) {
        output.innerHTML = "Your grade is C.";
    } else if (userGrade >= 60) {
        output.innerHTML = "Your grade is D.";
    } else {
        output.innerHTML = "Your grade is F.";
    }
