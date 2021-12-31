// // we create an object cafe 
// const cafe = {
//     // key : value
//     // value can be string, integer, boolean, array, function
//     name: 'Whitesheep',
//     seatingVapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         'Cappuccino',
//         'Latte',
//         'Filter Coffee',
//         'Tea',
//         'Hot Chocolate'
//     ],
// };

// // access the value in the object
// console.log(cafe.name);
// // or it can be access like this as well just with the brackets
// console.log(cafe['name']);

// // we create another object with three key-value pairs
// const person = {
//     name: 'Akvile',
//     age: 26,
//     songs: [
//         'Harpe',
//         'Jungle Bells',
//         'Halleluhah'
//     ]
// };

// console.log(person.name, person.age);
// // the same just different syntax
// console.log(person['name'],person['age']);

// // if statement to check if object.name is Akvile print out object.songs array
// if (person.name === 'Akvile') {
//     console.log(person.songs);
// };


// // we create variables one with string another with integer
// let offer = 'none';
// let time = 1200;

// // we create an object cafe with different key-value pairs
// const cafe = {
//     // in this object we have 7 different key-value pairs
//     name: 'Whitesheep',
//     seatingVapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         'Cappuccino',
//         'Latte',
//         'Filter Coffee',
//         'Tea',
//         'Hot Chocolate'
//     ],

//     breakfastOffer: 'Free croissant with coffee',
//     lunchOffer: 'Free drink with surprisingly priced sandwich',
//     noOffer: 'Sorry no offer',

//     // we have 2 methods(or functions) within the object
//     // we can write the function in object like this (ES6 modern version of JS)
//     openCafe() {
//         // because hasSpecialOffers is not in the function we need to use keyword 'this' to access hasSpecialOffers within this object
//         if(this.hasSpecialOffers) {
//             // so if hasSpecialOffers is true then it will print out this
//             return 'Time for a special offer!';
//         }
//     },
//     // an arrow function that prints out this
//     closeCafe: () => {
//         return 'We are closed, come back tomorrow!'
//     }
// };

// // calls the functions within the object cafe
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// // if statement to check if cafe has any special offers at certain time
// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }
// else if (time <1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }
// else {
//     offer = cafe.noOffer;
//     console.log(cafe.noOffer);
// };

// // change the array which is in the object
// cafe.drinks = ['Flat White','Latte','Cortado'];

// // print out the array drinks within an object
// console.log(cafe.drinks);


// // Activity
// // we create variables: one emty and another with a string
// let alarm1 = '';
// let day = 'Saturday';

// // we create an object with two key-value pairs
// const alarm = {
//     weekendAlarm: 'no alarm needed',
//     weekdayAlarm: 'get up at 7am'
// };

// // if statement checks if its weekend and assigns the value to our emty variable with an object's key value 
// if ((day === 'Saturday') || (day === 'Sunday')) {

//     alarm1 = alarm.weekendAlarm;
// }
// // if the first condition wasn't met it assigns the other value of an objects key
// else {
//     alarm1 = alarm.weekdayAlarm;
// };

// // prints out the variable
// console.log(alarm1);


// // we create two variables: one emty and another with a string
// let alarm1 = '';
// let day = 'Wednesday';

// // we create an object alarm with different key value pairs
// const alarm = {
//     weekendAlarm: 'no alarm needed',
//     mondayAlarm: 'get up at 7am',
//     tuesdayAlarm: 'get up at 10am',
//     wednesdayAlarm: 'get up at 7am',
//     thursdayAlarm: 'get up at 10am',
//     fridayAlarm: 'get up at 12pm'
// };

// // we create switch to make it easier to assign the value from the object with different conditions
// switch (day) {
//     case 'Monday':
//         alarm1 = alarm.mondayAlarm;
//         break;
//     case 'Tuesday':
//         alarm1 = alarm.tuesdayAlarm;
//         break;
//     case 'Wednesday':
//         alarm1 = alarm.wednesdayAlarm;
//         break;
//     case 'Thursday':
//         alarm1 = alarm.thursdayAlarm;
//         break;
//     case 'Friday':
//         alarm1 = alarm.fridayAlarm;
//         break;
//     default:
//         alarm1 = alarm.weekendAlarm;
// }

// // it will print out our new variable 
// console.log(alarm1);

// Activity 1

// we create an object person with different key-value pairs
const person = {
    name: 'Akvile',
    age: 26,
    songs: [
        'Harpe',
        'Jungle Bells',
        'Halleluhah'
    ],

    // we create a function in the object that will print out the text
    sayHi() {
        // we access the name value by using 'this' 
        return `Hello my name is ${this.name}.`;
    }
};

// we call the function in the object and print it out
console.log(person.sayHi());

// Activity 2
// we create an object pet with different key-value pairs
const pet = {
    name: 'Fanta',
    typeOfPet: 'cat',
    age: 12,
    colour: 'mixed',

    // we create different methods in the object
    eat() {
        // we access the values of the keys using 'this' command 
        return `Your lovely ${this.typeOfPet} ${this.name} is eating.`
    },

    drink() {
        return `Your lovely ${this.typeOfPet} ${this.name} is drinking.`
    },
};

// we call the functions in the object and print them out
console.log(pet.eat());
console.log(pet.drink());

// Activity 3
// 1 WAY
const coffeeShop = {
    branch: 'Change Please',
    drinksWithPrices: [
        'Latte',
        3,
        'Cortado',
        2
    ],
    foodWithPrices: [
        'Panini',
        5,
        'Tostati',
        6
    ],

    drinksOrdered() {
        return `Your order is: ${this.drinksWithPrices[0]} ${this.drinksWithPrices[1]}£ and ${this.drinksWithPrices[2]} ${this.drinksWithPrices[3]}£ with the total cost of ${this.drinksWithPrices[1] + this.drinksWithPrices[3]}£.`
    },

    foodOrdered() {
        return `Your order is: ${this.foodWithPrices[0]} ${this.foodWithPrices[1]}£ and ${this.foodWithPrices[2]} ${this.foodWithPrices[3]}£ with the total cost of ${this.foodWithPrices[1] + this.foodWithPrices[3]}£.`
    },
};

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());

// 2 WAY
// we create an object coffeeShop
const coffeeShop = {
    branch: 'Manchester',

    // we create another object in an object with drinks and their prices
    // every drink as a key and the price as a value
    drinks: {
        latte: 2.90,
        cortado: 2.50,
        caramelatte: 3.8,
        espresso: 1.8,
    },

    // we create another object for food
    // every item as a key and the price as a value
    food: {
        panini: 4.80,
        tostati: 5.10,
        muffin: 2.20,
        flapjack: 1.80,
    },

    // we create a function with as many parameters as we give 
    drinksOrdered(...orderedDrinks) {
        // we create a variable of price 
        let price = 0;
        // we create a variable which will keep our parameters as string and print them out with an 'and' between them if its more than 1 drink
        const drinkString = orderedDrinks.join(' and ');

        // we check all our given arguments and with forEach method and create a new function that if the drink is in the object they will use the drink's value to count the price, and if there are more than one add them together
        orderedDrinks.forEach(drink => (price += this.drinks[drink]));
        
        // we are calling the function in this object with the parameters that we got from this function
        return this.allOrder(drinkString, price);
    },

    // we create a function with as many parameters as we give 
    foodOrdered(...orderedFood) {
        // we create a variable of price 
        let price = 0;
        // we create a variable which will keep our parameters as string and print them out with an 'and' between them if its more than 1 item
        const foodString = orderedFood.join(' and ');

        // we check all our given arguments and with forEach method and create a new function that if the food is in the object they will use the food's value to count the price, and if there are more than one add them together
        orderedFood.forEach(item => (price += this.food[item]));
        
        // we are calling the function in this object with the parameters that we got from this function
        return this.allOrder(foodString, price);
    },

    // we creating a function with two parameters that will print out the text with those two parameters 
    allOrder(order, price) {
        return console.log(`You have ordered ${order}, so the total price would be £${price}!`);
    },
};

// we call the function which is in the object and give it as many arguments as we want 
coffeeShop.drinksOrdered('cortado','latte','espresso');
coffeeShop.foodOrdered('panini','muffin');