function area() {
    return this.x * this.y;
};

vol()
function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    let objects = JSON.parse(input);
    let result = [];

    function calculate(obj){
        let areaObj = area.call(obj);
        let volObj = vol.call(obj);
        return {area: areaObj, volume: volObj};  
    }

    for(let obj of objects){
        result.push(calculate(obj));
    }
     return result;
}

solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
)

solve(area, vol, `[
{"x":"10","y":"-22","z":"10"},
{"x":"47","y":"7","z":"-5"},
{"x":"55","y":"8","z":"0"},
{"x":"100","y":"100","z":"100"},
{"x":"55","y":"80","z":"250"}
]`
)