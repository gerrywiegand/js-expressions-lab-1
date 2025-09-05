//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


const day1Temp = 32 //F
const day2Temp = 25 //C
const day3Temp = 70 //F
const day4Temp = 18 //C
const day5Temp = 80 //F
const day6Temp = 15 //C
const day7Temp = 72 //F
const day8Temp = 28 //C
const day9Temp = 68 //F
const day10Temp = 20 //C
const day11Temp = 75 //F
const day12Temp = 23 //C
const day13Temp = 82 //F
const day14Temp = 30 //C
const day15Temp = 65 //F
const day16Temp = 22 //C
const day17Temp = 77 //F
const day18Temp = 26//C
const day19Temp = 78 //F
const day20Temp = 24//C
const day21Temp = 73 //F
const day22Temp = 21 //C
const day23Temp = 79 //F
const day24Temp = 27 //C
const day25Temp = 71 //F
const day26Temp = 19 //C
const day27Temp = 74 //F
const day28Temp = 17//c
const day29Temp = 76 //F
const day30Temp = 29 //C

sumOfF = day1Temp + day3Temp + day5Temp + day7Temp + day9Temp + day11Temp + day13Temp + day15Temp + day17Temp + day19Temp + day21Temp + day23Temp + day25Temp + day27Temp + day29Temp
sumOfC = day2Temp + day4Temp + day6Temp + day8Temp + day10Temp + day12Temp +day14Temp +day16Temp + day18Temp + day20Temp +day22Temp +day24Temp + day26Temp +day28Temp +day30Temp
tot_temperature_in_fahrenheit = ((sumOfC * 9 / 5) + (32 * 15) + sumOfF)
tot_temperature_in_celsius = ((sumOfF - (32 * 15)* 5 / 9) + sumOfC)
avg_temperature_in_fahrenheit = (tot_temperature_in_fahrenheit / 30)
avg_temperature_in_celsius = (tot_temperature_in_celsius / 30)
