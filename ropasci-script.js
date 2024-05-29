const dBody = document.querySelector('.body');
const dResult = document.querySelector('.toPlay');
const toStart = document.querySelector('#start');
const toReset = document.querySelector('.playReset');
const option = document.querySelector('.option');
const choose = document.querySelectorAll('.choose');
const scoreScreen = document.querySelector('.score');
const urPoint = document.querySelector('.urPoint');
const UrChoice = document.querySelector('.UrChoice');
const cmPoint = document.querySelector('.cmPoint');
const cmChoice = document.querySelector('.cmChoice');
const drwPoint = document.querySelector('.drwPoint');
const h2Det = document.querySelector('.a');
const hw2Play = document.querySelector('#toPlay');
const detailUL = document.querySelector('#detail');
//-- End of Query Selector*/
scoreScreen.style.display = 'none';
dResult.style.display = 'none';
toReset.style.display = 'none';

// -- END OF Default Hidden 
let pScore = 0, cScore = 0, drwScore = 0; let playerClick;

choose.forEach(e=>{
    return e.setAttribute('disabled','disabled');
});

//-- END OF Default Values

function toStartFn(){
    resetBtn();
    
    toStart.style.display = 'none';
    
    toReset.style.display = 'block';
    scoreScreen.style.display = 'flex';
}

function resetBtn(){
    choose.forEach(e=>{
        return e.removeAttribute('disabled');
    });
    toReset.setAttribute('disabled','disabled')
    toStart.style.display = 'none';
    dResult.style.display = 'none';
    hw2Play.style.display = 'block';
    scoreScreen.style.display = 'flex';
    detailUL.textContent = '';
    h2Det.textContent = 'How to Play';
    pScore = 0, cScore = 0, drwScore = 0;
    urPoint.textContent = 0;
    cmPoint.textContent = 0;
    drwPoint.textContent = 0;

    dResult.classList.add('win');
    dResult.classList.remove('loose');
    dBody.classList.remove('bLoose');
    dBody.classList.remove('bWin');
}

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

// --END OF Global function

function play(){
    // for loop to count to 5

    //pScore = Player Score, cScore = Computer Score
    let pScore = 0; let cScore = 0;

    for (let i = 4; i >= 0; i--) {
        // computer and player choices
        const computerChoice = ['rock', 'paper', 'scissors'];
        const playerChoice = String(prompt(`Enter: 'Rock', 'Paper', 'Scissors'`).toLocaleLowerCase());

        //  validation of player choice
        if (playerChoice === 'rock'|| playerChoice ==='paper' || playerChoice ==='scissors'){
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
                    console.log(`You Win! ${toFirstUppercase(`${playerChoice}`)} beats ${toFirstUppercase(`${computerValue}`)}  Chances remaining = ${i}`);
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
    }
    // Message for Win or Loose
    if (pScore > cScore) console.log(`Hurray, You Won!!!`);
        else console.log(`Ouch, the computer won`);
}

// play();