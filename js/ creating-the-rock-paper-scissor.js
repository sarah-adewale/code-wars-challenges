// creating the rock, paper, scissor, lizard, spock game
/*
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
(and as it always has) Rock crushes Scissors
*/
function rockPaperScissorsLizardSpock(){
  let randomFunc = Math.random() //always remember that Math.random is a function ()
  if(randomFunc < .20){
    console.log('rock')
  }else if(randomFunc < .40){
    console.log('paper')
  }else if(randomFunc < .60){
    console.log('scissors')
  }else if(randomFunc < .80){
    console.log('lizard')
  }else{
    console.log('spock')
  }
}

rockPaperScissorsLizardSpock()

// using 

function checkWin(playersChoice){
  botChoice = rockPaperScissorsLizardSpock()
  if(botChoice === 'scissors' && playersChoice === 'paper' || botChoice === 'paper' && playersChoice === 'rock' || botChoice === 'rock' && playersChoice === 'lizard' || botChoice === 'lizard' && playersChoice === 'spock' || botChoice === 'spock' && playersChoice === 'scissors' || botChoice === 'scissors' && playersChoice === 'lizard' || botChoice === 'lizard' && playersChoice === 'paper' || botChoice === 'paper' && playersChoice === 'spock' || botChoice === 'spock' && playersChoice === 'rock' || botChoice === 'rock' && playersChoice === 'scissors'){
    	console.log('You Win!')
  }else if(botChoice === playersChoice){
    console.log('it\'s a tie')
  }else{
    console.log('You Lost!')
  }
}

checkWin()