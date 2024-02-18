

    // Add addEventlistener to call play function

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
    // for loop to count to 5



    // computer choice and validation of player's choice
    // fn() for computer random choice
    // scorer fn() for the winner

    const computerChoice = ['rock', 'paper', 'scissors'];
    const playerChoice = String(prompt(`Enter: 'Rock', 'Paper', 'Scissors'`).toLocaleLowerCase());

    console.log(playerChoice);
    let dindex = Number(Math.floor(Math.random()*computerChoice.length));
    let  comC = computerChoice[dindex];

    console.log(dindex,comC);

    if (comC === playerChoice) {
        console.log('hurray');
    }
    tally--


