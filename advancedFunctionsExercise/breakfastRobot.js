function solution(){
    let ingredents = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        } 
    }


    return function(input){
        if(input === 'report'){
            let result = [];
            for(let name in ingredents){
                result.push(`${name}=${ingredents[name]}`)
            }
            return result.join(' ');
        }else{
            let data = input.split(' ');
            let quantity = Number(data[2]);
            if(data[0] === 'restock'){
                let microelement = data[1];
                ingredents[microelement] += quantity;
                return 'Success'
            }else{
                let recipeName = data[1];
                let recipe = recipes[recipeName];
                let reArr = Object.entries(recipe);
                for(let row of reArr){
                    let recipeIngredent = row[0]
                    let recipeIngredentQuantitu = Number(row[1])
                    if(recipeIngredentQuantitu * quantity > ingredents[recipeIngredent]){
                        return `Error: not enough ${recipeIngredent} in stock`
                    }else{
                        ingredents[recipeIngredent] -= recipeIngredentQuantitu * quantity;
                        
                    }
                }
                return 'Success';
            }
        }
    }
}

let manager = solution (); 

console.log (manager ("restock flavour 50")); 
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));


