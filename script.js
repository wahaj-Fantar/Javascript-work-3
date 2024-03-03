//---chapter 9-11 ---
//---------Q1---------

// var city = prompt("Enter your city : ");
// if (city == "karachi") {
//   alert("Welcome to city of lights");
// }

//---------Q2---------

// var gender = prompt("Please enter your gender (M/F) : ");
// if (gender == "Male") {
//   alert("Good Morning Sir.");
// } else {
//   alert("Good Morning Ma’am.");
// }

//---------Q3---------

// var color = prompt("Enter color of traffic signal : ");
// if (color == "Red") {
//   alert("Must Stop !");
// } else if (color == "Yellow") {
//   alert("Ready to move");
// } else if (color == "Green") {
//   alert("Move now !");
// } else {
//   alert("Invalid Color");
//

//---------Q4---------

// var fuel = prompt("How much fuel do you have in the tank(in litres)");
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("You can continue your journey");
// }

//---------Q5---------
// a)
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// Output = displayed
// given condition for variable a is true

// b)
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// Output = not displayed

// c)
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// Output = displayed
// "condition 2 and 4 is true"

// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// Output = displayed
// The cost equals

// e)
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// Output = displayed
// True

// f)

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Output = displayed
// car is smaller than cat

//---------Q6---------

// var totalMark = +prompt("Enter  the total number of marks: ");
// var marksObtained = +prompt(
//   "Enter the number of marks obtained(in 3 subjects) :"
// );
// var percentage = (marksObtained / totalMark) * 100;

// document.write("<h1>Marksheet</h1>" + "<br>");
// document.write("Total Marks : " + totalMark + "<br>");
// document.write("Marks Obtained : " + marksObtained + "<br>");
// document.write("Percentage : " + percentage + "%" + "<br>");

// if (percentage >= 80) {
//   document.write("Grade : A-one" + "<br>");
//   document.write("Remarks : Excellent" + "<br>");
// } else if (percentage >= 70) {
//   document.write("Grade : A " + "<br>");
//   document.write("Remarks : Good" + "<br>");
// } else if (percentage >= 60) {
//   document.write("Grade : B" + "<br>");
//   document.write("Remarks : You need to improve" + "<br>");
// } else {
//   document.write("Grade : Fail" + "<br>");
//   document.write("Remarks : Sorry" + "<br>");
// }

//---------Q7---------

// var secretNum = 10;
// var num = +prompt("Enter number(ranging from 1 to 10) : ");
// if (num == secretNum) {
//   alert("Bingo! Correct answer.");
// } else if (num == secretNum - 1) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Wrong  Answer!");
// }

//---------Q8---------

// var num1 = +prompt("Enter number: ");
// if (num1 % 3 === 0) {
//   alert("The number is divisble by 3");
// } else {
//   alert("The number is not divisible by  3");
// }

//---------Q9---------

// var num = prompt("Enter a number : ");
// if (num % 2 == 0) {
//   alert("even number");
// } else {
//   alert("odd number");
// }

//---------Q10 -------

// var temp = prompt("Enter temperature : ");
// if (temp > 40) {
//   alert("It is too hot outside.");
// } else if (temp > 30) {
//   alert("The Weather today is Normal.");
// } else if (temp > 20) {
//   alert("Today's Weather is cool.");
// } else {
//   alert("OMG! Today's Weather is so cool.");
// }

//---------Q11-------

// var num1 = +prompt("Enter first number : ");
// var num2 = +prompt( "Enter second number : ");
// var operator =  prompt("Enter the operator (+, - , *, /): ");

// if (operator  === '+'){
//     alert(num1 + num2);
// }
// else if (operator  === '-'){
//     alert(num1 - num2);
// }
// else if (operator  === '*'){
//     alert(num1 * num2);
// }
// else if (operator  === '/'){
//     alert(num1 / num2);
// }
// else{
//     alert("Invalid Operator")
// }

//---chapter 12-13 ---
//---------Q1-------

// var ch = prompt("Please enter a character (number or string):");
// if (ch >= "A" && ch <= "Z")
//   document.write(ch + " is an UpperCase character <br>");
// else if (ch >= "a" && ch <= "z")
//   document.write(ch + " is an LowerCase character <br>");
// else {
//   document.write(ch + " is a number <br>");
// }

//---------Q2-------

// var num1 = +prompt("Enter first number : ");
// var num2 = +prompt("Enter second number : ");

// if (num1 > num2) {
//   alert(num1 + " is greater than " + num2);
// } else if (num1 < num2) {
//   alert(num1 + " is less than  " + num2);
// } else {
//   alert(num1 + " and " + num2 + " are equal");
// }

//---------Q3-------

// var num = +prompt("Enter number : ");

// if (num > 1 && num !== 0) {
//   alert(" Number is positive");
// } else if (num < 1 && num !== 0) {
//   alert("Number is negative");
// } else {
//   alert("Zero");
// }

//---------Q4-------

// var vowel = prompt("Enter  a Vowel :");

// if (vowel === "a") {
//   alert("true");
// } else if (vowel === "e") {
//   alert("true");
// } else if (vowel === "i") {
//   alert("true");
// } else if (vowel === "o") {
//   alert("true");
// } else if (vowel === "u") {
//   alert("true");
// } else {
//   alert("False");
// }

//---------Q5-------

// var password = "BankLogin13";
// var userPassword = prompt("Please enter your Password : ");

// if (!userPassword) {
//   alert("Please enter your password");
// } else if (userPassword === password) {
//   alert("“Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

//---------Q6------

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
//   alert(greeting);
// } else {
//   greeting = "Good evening";
//   alert(greeting);
// }

//---------Q7------

// var time = +prompt("Enter time : ");

// if (time >= 0 && time < 1200) {
//   alert("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening");
// } else if (time >= 2100 && time < 2359) {
//   alert("Good Night");
// } else {
//   alert("wrong time");
// }
