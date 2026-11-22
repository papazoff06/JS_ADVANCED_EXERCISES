function sum(arr, start, end){
    let sum = 0;
    try{
        if(!Array.isArray(arr) == 'false'){
        return 'NaN'
    }
    }catch (ex){
        
    }
    if(start < 0){
        start = 0;
    }
    if(end > arr.length -1 ){
        end = arr.length - 1;
    }
    for (let el = start; el <= end; el++){
        sum += Number(arr[el]);
    }
    return sum;
}

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300))
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sum([10, 'twenty', 30, 40], 0, 2));
console.log(sum([], 1, 2));
console.log(sum('text', 0, 2));
