let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const piedra_div = document.getElementById('piedra');
const papel_div = document.getElementById('papel');
const tijeras_div = document.getElementById('tijeras');


// set up the core function for the computer that will use math.random to loop through an array and return that value
function getComputerChoice() {
  const choices = ['piedra', 'papel', 'tijeras'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// similar to convertcase but just takes lowercase and replaces with titlecase
function convertCase(anythingIwant) {
  if (anythingIwant === 'papel') return 'Papel';
  if (anythingIwant === 'tijeras') return 'Tijeras';
  return 'Piedra';
}

// Winning Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function win(user, computer) {
  userScore++;
  // console.log('user score is ' + userScore + ' ' + user);
  userScore_span.innerHTML = userScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(user)}${userName} vence ${convertCase(computer)}${compName}. ¡Tú ganas!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

// Losing Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function loses(user, computer) {
  computerScore++;
  // console.log('computer score is ' + computerScore + ' ' + computer);
  computerScore_span.innerHTML = computerScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(computer)}${compName} vence ${convertCase(user)}${userName}. ¡Tú pierdes!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

// Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function draw(user, computer) {
	const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>¡Fue un empate! ambos eligieron ${convertCase(user)}</p>`;
  // "It was a draw! You both chose " + user + " " + computer; // old js
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

// The core game functions that set up and determine the games actual logic aka paper beats rock etc
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log('Game function: user choice is = ' + userChoice);
  // console.log('Game function: computer choice is = ' + computerChoice);

  switch (userChoice + computerChoice) {
    case 'papelpiedra':
    case 'piedratijeras':
    case 'tijeraspapel':
      win(userChoice, computerChoice);
      // console.log("user wins");
      break;
    case 'piedrapapel':
    case 'tijeraspiedra':
    case 'papeltijeras':
      loses(userChoice, computerChoice);
      // console.log("computer wins");
      break;
    case 'piedrapiedra':
    case 'tijerastijeras':
    case 'papelpapel':
      draw(userChoice, computerChoice);
      // console.log("draw");
      break;
  }
}
// ES5 style of writing this function
// function main() {
//   rock_div.addEventListener('click', function() {
//     game('rock');
//   });

//   paper_div.addEventListener('click', function() {
//     game('paper');
//   });

//   scissors_div.addEventListener('click', function() {
//     game('scissors');
//   });
// }

// ES6 style of writing this function
// This function creates and adds an eventlistener to the rock, paper scissors html element and the passes the value of that element to the game function
function main() {
  piedra_div.addEventListener('click', () => game('piedra'));
  papel_div.addEventListener('click', () => game('papel'));
  tijeras_div.addEventListener('click', () => game('tijeras'));
}

main();
