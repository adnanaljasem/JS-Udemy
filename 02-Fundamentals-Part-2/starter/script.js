// "use strict";
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest)
// function logger() {
//   console.log("My name is Adnan");
// }
//calling running invoking the function
//logger();
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);
// const applesOrangesJuice = fruitProcessor(3, 8);
// console.log(applesOrangesJuice);

//function decleration and expression

//functio decleration: (you can call it befor)
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

//function expression: (you can NOT call it befor)
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1999);
// console.log(age1, age2);

// function nameOfIt(para1, para2) {
//   return para1 + para2;
// }
// const num1 = nameOfIt(1, 4);
// console.log(num1);
// const num2 = function (par1, par2) {
//   return par1 + par2;
// };
// const secondNum = num2(2, 6);
// console.log(secondNum);

//arrow funciton
//Arrow
// const calcAge3 = (birthYear) => 2033 - birthYear; //no need for return here because it is one line
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRe = (birthYear) => {
//   const age = 2033 - birthYear;
//   const retirement = 65 - age;
//   return retirement; //we need return statement here (more than one line of cose)
// };
// const yourRetermentAge = yearsUntilRe(1991);
// console.log(yourRetermentAge);
//function calling other function
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// function calcAverage(score1, score2, score3) {
//   const avrage = (score1 + score2 + score3) / 3;
//   return avrage;
// }

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let average1 = calcAverage(44, 23, 71);
// console.log(average1);
// let average2 = calcAverage(65, 54, 49);
// console.log(average2);
// //using expression
// const checkWinner = function () {
//   if (average1 >= average2 * 2) {
//     console.log(`the winner is the Dols with ${average1} points`);
//   } else if (average2 >= average1 * 2) {
//     console.log(`the winner is Koalas with ${average2} points`);
//   } else {
//     console.log("there is no winner");
//   }
// };
// checkWinner();
// //test2
// average1 = calcAverage(85, 54, 41);
// average2 = calcAverage(23, 34, 27);
// checkWinner();
//arraysssssss:

// const friends = ["Adnan", "Ahmad", "Peter"];
// console.log(friends);

// //creating new array usein the Array function with new keyword:
// const years = new Array(1991, "1334", 2020, 4453);
// console.log(years);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// //add alement /change
// friends[2] = "Jay";
// console.log(friends);

// const adnan = ["Jonas", "Aljasem", 2037 - 1991, friends];
// console.log(adnan);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1899, 2002, 2021, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
// arrays methods:

// const friends = ["Adnan", "Ahmad", "Peter"];
// //add elemnt to end of array ()returned the (new)length of the array
// friends.push("Addon");
// console.log(friends);
// //add element to the begainin of an array
// friends.unshift("Hello");
// console.log(friends);
// //delete elelmnt form array:
// friends.pop(); //last and no need for argument for deleteing last element
// //pop returns the named of poped element
// console.log(friends);
// //remove first element
// friends.shift(); //remove first //we dont need argument for removing
// console.log(friends);

// //to see which position is the element :
// console.log(friends.indexOf("Adnan"));
// //true or false if it is inculded
// console.log(friends.includes("Adnan"));
// if (friends.includes("Adnan")) {
//   console.log("You have a friend called Adnan");
// }

// const calcTip = function (bill) {
//   if (bill > 50 && bill < 300) {
//     tip = bill * 0.15;
//     return tip;
//   } else {
//     tip = bill * 0.2;
//     return tip;
//   }
// };
// console.log(calcTip(401));

// const bills = new Array(125, 555, 44);
// console.log(bills);

// // const tips = new Array(calcTip(125), calcTip(555), calcTip(44));
// // console.log(tips);
// const tipps = [];
// tipps.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// console.log(tipps);
// const total = [];

// total.push(bills[0] + tipps[0], bills[1] + tipps[1], bills[2] + tipps[2]);
// console.log(total);
//objectsssssssssss:
//the main difference: we accesss array with the index number . obj no! with key
// how to get data from an object:
// const adnan = {
//   firstName: "Adnan",
//   lastName: "Aljasem",
//   age: 30,
//   friends: ["Ahmad", "Tarek", "Mohammad"],
// };
// console.log(adnan);
// const interestedIn = prompt("what do you want to know about Adnan?");
// console.log(interestedIn);
// if (adnan[interestedIn]) {
//   console.log(adnan[interestedIn]);
// } else {
//   console.log("wrong request");
// }
// adnan.location = "ch";
// adnan["hobby"] = "calligraphy";
// console.log(adnan);

// console.log(
//   `${adnan.firstName} has ${adnan.friends.length} friends, and his best friend is called ${adnan.friends[0]}`
// );
//objects methods
// const adnan = {
//   firstName: "Adnan",
//   lastName: "Aljasem",
//   birthYear: 1991,
//   friends: ["Ahmad", "Tarek", "Mohammad"],
// hasDrinvresLicense: true,
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };
// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYear;
// // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old and he has ${
//       this.hasDrinvresLicense ? "a" : "no"
//     } drivers license`;
//   },
// };
// console.log(adnan.calcAge());
// console.log(adnan.age);
// console.log(adnan.getSummary());
//challenge

// if (adnan.hasDrinvresLicense === true) {
//   let carLicense = "he has a drivers license";
//   return carLicense;
// } else {
//   let carLicense = "he doesn't have a drivers license";
//   return carLicense;
// }

// console.log(
//   `${adnan.firstName} is ${adnan.calcAge} years old, and ${carLicense}`
// );
