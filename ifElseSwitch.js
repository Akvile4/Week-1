// let weather = 'sunny';

// if (weather == 'sunny') {
//     // prints out if this condition was met
//     console.log('I wil have to wear suncream!')
// } 
// else if (weather == 'rainy') {
//     // prints out if the second condition was met
//     console.log('I must take umbrella!')
// } 
// else {
//     // prints out if none of the above conditions were met
//     console.log('Not sure what to do today???')
// };

// // === has to be strict rules, so number is equal to number not to a string
// if (1 === '1') {     
//     console.log(true);
// }
// else {
//     console.log(false);
// };

// // =! if not equal has to check the same string and the same number, it will work 
// if (1 != '1') {     
//     console.log(true);
// }
// else {
//     console.log(false);
// };

// let place = 'Manc';
// weather = 'cloudy';

// // && means and, so both conditions have to be met 
// if (place == 'Manc' && weather == 'sunny') {
//     console.log('Check again');
// }
// else if (place == 'Manc' && weather == 'rain') {

//     console.log('Obviously');
// }
// else {

//     console.log('What it is not raining?');
// };

// let day = 'Saturday';

// // || means or, so only one condition has to be right
// if (day == 'Saturday' || day == 'Sunday') {
//     console.log('It is weekend!');
// }
// else {
//     console.log('When is the weekend?');
// };

// //  SWITCH
// const grade = 67;

// // so the condition has to be true
// switch (true) {
//     // if 1st condition is met
//     case grade >= 70:
//         console.log('Distinction');
//         break;
//     // if 2nd condition is met
//     case grade >= 60:
//         console.log('Merit');
//         break;
//     // if 3rd condition is met
//     case grade >= 50:
//         console.log('Pass');
//         break;
//     // else - if none of the conditions above were met
//     default:
//         console.log('Failed');
// };

// Activity 1

let age = 17;
let country = 'UK';

// checking if the both conditions were met
if (age > 17 && country === 'UK') {

    console.log('Yes, I can serve you.');
}
// checking the 2nd condition
else if (age <18 && country === 'UK') {

    console.log('You are not old enough in the UK...');
}
else {
// if none conditions were met print out this
    console.log('I am not sure about the rules in your country...');
};

// Activity 2
let topping = 'pineapples';

// we are going to check the 'topping' variable
switch(topping) {
    case 'mushrooms':
    case 'peppers':
    case 'cheese':
    case 'chorizo':
        // if any of the cases matches our variable print out this
        console.log(`These are important ingredients to my pizza!`);
        break;
    case 'tomatoes':
    case 'peperoni':
    case 'sweetcorns':
        // if the variable matches anything from this list print out this
        console.log(`I don't mind having ${topping} on my pizza.`);
        break;
        // with every other 'topping' print out this
    default:
        console.log(`${topping} should not be on a pizza!`);
};

// Activity 3
let password = 'bananahamock';

// checking if the variable 'password' has less than 8 characters
if (password.length < 8) {

    console.log('Your password is too short... Try again.');
}
// if it has more than 8 with template literals we print out the password
else {

    console.log(`Your password is ${password}.`);
};

//  Activity 4
let num = 7;

// checking if the number is divisible by 3 OR 5
if ((num % 3 == 0) || (num % 5 == 0)) {
    // with template literals we print out the number
    console.log(`This number ${num} is divisible by 3 or 5.`);
}
// if the number is not divisible by 3 or 5 print out this
else {

    console.log(`Wrong. This number ${num} is not divisible by 5 or 3...`);
};

// Switch way
// the condition ha sto be true
switch(true) {
    // checking if the number is divisible by 3
    case num % 3 == 0:
        // printing out with template literals the number
        console.log(`Number ${num} is divisible by 3.`);
        break;
    // checking if the number is divisible by 5
    case num % 5 == 0:
        console.log(`Number ${num} is divisible by 5.`);
        break;
    // if the number is not divisible by 3 or 5 print out this
    default:
        console.log(`This number ${num} is not divisible by 3 or 5...`);
};

// Activity 5
num = 15;

// checking if the number is divisible by 3 AND 5
if ((num % 3 == 0) && (num % 5 == 0)) {
    // if both conditions were met print out this
    console.log('fizz buzz');
}
// if the number is only divisible by 3 print out this
else if ((num % 3 == 0)) {
    
    console.log('fizz');
}
// if the number is only divisble by 5, print out this
else if ((num % 5 == 0)) {
    console.log('buzz');
}
// if none of the conditions were met print out the number
else {
    console.log(num);
};

// Activity 6
num = 123321;

// we change a number into a string and reverse it by spliting every character and then joining them together 
let reversed = num.toString().split('').reverse().join('');
console.log(reversed);

// check if the number is the same as reversed number
if (num == reversed) {
    // printing out the number with template literals
    console.log(`Number ${num} is a polindrome!`);
}
// if both numbers do not match print out this
else {
    console.log('It is not a polindrome...')
};

// Activity 7
let time = 21;
let placeOfWork = 'coffee Shop';
let townOfHome = 'Salford';

// checking if the variable time meets both conditions and if yes with template literals print out the variable 'plaveOfWork'
if ((time >= 7) && (time < 18)) {

    console.log(`I am working at my ${placeOfWork}.`);
}
// checking if 'time' meets other both conditions
else if ((time >= 18) && (time < 22)) {

    console.log('I am at the gym.');
}
// if none of the previous conditions were met with template literals printing out the variable 'townOfHome'
else {
    console.log(`I am sleeping at my home in ${townOfHome}.`);
};

// Switch Way
// We set the variables of time, place of work and town of home
let time = 23;
let placeOfWork = 'office';
let townOfHome = 'Vilnius';

// we use switch to tell where we are at the certain time of the day
// if the statement meets any case that we have described it will print out where we are 
switch(true) {
    // checking the first case and if its true prints out the text 
    case (time >= 7) && (time <= 9):
        console.log('I am getting ready to work.');
        break;
    case (time > 9) && (time <= 17):
        console.log(`I am working at my ${placeOfWork}.`);
        break;
    case (time > 17) && (time <= 22):
        console.log(`I am at my house in ${townOfHome}.`);
        break;
    // if none of the above cases are true it prints out this
    default:
        console.log(`I am sleeping in my house in ${townOfHome}...`);
     
}

// Activity 8
let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// finding the last index of all the vowels
let i = string.lastIndexOf('i');
let a = string.lastIndexOf('a');
let e = string.lastIndexOf('e');
let u = string.lastIndexOf('u');
let o = string.lastIndexOf('o');

// making an array from all of the last vowels indexes
let  vowels = [i,a,e,u,o];
// finding the highest value out of all elements of the array and printing it out
console.log(Math.max(...vowels));

// Activity 9
let word = 'mamam'

// slice takes the last letter of the element , charAt takes the first letter of the element
// instead of slice we could use word.charAt(word.length-1)
// if the last character of the element is the same as the first one then print out true
if (word.slice(-1) === word.charAt(0)) {

    console.log(true);
}
// if the characters do not match print out this
else {

    console.log(false);
};

// Activity 10
let num1 = 6;
let num2 = 5;

// checking if the sum of the numbers is even and if it is with template literals printing out the sum
if ((num1 + num2) % 2 == 0) {

    console.log(`The sum = ${num1 + num2} and is even.`);   
}
// if the sum of the numbers is not even with template literals we multiplying the numbers and printing them out
else {

    console.log(`${num1 * num2}`);
};