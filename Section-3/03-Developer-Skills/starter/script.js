// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let x = 23;
x = "ananth";
console.log(x);

const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let max = tempratures[0],
  min = tempratures[0];
const tempAmplitude = (temps) => {
  temps.filter((item) => {
    if (max < temps[item]) {
      max = temps[item];
    }
    if (min > temps[item]) {
      min = temps[item];
    }
  });
  return max - min;
};

console.log("Temparature Amplitude: ", tempAmplitude(tempratures));
