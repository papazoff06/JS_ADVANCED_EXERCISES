function solve(arr) {

    let repo = {}

    for (let row of arr) {
        let line = row.split(' ')
        let command = line[0];
        if (line.length === 2) {
            if (command === 'create') {
                let name = line[1];
                repo[name] = {};

            } else if (command === 'print') {
                let name = line[1];
                let targetObj = repo[name];
                let result = [];

                for (let key in targetObj) {
                    let value = targetObj[key];
                    result.push(`${key}:${value}`);
                }
                console.log(result.join(','));
            }

        } else {
            if (command === 'create') {
                let name = line[1];
                let inheritObj = line[3];
                repo[name] = Object.create(repo[inheritObj]);

            } else if (command === 'set') {
                let name = line[1];
                let data = line[2];
                let dataEntry = line[3]
                repo[name][data] = dataEntry;
            }
        }

    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)