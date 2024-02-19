const button = document.querySelector('.play');

// Add addEventlistener to call play function
button.addEventListener('click', play)

function play(){
    // for loop to count to 5
    const chooser = (arg) =>{
        let randomArgIndex = Math.floor(Math.random()*3);
        return arg[randomArgIndex];
    }
    //pScore = Player Score, cScore = Computer Score
    let pScore = 0; let cScore = 0;

    for (let i = 4; i >= 0; i--) {
        // computer and player choices
        const computerChoice = ['rock', 'paper', 'scissors'];
        const playerChoice = String(prompt(`Enter: 'Rock', 'Paper', 'Scissors'`).toLocaleLowerCase());

        //  validation of player choice
        if (playerChoice === 'rock'|| playerChoice ==='paper' || playerChoice ==='scissor'){
            //function for Computer Random choice
            const computerValue = chooser(computerChoice);
        
            //Validator for draw
            if( computerValue === playerChoice ) {
                console.log('DRAW');
                i++;
            }else {
                console.log('Not DRAW');

                // Score
                if( computerValue === 'rock' && playerChoice === 'paper'|| computerValue === 'paper' && playerChoice === 'scissor' || computerValue === 'scissor' && playerChoice === 'rock'){
                    pScore++;
                }
                else{
                    cScore++;
                }
            }

            console.log(`
            Player's Choice === ${playerChoice} 
            Computer's Choice === ${computerValue}
            Chances remaining = ${i}
            Score:: Player = ${pScore}, Computer Score = ${cScore};
            `);

            // Message for Win or Loose
            if (pScore === 5) console.log(`Hurray, You Won!!!`);
                else console.log(`Ouch, the computer won`);
        }
    }
}

