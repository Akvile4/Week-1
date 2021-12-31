// // we create an array with 4 different elements in it 
// let coffeeOrder = [
//     "Rhys - Cappuccino",
//     "Akvile - Flat White",
//     "Jolanta - Espresso",
//     "Paulina - Cortado"
// ];

// // we change the second element of the array with the new one
// coffeeOrder[1] = 'Nicola - Latte';

// // we add another element at the end of the array
// coffeeOrder.push('George - Americano');
// // we remove the last element of the array
// coffeeOrder.pop();
// // we print out the array
// console.log(coffeeOrder);

// // we print out how many elements are in the array
// console.log(coffeeOrder.length);

// // Activity 1
// // we create the array of favourite songs
// let faveSongs = [
//     'Harpe',
//     'Halleluhah',
//     'Rockin around'
// ];

// console.log(faveSongs);

// // we add the other songs at the end to the array
// faveSongs.push('Lover boy','All I want for Christmas');

// // we remove the last element of the array and print it out
// console.log(faveSongs.pop());

// // just remove the last element of the array
// faveSongs.pop();

// console.log(faveSongs);

// // Activity 2
// // we create the array
// let faveSongs = [
//     'Harpe',
//     'Halleluhah',
//     'Rockin around'
// ];

// //  Method SHIFT
// // removes the first element of the array
// faveSongs.shift();

// console.log(faveSongs);
// // removes the first element of the array and prints it out
// console.log(faveSongs.shift());

// // UNSHIFT method 
// // adds elements to the beginning of the array
// faveSongs.unshift('Cucurucu', 'Singing in the rain');
// console.log(faveSongs);

// // Method SPLICE
// // inserts an element in the array (place, how many elements to change, new element)
// faveSongs.splice(1, 0, 'Baby love');

// console.log(faveSongs);

// // in this case 3rd element would be changed with the new one 
// faveSongs.splice(2, 1, 'Snowing');

// console.log(faveSongs);


// // LOOPS

// // we create an array of favourite drinks
// let faveDrink = ['Fanta', 'Coke', 'Lemon Fanta'];

// // we print out every element of the array with console.log function
// console.log(faveDrink[0]);
// console.log(faveDrink[1]);
// console.log(faveDrink[2]);

// // we use FOR loop to do exactly the same
// // for (from, run till this condition, add each time the loop is done)
// for (let i = 0; i < faveDrink.length; i++) {
//     // print out the element of the array which number is i
//     console.log(faveDrink[i]);
// };

// // we create an empty array where we will put numbers that can be divisible by 2
// let multiplesTwo = [];

// // we run the loop from 0 to 20 to check which numbers are divisible by 2 
// for (let i = 0; i <= 20; i++) {
//     // if the number is divisible by 2 we will add to the end of the array
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// };

// //  we will print out with template literals which numbers are divisible by 2
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// // we set the variable age
// let age = 15;

// // we run the loop WHILE , with the condition ()
// while (age < 18) {
//     // while the condition is met it will print out this
//     console.log('You are a child!');
//     // it will add +1 to age everytime the loop runs
//     age++;
// };

// // it will print out this after the loop is finished
// console.log('You are an adult!');

// // we create an array with 4 elements in it
// let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
// // we set the variable currentCard to one of the elements of the array
// let curentCard = 'Club';

// // we run while loop while our currentCard is not 'Spade'
// while (curentCard != 'Spade') {

//     // it will print out the currentCard if its not 'Spade'
//     console.log(curentCard);
//     // we set the new value for our variable by making it choose randomly from the cards array 
//     curentCard = cards[Math.floor(Math.random()*4)];

// };

// // it prints out the 'Spade' because while stops running when the card is 'Spade'
// console.log(curentCard);


// // Activity 1

// // we create an array of our favourite movies
// let faveFilms = [
//     'Inglorious Bastards',
//     'Harry Potter',
//     'Home Alone',
//     'Mind Hunter',
//     'Dark'
// ];

// // we add two more movies to the end of the array 
// faveFilms.push('Psycho', 'Kill Bill');

// // we run for loop to print out all the movies of the array
// for (let i = 0; i < faveFilms.length; i++) {

//     console.log(faveFilms[i]);

// };

// // Activity 2

// // 1 WAY
// // we set variables that min is 1 and max is 50
// let min = Math.ceil(1);
// let max = Math.floor(50);

// // we run the loop for to get 6 random numbers from 1 to 50 and print them out 
// for (i =0; i < 6; i++) {
    
//     console.log(Math.floor(Math.random() * (max - min + 1) + min));

// };

// // 2 WAY
// // we use for loop to print out 6 random numbers
// for (let i = 0; i < 6; i++) {
//     // it will print out random numbers from 1 to 50 six times
//     console.log(Math.floor(Math.random() * 50));
// };

// // Activity 3

// // we print out the numbers backwards from 9 to 0 
// for (i = 10; i--;) {

//     console.log(i);

// };

// // Avtivity 4

// // we create an array of our favourite movies
// let faveFilms = [
//     'Inglorious Bastards',
//     'Harry Potter',
//     'Ghostbusters',
//     'Home Alone',
//     'Mind Hunter'
// ];

// // we use for loop to go through the whole array
// for (let i = 0; i < faveFilms.length; i++) {
//     // we use if statement to check if the 3rd element of the array is the 'Ghostbusters'
//     if (faveFilms[2] == 'Ghostbusters') {
//         // if it is print out this
//         console.log('Yay, it is Ghostbusters!');
//     }
//     // if it is not 'Ghostbusters' print out this
//     else {
//         console.log('Boo! Where is Ghostbusters!');
//     };

// // Activity 5

// // 1 WAY
// // we create variables min 1 and max 30
// let min = Math.ceil(1);
// let max = Math.floor(30);

// // we run the for loop 6 times
// for (i =0; i < 6; i++) {
    
//     // it will randomly choose the number between 1 and 30
//     num = Math.floor(Math.random() * (max - min + 1) + min);

//     // if that number is divisible by 7 print out this
//     if (num % 7 == 0) {
//         console.log(`Number ${num} is divisible by 7.`);
//     }
//     // if not print out this
//     else {
//         console.log(`Number ${num} is not divisible by 7.`);
//     }
// };

// // 2 WAY

// // we run for loop 6 times 
// for (let i = 0; i < 6; i++) {
//     // we create a random number from 1 to 30 
//     let num = Math.floor(Math.random() * 30);
//     // if number is divisible 7 print out this 
//     if (num % 7 == 0) {
//         console.log(`Number ${num} is divisible by 7!`);
//     }
//     // if number is not divisible by 7 print out this
//     else {
//         console.log(`Number ${num} is not divisible by 7...`)
//     }
// };

// // Activity 6

// // we create an array for George fallowers
// let georgesFallowers = [
//     'Adam',
//     'Hana',
//     'Beth',
//     'Elizabeth'
// ];

// // we create an array for Innes fallowers
// let innesFallowers = [
//     'Hana',
//     'Tom',
//     'Richard',
//     'Adam'
// ];

// // we run the for loop through the Georges fallowers array
// for (let i = 0; i < georgesFallowers.length; i++) {
//     // in this loop we run another for loop through Innes fallowers array
//     for ( j = 0; j < innesFallowers.length; j++) {
//         // if the George's fallower which number on the array is i matches Innes fallower which number on the array is j it prints the name out 
//         if (georgesFallowers[i] === innesFallowers[j]) {
//             console.log(`${georgesFallowers[i]} is fallowing Innes and George!`);
//         }
//     }
// };

// // Activity 7 
// // do..while loop
// // it will run at least one time and then checks if the condition was met

// // we create an emty string variable
// let result = '';
// // we create variable with number
// let i = 3;

// // we run do...while loop 
// // we do this at least once even the condition is not right 
// do {
//     i = i + 1;
//     result = result + i;
// } 
// // the loop will be running while condition is met
// while (i < 5);

// // it will preint the result 
// console.log(result);

// // test question
// let age = 17;

// while (age <18) {
//     console.log('Child!');
//     // make sure to put enough ++ otherwise it won't work 
//     age++;
// }

// console.log('Adult!');
