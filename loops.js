
//Loops

// for loop
for(let count=1; count<5; count++){
	console.log("Hello World");
}


// while loop
let i=0
while(i<5){
	console.log("Whle loop", i)
	i++;
}

let j=1


// do-while loop
do{
	console.log("Do While Loop", j)
	j++
}while(j < 2)

let str = "Lovepreet"


// for-of loop
for(let i of str){
	console.log(i)
}

// for-in loop

let student = {
	name: "Lovepreet",
	age: 20,
	cgpa: 9.9,
	isPass: true
}

for (let key in student){
	console.log("Key=",key, "Value=", student[key])
}

// PRACTICE QUESTIONS

// Print all even numbers from 0 to 100
for(let i=0; i<=100; i++){
	if(i%2!=0){
		console.log(i)
	}
}

// Let the user to guess a number which is predefined
let gameNum = 25;
let userNum = prompt("Guess the number")

while(userNum != gameNum){

	userNum = prompt("You have entered wrong number. Please try again")

}
console.log("Congratulations!! you have entered correct number!")

