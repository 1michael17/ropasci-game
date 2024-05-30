<<<<<<< Updated upstream
const dBody = document.querySelector('.body');
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
scoreScreen.style.display = 'none';
dResult.style.display = 'none';
toReset.style.display = 'none';

// -- END OF Default Hidden 
let pScore = 0, cScore = 0, drwScore = 0; let playerClick;

choose.forEach(e=>{
    return e.setAttribute('disabled','disabled');
});

//-- END OF Default Values


toStart.addEventListener('click', toStartFn);
toReset.addEventListener('click', ()=>{
    resetBtn();
    toReset.textContent = 'RESET';
    h2Det.textContent = 'How to Play';
});
option.addEventListener('click', (e) => {
    playerClick = e.target.value;
    play();
    toReset.removeAttribute('disabled');
    hw2Play.style.display = 'none';
    h2Det.textContent = 'Game Detail';
    // detailUL.textContent = '';
});

// --END OF addEventListeners

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
=======

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
>>>>>>> Stashed changes
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
}
function toFirstUppercase(str) {
    //for converting first letter to uppercase
    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1, str.length + 1);
    return String(firstLetter + remainingLetters);
}
function chooser(arg) {
    //For computer random choice
    let randomArgIndex = Math.floor(Math.random() * 3);
    return arg[randomArgIndex];
}
// --END OF Global function

<<<<<<< Updated upstream
// --END OF Global function

function play() {
    playerClick;
    // computer choice
    const computerChoice = ['rock', 'paper', 'scissors'];

    // player choice
    const playerChoice = playerClick;
    let report;

    //  validation of player choice
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        const computerValue = chooser(computerChoice);

=======
toStart.addEventListener('click', toStartFn);
toReset.addEventListener('click', ()=>{
    resetBtn();
    toReset.textContent = 'RESET';
    h2Det.textContent = 'How to Play';
});
option.addEventListener('click', (e) => {
    playerClick = e.target.value;
    play();
    toReset.removeAttribute('disabled');
    hw2Play.style.display = 'none';
    h2Det.textContent = 'Game Detail';
});

// --END OF addEventListeners

// -- THE PLAY FUNCTION
function play() {
    playerClick;
    // computer choice
    const computerChoice = ['rock', 'paper', 'scissors'];

    // player choice
    const playerChoice = playerClick;
    let report;

    //  validation of player choice
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        const computerValue = chooser(computerChoice);

>>>>>>> Stashed changes
        //Validator for draw
        if (computerValue === playerChoice) {
            report = ` 'DRAW' ${toFirstUppercase(`${playerChoice}`)} same as ${toFirstUppercase(`${computerValue}`)}`; drwScore++;
        } else {
        // Validation for score
            if (computerValue === 'rock' && playerChoice === 'paper' || computerValue === 'paper' && playerChoice === 'scissors' || computerValue === 'scissors' && playerChoice === 'rock') {
                pScore++;;
                report = `You Win! ${toFirstUppercase(`${playerChoice}`)} beats ${toFirstUppercase(`${computerValue}`)}  `;
            }
            else {
                cScore++;
                report = `You Loose! ${toFirstUppercase(`${computerValue}`)} beats ${toFirstUppercase(`${playerChoice}`)}`;
            }
        }
        // -- SCOREBOARD UPDATE SECTION
        urPoint.textContent = pScore
        UrChoice.textContent = toFirstUppercase(playerChoice);
        cmPoint.textContent = cScore;
        cmChoice.textContent = toFirstUppercase(computerValue);
        drwPoint.textContent = drwScore;
        const dLi = document.createElement('li');
        dLi.textContent = report;
        detailUL.style.display = 'block';
        detailUL.appendChild(dLi);
    } else {
        console.log('Not a Valid Input');
<<<<<<< Updated upstream
    }
//--Win or Loose effect / Message for Win or Loose
    const endOption = ()=>{
        toReset.textContent = "PLAY AGAIN";
        dResult.style.display = 'block';
        h2Det.textContent = 'Game Detail Log';
        choose.forEach(e=>{
            return e.setAttribute('disabled','disabled');
        });
    }
    if (pScore === 5) {
        dResult.textContent = "YOU WIN!!!";
        dResult.classList.add('win');
        dResult.classList.remove('loose');
        dBody.classList.remove('bLoose');
        dBody.classList.add('bWin');
        endOption();
    } else if (cScore === 5) {
        dResult.textContent = "YOU LOOSE!!!";
        dResult.classList.remove('win');
        dResult.classList.add('loose');
        dBody.classList.remove('bWin');
        dBody.classList.add('bLoose');
        endOption();
    }
}
=======
    }

    //--Win or Loose effect / Message for Win or Loose
    const endOption = ()=>{
        toReset.textContent = "PLAY AGAIN";
        dResult.style.display = 'block';
        h2Det.textContent = 'Game Detail Log';
        choose.forEach(e=>{
            return e.setAttribute('disabled','disabled');
        });
    }
    if (pScore === 5) {
        dResult.textContent = "YOU WIN!!!";
        dResult.classList.add('win');
        dResult.classList.remove('loose');
        endOption();
    } else if (cScore === 5) {
        dResult.textContent = "YOU LOOSE!!!";
        dResult.classList.remove('win');
        dResult.classList.add('loose');
        endOption();
    }
}
>>>>>>> Stashed changes
