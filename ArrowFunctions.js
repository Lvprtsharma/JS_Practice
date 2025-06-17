
// NO Param Arrow Function
const msg = () => 'hello JS'
console.log(msg())

// Single param Arrow Function
const sqnum = num => num * num
console.log(sqnum(5))

// Two params Arrow Functions
const add = (a,b) => a+b;
console.log(add(3,4))


const person = {
    firstName: "Love",
    lastName: "Sharma"
}
const fullName = person => `${person.firstName} ${person.lastName}`
console.log(fullName(person))

const sum = (...numbers) => numbers.reduce((acc, num) => acc+num, 0);
console.log(sum(1,2,3,4))

// max num using Math

const maxVal = (a,b,c) => {
    return Math.max(a,b,c)
}

console.log(maxVal(3,6,4))