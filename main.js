// let noOfOrder = 3;
// let orders = 89;
// let prizzas = ["chizzPiza", "pannerPizza"];
// let diliveryTiming = "3min";
// let ownerName = "jack stark";
// let PizzaIngridient = "chilliPapper";
// let customers = ["vikram", "jay", "rajesh"];
// let branches = [
//   { mumbai: "pizzaHut", delhi: "dominos", jaipur: "cheeziPizza" },
// ];
// let paymentMode = "Rupay";
// let openDate = "09-05-12";

// console.log(
//   "noOfOrder",
//   noOfOrder,
//   "orders",
//   orders,
//   "prizzas",
//   prizzas,
//   "diliveryTiming",
//   diliveryTiming,
//   "ownerName",
//   ownerName,
//   "PizzaIngridient",
//   PizzaIngridient,
//   "customers",
//   customers,
//   "branches",
//   branches
// );

// const b = 4;
// let a = b;

// console.log(a);

// let test = a === b;
// console.log(test);
// let d = 5;
// let c = 3;

// let check = d + c;
// let ans = check === 59;

// console.log("check", check, "ans", ans);

// let sub = 4 - c;
// let res = sub > ans;

// console.log("sub", sub, "result", res);

// let multi = ans * sub + test + c + d * b;
// multi++;
// console.log("multiply", multi);

// let a = 5;
// let b = 9;
// let c = a;

// a += c;

// console.log(a);

// b *= 8;
// console.log(b + a);

// let test = a != b;

// let check = a == b ? "yes" : "no";
// console.log(check);

// let day = "monday";

// let day = "asdf";

// if (day == "sunday") {
//   console.log("hi today is sunday");
// } else if (day == "monday") {
//   console.log("hi today is monday ");
// } else {
//   console.log("i dont known what the day today ");
// }

// let tech = "monday";
// let day = "we";

// switch (day) {
//   case "monday":
//     day = "monday";
//     break;
//   case "tuesday":
//     day = "tuesday";
//     break;
//   case "wednesday":
//     day = "wednesday";
//   default:
//     day = "i dont known";
// }

// console.log(day);

// let test = (day) => {
//   let check = () => {
//     if (day !== "sunday") {
//       console.log(day);
//       return "today is not sunday";
//     } else {
//       return " today is sunday";
//     }
//   };
//   console.log(check());
// };

// test("sunday");

// let marks = 40;

// if (marks > 90) {
//   console.log("AA");
// } else if (marks > 80 && marks <= 90) {
//   console.log("AB");
// } else if (marks > 70 && marks <= 80) {
//   console.log("BB");
// } else if (marks > 60 && marks <= 70) {
//   console.log("BC");
// } else if (marks > 50 && marks <= 60) {
//   console.log("CC");
// } else if (marks > 40 && marks <= 50) {
//   console.log("CD");
// } else if (marks > 30 && marks <= 40) {
//   console.log("DD");
// } else if (marks <= 30) {
//   console.log("FF");
// } else {
//   console.log("Fail");
// }

// let a = prompt("type the number here");

// if (a % 2 == 0) {
//   console.log("odd");
// } else {
//   console.log("even");
// }

// let num = -1;
// if (num > 0) {
//   console.log("Positive");
// } else if (num === 0) {
//   console.log("Zero");
// } else if (num < 0) {
//   console.log("Negative");
// }

// loops

// for (let i = 1; i < 5; i++) {
//   console.log(i);
// }

/* -------------------- display the sum of natural number ------------------- */

// const num = 100;
// let sum = 0;

// for (let i = 0; i <= num; i++) {
//   sum = sum + i;
//   // console.log(i);
// }
// console.log(`sum of the ${num} natural is = ${sum}`);

/* ------------------- display the number in 1 number gap ------------------- */

// const num = 10;
// for (let i = 0; i <= num; i++) {
//   i += 1;
//   console.log(i);
// }

/* ------------------------------ odd even loop ----------------------------- */

// const num = 10;
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`number ${i} is even`);
//   } else {
//     console.log(`number ${i} is odd`);
//   }
// }

/* --------------------- multiple of 3 or 5 and both --------------------- */

// const num = 100;

// for (let i = 0; i <= num; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let num = 10;
// let star = "*";

// for (let i = 0; i < num; i++) {
//   if (i === 0) {
//     console.log(star);
//   } else if (i < num) {
//     console.log((star += "*"));
//   } else {
//     console.log("else");
//   }
// }

// var x, y, chr;

// // Outer loop for rows
// for (x = 1; x <= 6; x++) {
//   // Inner loop for characters in each row
//   for (y = 1; y < x; y++) {
//     // Accumulate asterisks in the 'chr' variable
//     chr = chr + "*";
//     console.log("first loop chr", chr);
//   }

//   // Print the accumulated characters for the current row
//   console.log(chr);

//   // Reset 'chr' for the next row
//   chr = "";
//   console.log(chr);
// }
// console.log("char", chr);

/* ------------------- sum multiple of  3 and 5 under 1000 ------------------- */

// let num = 1000;
// let sum = 0;

// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//     console.log(sum);
//   }
// }

// let num = 1;
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

/* -------------------------------------------------------------------------- */
/*                                 while loop                                 */
/* -------------------------------------------------------------------------- */

// let num = 10;
// let i = 1;

// while (i <= num) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// let num = 10;
// let sum = 0;
// while (i <= 10) {
//   sum += i;
//   i++;
//   console.log(sum);
// }

/* ----- Fibonacci Sequence up to N Terms Using While Loop in JavaScript ---- */

// let a = 0;
// let b = 1;
// let i = 0;
// let num = 10;
// let sum = 0;
// console.log(a);
// console.log(b);
// while (i < num) {
//   sum = a + b;
//   console.log(sum);
//   a = b;
//   b = sum;
//   sum = 0;
//   i++;
// }

/* ------------------- reversing a number using while loop ------------------ */

// let num = 13;
// let reversed = 0;
// while (num !== 0) {
//   let digit = num % 10;
//   reversed = reversed * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(reversed);

/* ----------- find the number is prime or not by using while loop ---------- */

// let num = 10;
// let i = 2;
// let isPrime = true;
// while (i < num) {
//   if (num % i == 0) {
//     isPrime = false;
//     break;
//   }
//   i++;
// }

// if (isPrime == false) {
//   console.log(` This number ${num} is not prime `);
// } else {
//   console.log(`This number ${num} is prime`);
// }

// let i = 1;
// let num = 10;
// while (i < num) {
//   console.log(i);
//   i = i + 1;
//   i++
// }

// let i = 1;
// let num = 5;
// let star = "";
// while (i <= num) {
//   star += "*";
//   console.log(star);
//   i++;
// }

// let i = 2;
// let num = 10;
// do {
//   if (i % 2 == 0) {
//     console.log(`number ${i} is a enven number`);
//   } else {
//     console.log(`number ${i} is a odd number`);
//   }
//   i++
// } while (i <= num);

// let i = 0;
// let input = prompt("enter a number");
// let num = 100;
// do {
//   if (input < num) {
//     alert("plz enter number more than 100");
//   }
//   i++;
//   break;
// } while (i < num);

let password = 1234;
let attempt = 1;
let maxAttempt = 3;
let sucess = "wlecome back user";
let failed = "attempt failed try again";

do {
  let input = prompt("enter your password");
  if (password == input) {
    console.log(sucess);
    alert(sucess);
    break;
  } else {
    alert(`password invalid attempt left : ${maxAttempt - attempt}`);
    console.log(failed);
  }
  console.log(password == input);
  attempt++;
} while (attempt <= maxAttempt);
