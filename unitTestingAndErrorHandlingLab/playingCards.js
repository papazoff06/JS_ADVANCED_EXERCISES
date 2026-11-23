function card(f, s){
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
console.log(card('A', 'S').toString());  // A♠
console.log(card('10', 'H').toString()); // 10♥
console.log(card('1', 'C').toString());  // Throws Error
card('A', 'S');
card('1', 'C');