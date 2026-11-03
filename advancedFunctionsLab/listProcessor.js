function solve(arr){
    let result = [];

    for(let row of arr){
        if(row === 'print')
        break;

        else{
            
             function changeRasult(){
            let [command, str] = row.splt(' ');
            if(command === 'add'){
                result.push(str)
            }
            }
        }
       
    }
    

 }
        
    


solve(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
)

// add: (str) => result.push(str),
            // remove: (str) => result.forEach((el) => el.remove(str)),
            // print: () => console.log(result.join(','))