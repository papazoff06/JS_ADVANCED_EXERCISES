function printDeckOfCards(cards) {
    function createCard(f, s){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K','A'];

    
     let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
     };

     if(!validFaces.includes(f) || !suits[s]){
        throw new Error("error");
        
     }

   return {
        face: f,
        suit: s,
        toString () {
            return `${this.face}${suits[this.suit]}`
        }
    };
    
}

    let result = [];
  for(let row of cards){
    let face = row.slice(0, -1);
    let suit = row.slice(-1);
    try{
        result.push(createCard(face, suit).toString());
    }catch(error){
        console.log(`Invalid card: ${row}`)
        return;
    }
  }
  console.log(result.join(' '))
  
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C'])