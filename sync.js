// sync vs async

// sync
// 1 -- done --> takes 20 secs
// 2 -- done --> takes 10 secs
// 3 -- done --> takes 5 secs
// 4 -- done --> takes 15 secs

// Total time taken in 4 tasks in sync mode --> 50 secs

// Example of sync:
// console.log("Start")
// for(let i=0; i<3000; i++){
//     console.log(i);
// }
// console.log("End")

const { isUtf8 } = require('buffer');
const fs = require('fs')

const data = fs.readFileSync("file.txt", 'utf-8');
console.log(data);
console.log("Reading is done");



// async
// 1 -- done --> takes 20 secs --> callback function --> promises
// 2 -- done --> takes 10 secs
// 3 -- done --> takes 5 secs
// 4 -- done --> takes 15 secs

// Total time taken in 4 tasks in sync mode --> 20 secs
console.log("-------------------------------------------------")
// Example of sync:
console.log("Start")
setTimeout(() => {
    console.log("timeout is done");
}, 2000);

console.log("End")
fs.readFile("file.txt", "utf-8", (error, syncdata)=>{
    console.log(syncdata)
})
console.log("Reading is done");

