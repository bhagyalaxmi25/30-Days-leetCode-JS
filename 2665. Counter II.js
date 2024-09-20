var createCounter = function(init) {
    let preCount = init
    return{
        increment: ()=>++preCount,
        decrement: ()=>--preCount,
        reset: ()=>preCount=init
    }

};
var counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

