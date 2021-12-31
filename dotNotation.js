// // setting a constant i which can't be changed
// const i = ["Hello"]

// // print i in the terminal
// console.log(i);

// // print string
// console.log("Hello World");

// // makes the letters upper case
// console.log("hello".toLocaleUpperCase());

// // makes the letters lower case
// console.log("HELLO".toLocaleLowerCase());

// // generates a random number between 0 and 1 (including 0)
// console.log(Math.random());

// // generates a random number between 0 and 10 (including 0)
// console.log(Math.random()*10);

// // generates a random number and rounds or equals to the lower integer
// console.log(Math.floor(Math.random()*10));

// Activity 1
// WAY 1 console.log way
// printing every line with console.log
console.log("    |     |    ");   
console.log("    |     |    "); 
console.log("    |     |    "); 
console.log("---------------");
console.log("    |     |    ");
console.log("    |     |    ");
console.log("    |     |    "); 
console.log("---------------");
console.log("    |     |    "); 
console.log("    |     |    "); 
console.log("    |     |    ");   

// WAY 2 array and loops
// creating array with 2 elements
const dashline = ["    |     |      ","---------------"];

//  runs the for loop to print 1 element 3 times
for (let i = 0; i < 3; i++) {
    console.log(dashline[0]);
  }
  // prints the 2 element from array (dash line)
  console.log(dashline[1]);

  for (let i = 0; i < 3; i++) {
    console.log(dashline[0]);
  }
  console.log(dashline[1]);

  for (let i = 0; i < 3; i++) {
    console.log(dashline[0]);
  };

// WAY 3 array and loop 
// creating an array for the grid
const grid = [
  '    |     |    ',
  '    |     |    ',
  '    |     |    ',
  '---------------',
  '    |     |    ',
  '    |     |    ',
  '    |     |    ',
  '---------------',
  '    |     |    ',
  '    |     |    ',
  '    |     |    '
]

// this loop will print out every element of the array in different line 
for (let i = 0; i < grid.length; i++) {
  console.log(grid[i]);
};

// WAY 4 nested for loops
// this loop runs for 3 times
for (let i = 0; i < 3; i++) {
  // this loop prints element 3 times
  for (let j = 0; j < 3; j++) {

    console.log('    |     |    ')
  }
  // it stops printing dash line after 2 times (when loop runs for the 3 time it doesn't print anymore)
  if (i !== 2) {

    console.log('---------------')
  }
};

// Activity 2
  let n = "akvile";
  let age = 26;
  let sign = "Leo";

  console.log("My name is " + n.toUpperCase());
  console.log("I am " + age + " years old");
  console.log("My star sign is " + sign)

// Activity 3
//   SLICE METHOD removes the first and the last letters
console.log("George".slice(1,-1));

//  REPLACING THE THE PART OF THE WORD
const word = 'mozilla';
const newword = word.replace('moz','van');
console.log(newword)

// MAKES A STRING FROM A NUMBER
var num = 95;
console.log(num.toString());

// endsWith METHOD checks if the last element is d
console.log('Hello World'.endsWith('d'));

// TRIM METHOD removes the blank space before the first word
console.log('     Hello      World!'.trim());