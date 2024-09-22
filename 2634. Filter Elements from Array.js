var filter = function(arr, fn) {
    let f = [0,10,20,30];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            f.push(arr[i])
        }
    }
    return f;
};
var arr = [0, 10, 20, 30];
var fn = function(n) {
    return n > 10;
};

var result = filter(arr, fn);
console.log(result); 