// function world() {
//   console.log("hello world");
// }
// world();

// function world() {
//   return console.log("hello world");
// }
// world();

// function world() {
//   return "hello world";
// }
// console.log(world());

// function world() {
//   let result = "hello world";
//   return result;
// }
// console.log(world());

// function world() {
//   let result = console.log("hello world");
//   return result;
// }
// world();

// function world() {
//   let result = "hello world";
//   return console.log(result);
// }
// world();

// function world(name) {
//   let result = name + "world";
//   return result;
// }
// console.log(world("hello"));

// let test = function print() {
//   let result = world();
//   console.log(result);
//   function world() {
//     return "hello world";
//   }
// //   this is the worng way but its work

// };
// console.log(test());

// let number = parseInt(prompt("type a number"));
// function isPrime(number) {
//   if (number <= 1) {
//     console.log(`${number} is not a prime number`);
//     return;
//   }
//   let isPrime = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (!isPrime) {
//     console.log(`${number} is not a prime number`);
//   } else {
//     console.log(`${number} is a prime number`);
//   }
// }

// isPrime(number);

// let number = parseInt(prompt("type a number"));
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// }
// if (isEven(number)) {
//   console.log(`${number} is a Even number`);
// } else {
//   console.log(`${number} is a odd number`);
// }

// let number = parseInt(prompt("type a number"));
// function range(number) {
//   let range = "";
//   if (number > 1 && number < 10) {
//     range = "tiny";
//   } else if (number > 11 && number < 100) {
//     range = "small";
//   } else if (number > 101 && number < 1000) {
//     range = "medium";
//   } else if (number > 1000) {
//     range = "large";
//   }
//   switch (range) {
//     case "tiny":
//       return "tiny number";
//     case "small":
//       return "small number";
//     case "medium":
//       return "medium number";
//     case "large":
//       return "large number";
//     default:
//       return "invalid input";
//   }
// }

// console.log(range(number));

// function check(number) {
//   let odd = 0;
//   let even = 0;

//   for (let i = 0; i < number; ) {
//     let lastNumber = number % 10;
//     if (lastNumber % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//     let newNumber = Math.floor(number / 10);
//     number = newNumber;
//   }
//   return { even, odd };
// }

// console.log(check(12345));

// reversing a number without using string method

// function reverse(number) {
//   let store = "";
//   while (number > 0) {
//     let lastNumber = number % 10;
//     store += lastNumber;
//     let newNumber = Math.floor(number / 10);
//     number = newNumber;
//   }
//   let result = parseInt(store);
//   return result;
// }

// console.log(reverse(12345));

// write a function grade calculator

// function Grade(number) {
//   let message = "";
//   let grade = "";
//   let remarks = "";
//   if (number > 100) {
//     message = "plz enter a number less than 101";
//     return message
//   } else if (number < 0) {
//     message = "negative number are not allowed";
//     return message
//   } else if (number >= 90) {
//     grade = "A";
//   } else if (number >= 60) {
//     grade = "B";
//   } else if (number >= 33) {
//     grade = "C";
//   } else {
//     grade = "D";
//   }

//   switch (grade) {
//     case "A":
//       remarks = "Excellent";
//       break;
//     case "B":
//       remarks = "Good";
//       break;
//     case "C":
//       remarks = "Better";
//       break;
//     case "D":
//       remarks = "Fail";
//       break;
//     default:
//       break;
//   }

//   return {grade, remarks}
// }

// console.log(Grade(99));

/* -----small calculator------ */

// function calculate(a, b, operation) {
//   let answer = "";
//   switch (operation) {
//     case "+":
//       answer = a + b;
//       return `the answer of ${a}${operation}${b} is = ${answer}`;
//       break;
//     case "*":
//       answer = a * b;
//       return `the answer of ${a}${operation}${b} is = ${answer}`;
//       break;
//     case "-":
//       answer = a - b;
//       return `the answer of ${a}${operation}${b} is = ${answer}`;
//       break;
//     case "/":
//       answer = a / b;
//       return `the answer of ${a}${operation}${b} is = ${answer}`;
//       break;
//     case "%":
//       answer = a % b;
//       return `the answer of ${a}${operation}${b} is = ${answer}`;
//       break;

//     default:
//       answer = "something went wrong";
//       return answer;
//       break;
//   }
// }

// console.log(calculate(4, 3, "/"));


