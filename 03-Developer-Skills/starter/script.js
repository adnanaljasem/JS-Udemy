// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  //finding the max value form google stackoverflow

  // assume that the max is the first elemnt:
  let max = temps[0];
  let min = temps[0];
  //loop to find max (and min)
  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i]; //because we used it many times
    if (typeof currentTemp !== "number") continue; //to ignore other types
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const emplitude = calcTempAmplitude(temperatures);
console.log(emplitude);
