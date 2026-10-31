function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', convert)

    inputData = {
        'm': (value) => value,
        'km': (value) => value * 1000,
        'cm': (value) => value / 100,
        'mm': (value) => value / 1000,
        'mi': (value) => value * 1609.34,
        'yrd': (value) => value * 0.9144,
        'ft': (value) => value *  0.3048,
        'in': (value) => value * 0.0254
    }

    outputData = {
        'm': (value) => value,
        'km': (value) => value / 1000,
        'cm': (value) => value * 100,
        'mm': (value) => value * 1000,
        'mi': (value) => value / 1609.34,
        'yrd': (value) => value / 0.9144,
        'ft': (value) => value / 0.3048,
        'in': (value) => value / 0.0254
    }
    
    
    function convert(ev){
            let inputDistance = Number(document.getElementById('inputDistance').value);
            let inputUnits = document.getElementById('inputUnits')
            let convertedInput = inputData[inputUnits.value](inputDistance);

            let outputUnits = document.getElementById('outputUnits')
            let outputRef = document.getElementById('outputDistance');
            outputRef.value = outputData[outputUnits.value](convertedInput);   
    } 
}