var expect = function(val) {
    return{
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
    
};
var f = expect();
console.log(f.toBe());
console.log(f.notToBeoBe());
