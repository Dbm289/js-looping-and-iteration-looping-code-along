// Code your solutions in this file
function writeCards(names, type) {
    const allCards = []
    
    for (let i = 0; i < names.length; i++) {
        allCards.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return allCards;
}

function countDown(n) {

       while (n >= 0) {
        console.log(n); 
        
        n--;
       }
      
      return n;

    }