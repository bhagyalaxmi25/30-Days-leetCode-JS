
var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};

// Example usage
function myFunction(message) {
    console.log(message);
}

const cancel = cancellable(myFunction, ["Hello, World!"], 2000);

// Cancel the interval after 10 seconds
setTimeout(() => {
    cancel();
    console.log("Interval cancelled.");
}, 10000);
