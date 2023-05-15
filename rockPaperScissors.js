const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("wrong word breh...");
  }
};

var getComputerChoice = function() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie";
  }
  if(userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won.';
    }else{
      return 'Player won.';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won.';
    }else{
      return 'Player won.';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won.'
    }else{
      return 'Player won.'
    }
  }
};

const playGame = () => {
  var userChoice = getUserChoice('scissors');
  var computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();