var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++){
        val = fn(val, nums[i]);
    }
    return val;
};
var nums = [1,2,3,4];
var fn = function sum(accum, curr) { return accum + curr; };
var init = 0;

console.log(reduce(nums, fn, init));