console.log("Hello world!")
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jobTitle = `UX Designer`
let myFutureCity = `Toronto`
let annualSalary = 100000
let monthlySalary = annualSalary / 12
let companyName =  `Jam3`

console.log(`You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} ($${monthlySalary} per month) for ${companyName}.`)

let liEx1 = document.querySelector(`#ex1`)
liEx1.textContent = `You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} ($${monthlySalary} per month) for ${companyName}.`

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.
let currentYear = 2020
let myBirthOfYear = 1987
let mothersBirthOfYear = 1959
let sistersBirthOfYear = 1987
let myAge = currentYear - 1987
let mothersAge = currentYear - 1959
let sistersAge = currentYear - 1989

console.log(`my age is ${myAge} years old, mother is ${mothersAge} years old, sister is ${sistersAge} years old.`)

let liEx2 = document.querySelector(`#ex2`)
liEx2.textContent = `my age is ${myAge} years old, mother is ${mothersAge} years old, sister is ${sistersAge} years old.`

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 32
let maximumAge = 75
let amountPerYear = maximumAge - currentAge
let amountPerDay = amountPerYear * 365 

console.log(`You will need ${amountPerDay} days to last you until the ripe old age of ${maximumAge} years old.` )

let liEx3 = document.querySelector(`#ex3`)
liEx3.textContent = `You will need ${amountPerDay} days to last you until the ripe old age of ${maximumAge} years old.`
//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 3
let circumference = 2 * radius * 3.141592
let area = radius ** 2 * 3.141592

console.log(`The circumference is ${circumference}cm.`)
console.log(`The area is ${area}cm2.`)

let liEx4 = document.querySelector(`#ex4`)
liEx4.textContent = `The circumference is ${circumference}cm, The area is ${area}cm2.`
//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let celsiusTemperature = 18
let fahrenheitTemperature = celsiusTemperature * 1.8 + 32
let fahrenheitTemperatureNow = 64.4
let celsiusTemperatureNow = (fahrenheitTemperature - 32) / 1.8

console.log(` ${celsiusTemperature} °C is ${fahrenheitTemperature} °F.`)
console.log(` ${fahrenheitTemperatureNow} °F is ${celsiusTemperatureNow}°C.`)

let liEx5 = document.querySelector(`#ex5`)
liEx5.textContent = ` ${celsiusTemperature} °C is ${fahrenheitTemperature} °F, ${fahrenheitTemperatureNow} °F is ${celsiusTemperatureNow}°C.`
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num) {
    return num**2
  }
  
  let liEx6 = document.querySelector(`#ex6`)
  liEx6.textContent = `The result of squaring the number 3 is ${squareNumber(3)}.`
  


// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(num) {
    return num/2
  }
  
  let liEx7 = document.querySelector(`#ex7`)
  liEx7.textContent = `Half of 5 is ${halfNumber(5)}.`

// let theHalfResult = halfNumber(5)
// // console.log(`Half of ${numToHalf} is ${halfNumber}.)`)



// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2){
    return num1/num2 
}
let liEx8 = document.querySelector(`#ex8`)
liEx8.textContent = `${percentOf(2,4) * 100}% of 4`


// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.


function areaOfCircle(rad) {
    console.log()
    return rad ** 2 * 3.14
  }
  
  let liEx9 = document.querySelector(`#ex9`)
  liEx9.textContent = `The area for a circle with radius 2 is ${areaOfCircle(2)}.`
  

areaOfCircle(2)

// EXERCISE 10
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function runAll(num) {
    let resultHalf = halfNumber(num)
    let resultSqur = squareNumber(resultHalf)
    let resultArea = areaOfCircle(resultSqur)
    let resultPrct = percentOf(resultArea, resultSqur)
    return resultPrct
  }
  
  let liEx10 = document.querySelector(`#ex10`)
  liEx10.textContent = `The final result is... ${runAll(4)*100}%`
  