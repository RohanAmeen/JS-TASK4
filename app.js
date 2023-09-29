//chap 17 to 20
//program 1
// // Declare and initialize an empty multidimensional array
// var emptyMultiArray = [];
// // Declare and initialize a 2D array
// var twoDArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//program 2
// var matrix = [
//     [0,1, 2, 3],
//     [1,0,1,2],
//     [2,1,0,1]
//   ];
//   document.write(matrix);
  
//program 3
// for(var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }

//program 4

// var tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Check if the inputs are valid numbers
// if (!isNaN(tableNumber) && !isNaN(tableLength)) {
//   document.write("Multiplication table for "+tableNumber+" up to "+tableLength+" terms:");
//   for (let i = 1; i <= tableLength; i++) {
//     var result = tableNumber * i;
//     document.write("<br>"+tableNumber+" x "+ i+" = "+result);
//   }
// } else {
//   document.write("Invalid input. Please enter valid numbers.");
// }

//program 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];


// for (var i = 0; i < fruits.length; i++) {
//     document.write( fruits[i] + "<br>"); 
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write( "Element at index "+ [i] + " is "+ fruits[i] + "<br>"); 
// }

//program 6
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h3>Reverse counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Odd:</h3>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Series:</h3>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

//program 7
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// var found = false;

// for (var i = 0; i < items.length; i++) {
//     if (items[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

//Program 8
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br>");

// var largestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// document.write("The largest number is " + largestNumber);

//program 9
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br>");
// var smallestNumber = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }
// document.write("The smallest number is " + smallestNumber);

//program 10
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }

// Chapter 21 to 25

//program 1
//var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Nice to meet you.");

//program 2
// var favoritePhone = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhone.length;

// document.write("My favourite phone is: " + favoritePhone + "<br>");
// document.write("Length of string: " + inputLength);

//program 3
// var word = "Pakistani";
// var letterToFind = "n";
// var index = word.indexOf(letterToFind);

// document.write("String: " + word + "<br>");
// document.write("Index of '" + letterToFind + "': " + index);

//program 4
// var word = "Hello World";
// var letterToFind = "l";
// var lastIndex = word.lastIndexOf(letterToFind);

// document.write("String: " + word + "<br>");
// document.write("Last Index of '" + letterToFind + "': " + lastIndex);

//program 5
// var word = "Pakistani";
// var characterAtIndex3 = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Character at 3rd index: " + characterAtIndex3);

//program 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Nice to meet you.");

//program 7
// var city = "Hyderabad";
// var replacedCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replacedCity);

//program 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");

// document.write("Original Message: " + message + "<br>");
// document.write("After replacement: " + replacedMessage);

//program 9
// var stringNumber = "472";
// var number = +(stringNumber);

// document.write("value: " + stringNumber + "<br>");
// document.write("type: " + typeof stringNumber + "<br>");

// document.write("value: " + number + "<br>");
// document.write("type: " + typeof number + "<br>");

//program 10
// var userInput = prompt("Enter some text:");
// var uppercaseText = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + uppercaseText);

//program 11
// var userInput = prompt("Enter some text:");

// var firstChar = userInput.charAt(0).toUpperCase();
// var restOfText = userInput.slice(1).toLowerCase();

// var titleCaseText = firstChar + restOfText;

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCaseText);

//program 12
//var num = 35.36;
// var numString = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + numString);

//program 13
// var username = prompt("Enter a username:");

// if (username.includes("@") || username.includes(".") || username.includes("!") || username.includes(",")) {
//     alert("Please enter a valid username");
// } else {
//     alert("Username accepted: " + username);
// }

//program 14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// var found = false;

// for (var i = 0; i < items.length; i++) {
//     if (items[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }

//program 15
// const password = prompt("Enter password: ");
// if (!/[a-zA-Z0-9]+/.test(password)) {
//   alert("Password must contain alphabets and numbers.");
// }
// if (/^[0-9]/.test(password)) {
//   alert("Password cannot start with a number.");
// }
// if (password.length < 6) {
//   alert("Password must be at least 6 characters long.");
// }
// else {
//   alert("Password is valid.");
// }


//program 16
// var university = "University of Karachi";
// var universityArray = university.split(" ");

// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<br>");
    
//     var characters = universityArray[i].split("");
    
//     for (var j = 0; j < characters.length; j++) {
//         document.write(characters[j] + "<br>");
//     }
// }

//program 17
// var userInput = prompt("Enter some text:");

// if (userInput !== null && userInput !== "") {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     document.write("User input: " + userInput + "<br>");
//     document.write("Last character of input: " + lastCharacter);
// } else {
//     document.write("No input provided. Please enter some text.");
// }

//program 18
// var inputString = "The quick brown fox jumps over the lazy dog";
// var lowercaseString = inputString.toLowerCase();
// var wordToSearch = "the";
// var words = lowercaseString.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToSearch) {
//         count++;
//     }
// }
// document.write("Text: " + inputString + "<br>");
// document.write("There are " + count + " occurrence(s) of the word '" + wordToSearch + "'");
