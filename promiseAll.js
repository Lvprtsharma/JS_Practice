// case 1:
// f1 -- resolve
// f2 -- resolve
// f3 -- resolve


const function1 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Data from function 1");
        }, 2000)
    })
}

const function2 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Data from function 2");
        }, 2000)
    })
}

const function3 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Data from function 3");
        }, 2000)
    })
}

console.log(" ------------ PROMISE ALL WITH SUCCESS --------------")

Promise.all([
    function1(),
    function2(),
    function3()
])
.then(dataArray =>{
    console.log("All data from diff functions: ", dataArray);
})
.catch(error =>{
    console.log("Error in Promise", error)
});



// case 2:
// f1 -- resolve
// f2 -- reject

const function4 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Data from function 2");
        }, 2000)
    })
}

const function5 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject("Error: Data is not available");
        }, 2000)
    })
}

console.log(" ------------ PROMISE ALL WITH FAILURE --------------")

Promise.all([
    function4(),
    function5()
])
.then(dataArray =>{
    console.log("All data from diff functions: ", dataArray);
})
.catch(error =>{
    console.log("Error in Promise", error)
});

console.log(" ------------ PROMISE ALL SETTLED --------------")

Promise.allSettled([
    function4(),
    function5()
])
.then(results=>{
    results.forEach(result =>{
        if(result.status == 'fulfilled'){
            console.log("value:  ", result.value)
        }
        else{
            console.log("reason for rejection:  ", result.reason)
        }
    })
})

