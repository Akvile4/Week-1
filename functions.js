// // we create an arrow method function 
// const pressGrindBeans = () => {
//     // it prints out the string
//     console.log('Grinding for 20 seconds');

// }

// // we run the function
// pressGrindBeans();

// // we create the variable with the value of boolean
// let coffeeIsGrinding = false;

// // we create the arrow function 
// const pressGrindBeans = () => {
//     // if our variable 'coffeeIsGrinding' is true then it print out 'stopping the grind'
//     if (coffeeIsGrinding) {

//         console.log('Stopping the grind');
//         // it will give the new value for our variable
//         coffeeIsGrinding = false;
//     }  
//     // if our variable 'coffeeIsGrinding' is false then it will print out 'grinding is about to begin'
//     else {

//         console.log('Grinding is about to begin');
//         // it will give the new value for our variable
//         coffeeIsGrinding = true;
//     }
// ;}

// // we run the function
// pressGrindBeans();
// pressGrindBeans();

// // we creating a variable accountNumber with an integer
// let accnumber = 564783920;

// // we creating an arrow function with two parameters
// const cashWithdrawal = (amount, accnum) => {

//     // with template literals we printing out both parameters
//     console.log(`Withdrawing ${amount} from account ${accnum}.`);
// };

// // we running the function with one argument and one parameter
// cashWithdrawal(500, accnumber);
// // we running the function with different arguments all three times
// cashWithdrawal(300, 568996524);
// cashWithdrawal(30, 123456789);
// cashWithdrawal(200, 7645188028936753);

// // we creating an arrow function with two parameters
// const addUp = (num1, num2) => {
//     // it will return the sum of those two parameters
//     return num1 + num2;
// };

// // we call the function giving two arguments
// addUp(7,3);
// // we run the functio with two arguments and ask it to print out the answer
// console.log(addUp(2,5));

// // we create an arrow function with one parameter
// const multiplyByNineFifths = (celsius) => {
    
//     // it will return our parameter which was multiplied by 9/5
//     return celsius * (9/5);
// };

// // we create an arrow function which will use the same parameter 
// const getFahrenheit = (celsius) => {
//     // we call the previous function and to the number we got from there we add 32 to it 
//     return multiplyByNineFifths(celsius) + 32;
// };

// // we call the second function with the argument and with template literals we print the answer out
// console.log(`The temperature is ${getFahrenheit(15)} F.`);

// // Activity 1
// // Declaration (another way of writing the fuction) 
// // creating a function with one parameter
// function factorial (n) {
//     // if our parameter meets one of the conditions then return 1
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }
//     // if none of the conditions were met do this
//     else {
//         return (n * factorial(n-1));
//     }
// };

// // calling the function with one argument and asking to print that out 
// console.log(factorial(33));

// // making the same function just in an Arrow function
// const factorial = (n) => {
//     if ((n === 0) || (n ===1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// };

// console.log(factorial(33));

// // Activity 2
// // 1 WAY
// // we create a variable 
// let orderCount = 0;

// // we create an arrow function with two parameters
// const takeOrder = (topping, topping2) => {

//     // with temmplate literals we print out our parameters
//     console.log(`Pizza with ${topping} and ${topping2}`);
//     // to our variable we add +1
//     orderCount++;
// }

// // calling the functions and asking them to print the results
// takeOrder('pineapples','mushrooms');
// takeOrder('tomatoes','ham');

// // checking how many orders we already placed
// console.log(orderCount);

// // 2 WAY
// // we create a variable 
// let orderCount = 0;

// // we create an arrow function with two parameters
// const takeOrder = (topping1, topping2) => {
//     // when we run the function it will add to the orderCount +1
//     orderCount++;
//     // it will print out the order's number
//     console.log(`Order number ${orderCount}:`);
//     // it will print out the toppings with template literals
//     console.log(`Pizza with ${topping1} and ${topping2}.`);
// };

// // we run the function twice with different arguments
// takeOrder('mushrooms','ham');
// takeOrder('pineapples','chorizo');


// // Activity 3
// // we create a constant of the right PIN number
// const pin1 = 1234;
// // we create a variable of guessing the pin number
// let pin2 = 1234;
// // we create a variable of how much money is in the bank account
// let cashIn = 1200;
// // we create a variable of how much money we want to take out 
// let cashOut = 1200;

// // creating an arrow function to check if the pin is right with two parameters
// const checkPin = (pinNumber, pinNum) => {
//     // if the both pin numbers match and if yes return true
//     if (pinNumber === pinNum) {
//         return true;
//     }
//     // if the pin we guessed is wrong then it will print out this
//     else {
//         console.log('You PIN is wrong !!! Try again !');
//     }
// }

// // we create an arrow function with three parameters of how much cash we want to take out, how much money is in the account, guessed pin number 
// const cashWith = (cash, moneyInAccount, pin) => {
//     // we checking if the checkPin function is true
//     if (checkPin(pin1, pin) == true) {
//         // if its true then we checking if the amount we want to take out is lower then it is in the bank account 
//         if (cash <= moneyInAccount) {
//             // if true then we counting the balance 
//             let balance = moneyInAccount - cash ;
//             // printing out with template literals balance and cash
//             console.log(`The amount of £${cash} was taken out of your account.`);
//             console.log(`Your balance is £${balance}.`);
//         }
//         // if we want to take more money than it is in the account then print out this
//         else {
//             console.log('You do not have enough money!');
//             console.log(`Your balance is £${moneyInAccount}.`);
//         }
//     }
// };

// // we call the function and use our already created variables as the parameters
// cashWith(cashOut,cashIn,pin2);
// // we call the function and use integers as arguments
// cashWith(1000, 2000, 1236);
