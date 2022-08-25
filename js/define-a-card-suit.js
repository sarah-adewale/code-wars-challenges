// You get any card as an argument. Your task is to return the suit of this card 
// (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  if(card.includes('♣')) return 'clubs'
  if(card.includes('♦')) return 'diamonds'
  if(card.includes('♥')) return 'hearts'
  if(card.includes('♠')) return 'spades'
}

console.log(defineSuit('3♣')) //'clubs'
console.log(defineSuit('3♦')) //'diamonds'
console.log(defineSuit('3♥')) //'hearts'
console.log(defineSuit('3♠')) //'spades'