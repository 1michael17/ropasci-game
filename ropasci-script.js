
function toFirstUppercase(str){
    //for converting first letter to uppercase
    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1,str.length+1);
    return String(firstLetter+remainingLetters);
}

function chooser (arg){
    let randomArgIndex = Math.floor(Math.random()*3);
    return arg[randomArgIndex];
}

function play(){
    // for loop to count to 5

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
                console.log('DRAW',
                `${toFirstUppercase(`${playerChoice}`)} same as ${toFirstUppercase(`${computerValue}`)}`);

                i++;
            }else {
                // Score
                if( computerValue === 'rock' && playerChoice === 'paper'|| computerValue === 'paper' && playerChoice === 'scissor' || computerValue === 'scissor' && playerChoice === 'rock'){
                    pScore++;
                    console.log(`You Win! ${toFirstUppercase(`${playerChoice}`)} beats ${toFirstUppercase(`${computerValue}`)}`);
                }
                else{
                    cScore++;
                    console.log(`You Loose! ${toFirstUppercase(`${computerValue}`)} beats ${toFirstUppercase(`${playerChoice}`)} Chances remaining = ${i}`);
                }
            }

            console.log(`
            Chances remaining = ${i}
            Score:: Player = ${pScore}, Computer Score = ${cScore};
            `);

        }else{
            i++;
            console.log('Not a Valid Input');
        }
        // Message for Win or Loose
    }
    if (pScore > cScore) console.log(`Hurray, You Won!!!`);
        else console.log(`Ouch, the computer won`);
}

play();