// let js = 'Amazing';
// if(js === "Amazing") alert("javascript is fun!")


console.log(4+8+8+99+44-100);


let country = "India"
let continent = "Asia"
let population = "141.72B"
console.log("Country:",country, "Continent:",continent,"Population:",population);

// let year;
// console.log(year);
// console.log(typeof year)

// const ageAnanth = 2045 - 1993
// console.log(ageAnanth)

let x,y;
x =23, y = 86;
console.log(x)
console.log(y)

// const vi =200;
// vi=900;
// console.log("vi:",vi)
//Challenge-1

/* Write your code below. Good luck! 🙂 */

// let massMark = null;
// let heightMark = null;
// let massJohn = null;
// let heightJhon = null;
// let BMIMark,BMIJhon;
// let markHigherBMI;
// massMark = 78, heightMark = 1.69, massJohn = 92, heightJhon = 1.95;
// BMIMark = massMark / (heightMark * heightMark)
// console.log("BMI Mark:",BMIMark);
// BMIJhon = massJohn / (heightJhon * heightJhon)
// console.log("BMI Mark:",BMIJhon);
// BMIMark>BMIJhon?console.log("Mark has a higher BMI than John"):console.log("Jhon has a higher BMI than Mark");

const firstName = "Ananth";
const job = "SWEG2";
const birthYear = 1993;
const year = 2024
const ananth = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old' + 'job';
console.log(ananth);

const age = 19;
const isOldEnough = age>=19;
if(isOldEnough){
    console.log("Ananth Can start driving 😀")
}

// const myNumber = prompt("input your faveroute number!")
// console.log("favourate number: ", myNumber)
// console.log(typeof myNumber)

//Challenge#3
/* Write your code below. Good luck! 🙂 */

let minimumScore = 100;

let scoreDolphins , scoreKoalas;
scoreDolphins = (97 + 112 + 101)/3
scoreKoalas = (109 + 95 + 106)/3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas>scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy");
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy");
}else{
    console.log("No one win trophy");
}

//swith case implementation
const day = prompt("Enter your day!")
switch (day) {
    case 'Monday':
        console.log("Today is week starting day");
        console.log("Working day");
        break;
    case 'Tuesday':
        console.log("Today is week second day");
        break;
    case 'Wednesday':
        console.log("Today is week third day");
        break;
    case 'Thursday':
        console.log("Today is week fourth day");
        break;
    case 'Friday':
        console.log("Today is week fifth day");
        break;
    case 'Saturday':
        console.log("Today is week sixth day");
        break;
    case 'Sunday':
        console.log("Today is week seventh day");
        break;
    default:
        console.log("Not even a day!");
        break;
}

//Challenge#4
const bill = 275;

/* Write your code below. Good luck! 🙂 */

let tip = (bill>=50)&& (bill<=300)?bill*0.15:bill*0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);


