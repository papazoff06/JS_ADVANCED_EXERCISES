function solve(...data){
    let result = {};
    let output = '';
    for(let el of data)
        if(!result.hasOwnProperty(typeof(el))){
        result[typeof(el)] = 1;
        output += `${typeof(el)}: ${el}\n`
    }else {
        result[typeof(el)] += 1;
    }
    sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1])
    for(let row of sortedResult){
        output += `${row[0]} = ${row[1]}\n`
    }
    console.log(output);
}

solve('cat', 'cat', 42, function () { console.log('Hello world!'); })