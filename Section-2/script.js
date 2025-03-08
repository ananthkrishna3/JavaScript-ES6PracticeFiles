// //function
// function logPrinter() {
//   console.log("Print as many times I want");
// }

// //calling,running,invoking
// logPrinter();
// logPrinter();
// logPrinter();
// logPrinter();
// logPrinter();

// // function fruitProcessor(oranges, apples){
// //     console.log(oranges, apples);
// //     const juice = `juice with ${apples} apples and juice with ${oranges} oranges.`;
// //     return juice;
// // }

// // let mocktail = fruitProcessor(3,8);
// // console.log(mocktail);

// //function Declaration
// function birthAge(yearOfBirth) {
//   let currentYear = 2024;
//   let age = currentYear - yearOfBirth;
//   return age;
// }
// let age = birthAge(1993);
// console.log(age);

// //function expression
// let calcAge2 = function (yearOfBirth) {
//   let currentYear = 2024;
//   return currentYear - yearOfBirth;
// };
// let age2 = calcAge2(1993);
// console.log("Function Expression Age: ", age2);

// //ArrowExpression
// let calcAge3 = (birthYear) => 2024 - birthYear;
// let age3 = calcAge3(1994);
// console.log("Arrow Function Age: ", age3);

// //Arrow function with multiliner
// let yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 67 - age;
//   return `${firstName} retires at in ${retirement} at ager of ${
//     age + retirement
//   }`;
// };
// console.log(yearsUntilRetirement(1993, "Ananth"));

// function fruitCutter(fruit) {
//   return fruit * 8;
// }

// function fruitProcessor(oranges, apples) {
//   const applePieces = fruitCutter(apples);
//   const orangepieces = fruitCutter(oranges);
//   const juice = `juice with ${applePieces} apples slices and juice with ${orangepieces} oranges slices.`;
//   return juice;
// }

// let mocktail = fruitProcessor(3, 8);
// console.log(mocktail);

// ///Challenge#5

// /* Write your code below. Good luck! 🙂 */

// /* Write your code below. Good luck! 🙂 */

// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins, scoreKoalas;

// scoreDolphins = calcAverage(44, 23, 71);
// scoreKoalas = calcAverage(65, 54, 49);
// function checkWinner(scoreDolphins, scoreKoalas) {
//   if (scoreDolphins >= 2 * scoreKoalas) {
//     console.log(
//       `Dolphins win the trophy (${scoreDolphins} vs. ${scoreKoalas})`
//     );
//   } else if (scoreKoalas >= 2 * scoreDolphins) {
//     console.log(`Koalas win the trophy (${scoreKoalas} vs. ${scoreDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// const names = ["ananth", "krishna", "madhabushi"];
// console.log(names);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(years);
// console.log(years[0]);
// console.log(names[names.length - 1]);
// // names = ["Prasad", "chinnapannagari"]
// // console.log(names);

// //Adding elements into array
// names.push("testing");
// console.log(names);

// names.unshift("Idiot");
// console.log(names);

// //Deleting elements from array
// names.pop("testing");
// console.log(names);

// names.shift("Idiot");
// console.log(names);

// //Indexing of variables
// console.log(names.indexOf("krishna"));
// console.log(names.includes("ananth"));
// console.log(names.includes("mndmnd"));

// /* Write your code below. Good luck! 🙂 */

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// let bills = [125, 555, 44];
// let tip;
// let totalValue;
// let totals = new Array();
// bills.forEach((item) => {
//   tip = calcTip(item);
//   totalValue = tip + item;
//   totals.push(totalValue);
// });
// console.log(totals);

// //Objects
// const details = {
//   firstName: "Ananth",
//   secondName: "krishna",
//   age: 2024 - 1993,
//   occupation: "SDE1",
//   name: ["xyz", "ted", "asdef"],
// };
// console.log(
//   details.firstName,
//   details.secondName,
//   details.age,
//   details.name[0],
//   details.name[1],
//   details.name[2]
// );
// console.log("Last Name: ", details["secondName"]);

// // const input = prompt("which one would you like to select? firstName or secondName or age or occupation or name")
// // console.log(details[input]);

// const details1 = {
//   firstName: "Ananth",
//   secondName: "krishna",
//   birthYear: 1993,
//   occupation: "SDE1",
//   name: ["xyz", "ted", "asdef"],
//   isHavingDrivingLisence: true,

//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },
// };
// console.log("Age is: ", details1.calcAge());
// console.log("Object Age is: ", details1.age);

// /* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller's",
//   mass: 95,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith's ",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// function BMICheck() {
//   if (mark.calcBMI() > john.calcBMI()) {
//     console.log(
//       `${mark.fullName} BMI (${mark.bmi}) is heigher than ${john.fullName} (${john.bmi})`
//     );
//   } else {
//     console.log(
//       `${john.fullName} BMI (${john.bmi}) is heigher than ${mark.fullName} (${mark.bmi})`
//     );
//   }
// }

// BMICheck();

// // for(let i = 1; i<=10; i++){
// //     console.log(`iterations of first loop ${i}`)
// // }
// // for(let i = 0; i<years.length; i++){
// //     console.log("Johns data: ",years[i]);
// // }

// // let types = [];
// // for(let i = 0; i<years.length; i++){
// //     types[i] = typeof years[i];
// // }
// // console.log(types);

// //continue and break
// //continue is used to escape current iteration of loop and pass on to next one.
// //break is used to completely terminate whole loop

// // const details2 = [
// //     'Ananth',
// //     'krishna',
// //      1993,
// //      'SDE1',
// //     ['xyz', 'ted', 'asdef'],
// //     true,

// //      function(){
// //                 this.age = new Date().getFullYear() - this.birthYear;
// //                 return this.age;
// //     }

// // ]
// // console.log('------------ONLY STRINGS------------------')
// // for(let i = 0; i < details2.length ; i++){
// //     if(typeof details2[i] !== 'string'){
// //         continue;
// //     }
// //     console.log(details2[i], typeof details2[i])
// // }

// // console.log('------------ONLY numbers-using break------------------')
// // for(let i = 0; i < details2.length ; i++){
// //     if(typeof details2[i] === 'number'){
// //         break;
// //     }
// //     console.log("break : ",details2[i], typeof details2[i])
// // }

// //Backward looping
// const details2 = [
//   "Ananth",
//   "krishna",
//   1993,
//   "SDE1",
//   ["xyz", "ted", "asdef"],
//   true,

//   function () {
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },
// ];

// for (let i = details2.length - 1; i > 0; i--) {
//   console.log("reverse order", details2[i]);
// }

// ///last Challenge

// // const calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // };

// /* Write your code below. Good luck! 🙂 */

// //   let bills = [22,295, 176, 440, 37, 105, 10, 1100, 86, 52];
// //   let tips=[], totals = [];
// //   let temp;

// //   for(let i = 0; i<=bills.length-1;i++){
// //       temp = calcTip(bills[i]);
// //       tips.push(temp);
// //       totals.push(temp+bills[i]);

// //   }
// //   console.log(tips);
// //   console.log(totals)

// //   const calcAverage = function(arr){
// //       let sum = 0;
// //       for(let i = 0; i<=arr.length-1;i++){

// //           sum = sum + arr[i];

// //       }
// //       return sum;
// //   }
// //   let totalSum = calcAverage(totals)
// //   console.log("Average : ",totalSum/totals.length);

// ////Kev-Value pair even-odd

const keyValues = [
  { key: 1, value: "abc" },
  { key: 2, value: "def" },
  { key: 3, value: "ghi" },
  { key: 4, value: "ijk" },
  { key: 5, value: "lmn" },
  { key: 6, value: "opq" },
  { key: 7, value: "rst" },
  { key: 8, value: "uvw" },
  { key: 9, value: "xyz" },
];
//console.log(keyValues.length);
const evenKeyValues = [],
  oddKeyValues = [];

console.log(
  "kkkkk",
  keyValues.findIndex((item, index) => item.key === 5)
);
//using filter
keyValues.filter((item, index) => {
  index !== 0 && index % 2 === 0 && evenKeyValues.push(item);
});

// Using for-loop
// for (let i = 0; i < keyValues.length; i++) {
//   keyValues[i].key % 2 === 0 && evenKeyValues.push(keyValues[i]);
// }

console.log("Even objects : ", evenKeyValues);
console.log("Odd objects : ", oddKeyValues);
