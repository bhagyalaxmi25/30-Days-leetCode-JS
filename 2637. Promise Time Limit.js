var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
};

// Example usage:
async function exampleFunction() {
  return "Task completed!";
}

const limitedFunction = timeLimit(exampleFunction, 3000);

// This will either resolve or reject based on the time limit.
limitedFunction().then(console.log).catch(console.error);
