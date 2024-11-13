
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    };
};

// Example usage
function myFunction() {
    console.log('Function executed!');
}

const debouncedFunction = debounce(myFunction, 2000);

// This will only call myFunction once, 2 seconds after the last click
document.getElementById('myButton').addEventListener('click', debouncedFunction);
