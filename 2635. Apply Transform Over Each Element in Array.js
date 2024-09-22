var map = function(arr, fn) {
    for(let i=0;i<arr.length;i++){
        arr[i]=fn(arr[i],i);
    }
    return arr
};

var a = [1,2,3,4];
var fn = function(n) {
    return n + 1;
};

var result = map(a , fn);
console.log(result);