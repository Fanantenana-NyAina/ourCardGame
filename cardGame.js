const prompt = require("prompt-sync")();

/**
 * This function will show to the player a short summury of the this card game and show also his card
 * @function showPlayersCard
 */
function showPlayersCard() {
    const playersCard = ["water", "fire", "plant"];
    console.log("        Hey you, for this game you'll have 03 kinds of cards : " + playersCard      );
    console.log("NB: The CPU will have the same kinds of cards, but you don't know wich one he will use in one rounds");
}


/**
 * This function will ask the player to prompt the card that he will use against the appointment (the CPU)
 * @function promptYourCard
 * @return string //=> card's type
 */
function promptYourCard() {
    console.log(""); //Pour un saut de ligne
    console.log(" ====§§ Choose one between your 03 cards §§==== ");
    const promptOneCardGame = prompt("Pick one of your card game : (write the card's type !): ");
    return promptOneCardGame;
}


/**
 * This is responsible of the random pick of the CPU
 * @function CpuRandomCards
 * @return string //=> the random card of the bot
 */
function CpuRandomCards() {
    const cpuCards = ["water", "fire", "plant"];
    return cpuCards[Math.floor(Math.random() * (cpuCards.length))];
}


/**
 * This function will check if the player will win or lose in every rounds (03 rounds) and will count them
 * or maybe, verify if the match is tie.
 * @function gameCondition 
 * @returns numbers //=> totalVictory && totalDefeat 
 */
function gameCondition() {
    showPlayersCard();
    let PlayerVictory = 0;
    let CpuVictory = 0;
    for (let rounds = 0; rounds < 3; rounds++) {
        console.log("\n=========!!!ROUND "+(rounds+1)+ "!!!===========");
        let playerCard = promptYourCard();
        let cpuCard = CpuRandomCards();
        
        if (playerCard != cpuCard) {
            // PLAYER'S VICTORY
            if (playerCard === "water" && cpuCard === "fire") {
                console.log("The cpu's card : " + cpuCard);
                console.log("Nice choice!");
                PlayerVictory++;
            }
            else if (playerCard === "fire" && cpuCard === "plant") {
                console.log("The cpu's card : " + cpuCard);
                console.log("You're in fire, great win!");
                PlayerVictory++;
            }
            else if (playerCard === "plant" && cpuCard === "water") {
                console.log("The cpu's card : " + cpuCard);
                console.log("GREAT JOB!");
                PlayerVictory++;
            }

            // PLAYER'S LOSS
            else if (playerCard === "fire" && cpuCard === "water") {
                console.log("The cpu's card : " + cpuCard.toLocaleUpperCase());
                console.log("Ohh, you get beat!");
                CpuVictory++;
            }
            else if (playerCard === "plant" && cpuCard === "fire") {
                console.log("The cpu's card : " + cpuCard);
                console.log("you get burned !");
                CpuVictory++;
            }
            else if (playerCard === "water" && cpuCard === "plant") {
                console.log("The cpu's card : " + cpuCard.toLocaleUpperCase());
                console.log("ohhh, you lose this time!");
                CpuVictory++;
            }
        }

        // EQUALITY BETWEEN THE CPU AND THE PLAYER    
        else if (playerCard === cpuCard) {
            console.log("The cpu's card : " + cpuCard.toLocaleUpperCase());
            console.log("EQUALITY");
        }
    }

    return { CpuVictory, PlayerVictory };
}


/**
 * This function will check the number of victory and loss and return an appropriate result if 
 * the player will win or not
 * @function winningCondition
 * @return boolean //=> win or loss
 */
function winningCondition() {
    let result = gameCondition()
    if (result.CpuVictory > result.PlayerVictory) {
        console.log(`
        \     /   _____                              _____        _____    _____
         \   /   /      \  |      |       |         /      \     /        |                      
          \ /    |      |  |      |       |         |      |    /         |__
           |     |      |  |      |       |         |      |    \_____    |
           |     |      |  |      |       |         |      |          \   |
           |     \______/  \______/       |______   \______/   _______/   |______
         
         `);
    }

    else if (result.CpuVictory < result.PlayerVictory) {
        console.log(
            `
               \     /    ____                               _____
                \   /   /      \  |      |       |        |    |    |\    |       |
                 \ /    |      |  |      |       |        |    |    | \   |       |
                  |     |      |  |      |       |        |    |    |  \  |       | 
                  |     |      |  |      |        \  /\  /     |    |   \ |       |
                  |     \______/  \______/         \/  \/    __|__  |    \|       O
        `
        ); 
    }
    else {
        console.log( `
         ____    ____                                     _______  _______ 
        |       /    \    |       |       /\     |           |        |     \        /
        |__     |    |    |       |      /  \    |           |        |      \__ __ /
        |       |    |    |       |     /----\   |           |        |         |
        |____   \____/\   \______ /    /      \  |_____   ___|___     |         |
                       \   `);
    }

}


//test :
exports.showPlayersCard = showPlayersCard;
exports.promptYourCard = promptYourCard;
exports.CpuRandomCards = CpuRandomCards;
exports.gameCondition = gameCondition;
exports.winningCondition = winningCondition;