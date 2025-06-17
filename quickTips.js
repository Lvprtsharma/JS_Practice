//1. find unique values in array
const array = [1,2,3,4,5,4,3,2,7,5]
const uniqueArray = [...new Set(array)]
console.log(uniqueArray)

// 2. int to string
const num = 32;
console.log(typeof num)
const numStr = num + '';
console.log(numStr)
console.log(typeof numStr)


// 3. float to int
const floatnum = 3.76;
const intnum = parseInt(floatnum)
console.log(intnum)

// 4. Check if a variable is a number or not?
const value = 56;
if (typeof value === 'number' && !isNaN(value)){
    console.log(`${value} is Number`)
}

// 5. swap the variables
let a =5;
let b=10;
[a,b] = [b,a]
console.log(a,b)

// 6. Check if the Object has a property or not?
const person = {
    name: 'john',
    age: 23
}

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('address'))

// 7. remove falsy values from array i.e. false, 0, "", null, undefined, NaN
const values = [1,3,false, "", 0, 32, NaN, undefined]
console.log(values.filter(Boolean))

// 8. String --> Uppercase or lowercase
const str = "lovesharma"
console.log(str.toUpperCase())
const str1 = "LOVESHARMA"
console.log(str.toLowerCase())

// 9. generate a random number
const max = 20
const min = 10
const randomNum = Math.floor(Math.random() * (max-min+1)) + min;
console.log(randomNum)

// 10. String to Number
const strNumber = '32';
const x1 = parseFloat(strNumber)
console.log(x1)

// 11. clone an array
const marks = [10,20,30,40]
const marksDuplicate = [...marks] // spread operator
console.log(marksDuplicate)

// 12. Get current data
const currentDate = new Date();
console.log(currentDate.toLocaleString())






