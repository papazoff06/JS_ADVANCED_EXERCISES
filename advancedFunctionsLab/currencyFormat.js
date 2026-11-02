function currencyFormatter(separator, symbol, symbolFirst, value) { 
    let result = Math.trunc(value) + separator; 
    result += value.toFixed(2).substr(-2,2); 
    if (symbolFirst) return symbol + ' ' + result; 
    else return result + ' ' + symbol; 
}

// Your task: Create the higher-order function
function createFormatter(separator, symbol, symbolFirst, formatter) {
    // Return a new function that takes only the final 'value' parameter
    return function(value) {
        // Execute the original formatter using the fixed parameters and the new value
        return formatter(separator, symbol, symbolFirst, value);
    };
}

// --- Testing the code ---
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter); 
console.log(dollarFormatter(5345));   // Output: $ 5345,00 
console.log(dollarFormatter(3.1429)); // Output: $ 3,14 
console.log(dollarFormatter(2.709));  // Output: $ 2,71
