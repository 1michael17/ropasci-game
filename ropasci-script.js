

    // Add addEventlistener to call play function

    // for loop to count to 5

for (let i = 4; i >= 0; i--) {
    // computer and player choices
    const computerChoice = ['rock', 'paper', 'scissors'];
    const playerChoice = String(prompt(`Enter: 'Rock', 'Paper', 'Scissors'`).toLocaleLowerCase());
    //  validation of player choice
//     if (playerChoice === 'rock'|| playerChoice ==='paper' || playerChoice ==='scissor'){
// }

    //function for Computer Random choice
    const chooser = (arg) =>{
        let randomArgIndex = Math.floor(Math.random()*computerChoice.length);
        return arg[randomArgIndex];
    }
    const computerValue = chooser(computerChoice);
    console.log(computerValue);

    //Validator for draw
    if( computerValue === playerChoice ) {
        console.log('DRAW');
        i++;
    }else {
        console.log('Not DRAW');
    }
    
    
    





}

