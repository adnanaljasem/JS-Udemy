// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (temps) {
//   //finding the max value form google stackoverflow

//   // assume that the max is the first elemnt:
//   let max = temps[0];
//   let min = temps[0];
//   //loop to find max (and min)
//   for (let i = 0; i < temps.length; i++) {
//     let currentTemp = temps[i]; //because we used it many times
//     if (typeof currentTemp !== "number") continue; //to ignore other types
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const emplitude = calcTempAmplitude(temperatures);
// console.log(emplitude);
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "cels",
//     value: prompt("Degrees celsius:"),
//   };
//   console.log(typeof measurement.value);
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };
// console.log(measureKelvin());
//#Challenge
// const data1 = [17, 21, 23];
// const printForecast = function (arr) {
//   let myString = "";
//   for (let i = 0; i < arr.length; i++) {
//     myString = myString + `${arr[i]}°C in ${i + 1} days...`;
//   }
//   console.log("..." + myString);
// };
// printForecast(data1);
