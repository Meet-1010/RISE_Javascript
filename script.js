//* Assignment 1 : Smart Discount Calculator

let name = 'Meet'
let age = 11
let purchaseAmount = 1200
let discount = 0;

if(age < 18){
    discount = 10;
}else if( age >= 60){
    discount = 20;
}

if(purchaseAmount > 5000){
    discount += 5;
}

let result = purchaseAmount - ((purchaseAmount * discount) / 100);
console.log(`Hi ${name}! You recieved a total discount of ${discount}. Final amount: ${result}`);

//* Assignment 2 : Login Validation System

let username = 'Meetsc04'
let password = 'meet1234'

if(username == 'Meetsc04' && password == 'meet1234'){
    console.log("Successfully Logged In");
}else if(username == 'Meetsc04' || password == 'meet1234'){
    console.log("One of the credentials is incorrect");
}else{
    console.log("Both are Incorrect");
}

// * Assignment 3 : Number Analyzer Tool

let num = 12

if(num == 0){
    console.log("The Number is Zero");
}else if(num < 0){
    console.log("The Number is Negative");
}else{
    console.log("The Number is Positive");
}

if(num == 0){
    console.log("The number is Zero");
}
else if(num % 2 == 0){
    console.log("The number is Even");
}
else{
    console.log("The number is ODD");
}

//* Assignment 4 : Shopping Eligibility Checker

let isMember = true;
let cartValue = 1200;

if((isMember && cartValue > 1000) || cartValue > 2000){
    console.log("You are eligible for free delivery!");
}else{
    console.log("You are not eligible for free delivery!");
}

//* Assignment 5 : Grade Evaluation System

let marks = 92;
let grade;

if(marks < 0 || marks > 100){
    console.log("Invalid Input");
}else{
    if(marks > 90){
        grade = 'A';
    }else if(marks >= 75 && marks <= 89){
        grade = 'B';
    }else if(marks >= 50 && marks <= 74){
        grade = 'C';
    }else if(marks < 50){
        grade = 'Fail';
    }
    console.log(`Your grade is ${grade}`);
}
