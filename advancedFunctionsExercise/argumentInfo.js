function solve(...data){
    let result = {};
    let output = '';
    for(let el of data)
        if(!result.hasOwnProperty(typeof(el))){
        result[typeof(el)] = 1;
    }else {
        result[typeof(el)] += 1;
    }
    sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1])
    console.log(sortedResult);
}

solve('cat',  42, function () { console.log('Hello world!'); })