function calculator(){
    const obj = {
        sel1: null,
        sel2: null,
        res: null
    };
    return{
        init: (selector1, selector2, resultSelector)=> {
                obj['sel1'] = document.querySelector(selector1);
                obj['sel2'] = document.querySelector(selector2);
                obj['res'] = document.querySelector(resultSelector);
            
        },
        add: () => {obj['res'].value = Number(obj['sel1'].value) + Number(obj['sel2'].value);

            
        },
        subtract: () => {obj['res'].value = Number(obj['sel1'].value) - Number(obj['sel2'].value);

        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


