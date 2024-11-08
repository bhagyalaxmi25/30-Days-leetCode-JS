// Define the cancellable function
var cancellable = function(fn, args, t) {
    var timeOut = setTimeout(() => {
        fn(...args);
    }, t);
    return () => clearTimeout(timeOut);
};

// Define a function to be used with cancellable
function myFunction(message) {
    console.log(message);
}

// Use the cancellable function
var cancel = cancellable(myFunction, ["Hello, world!"], 5000);

// Optionally cancel the function before it executes
setTimeout(() => {
    cancel(); // Cancels the scheduled execution
    console.log("Function execution cancelled.");
}, 2000);

// This log helps you understand the flow
console.log("Scheduled the function. It will run in 5 seconds unless cancelled.");
