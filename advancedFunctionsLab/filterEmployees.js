function filterEmpoloyees(data, criteria) {
    let input = JSON.parse(data);
    let counter = 0;
    let result = [];
    if(criteria === 'all'){
        
        for(let row of input){
            result.push(`${counter}. ${row.first_name} ${row.last_name} - ${row.email}`)
            counter ++;
        }
        
    }else{
        let [key, value] = criteria.split('-');
        let filtered = input.filter((obj) => obj[key] === value);
        for(let row of filtered){
            result.push(`${counter}. ${row.first_name} ${row.last_name} - ${row.email}`)
            counter ++;
        }
    }
    console.log(result.join("\n"))
}
    




filterEmpoloyees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'


)