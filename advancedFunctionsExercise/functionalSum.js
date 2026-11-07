function add(initialNumber) {
    let sum = initialNumber;

    function innerAdd(nextNumber) {
        sum += nextNumber;
        return innerAdd;
    }
    innerAdd.toString = function() {
        return sum;
    };


    return innerAdd;
}

console.log(add(1).toString());             
console.log(add(1)(6)(-3).toString());      
console.log(add(4)(3).toString());       
