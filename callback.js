// Callback function: is a function which executes after a particular execution
// it is being passed as argument to another function

// basic callback with sync:
function greet(name, callback){
    console.log("Hello "+name);
    callback();
}

function welcome(){
    console.log("Welcome");
}

greet("Love", welcome)


// callback with async
function printInfo(name, callback){
    // async function/task/step
    setTimeout(function(){
        console.log("printing for "+name);
        callback("Plz call me back..... ");
    }, 10000);

}

function displayMessage(msg){
    console.log(msg)
}

printInfo("Love", displayMessage)


