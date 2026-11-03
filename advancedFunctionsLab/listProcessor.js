function solve(arr){
    let result = [];
    let obj = {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter((el) => (el !== str)),
        print: ()=> console.log(result.join(','))
    }

    for(let row of arr){
        let [command, data] = row.split(' ');
        obj[command](data)
    }

 }
        
solve(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
)
