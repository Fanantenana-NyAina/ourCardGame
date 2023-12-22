const menu = require("./affichage_menu");
const howToPlay = require("./howToPlay");
const cardGame = require("./cardGame");
const prompt = require("prompt-sync")();

menu.showMenu();
function TheGame() {
    CpuVictory = 0;
    PlayerVictory = 0;
    let playersDecision = +prompt("What do you want to do ? : ");
    if (playersDecision === 1) {
        let result = cardGame.gameCondition();
        if (result.CpuVictory > result.PlayerVictory) {
            console.log(
                `                     \\     /    _____                          _____        _____    _____
                      \\   /   /      \\  |      |       |         /      \\     /        |                      
                       \\ /    |      |  |      |       |         |      |    /         |__
                        |     |      |  |      |       |         |      |    \\_____    |
                        |     |      |  |      |       |         |      |          \\   |
                        |     \\______/  \\______/       |______   \\______/   _______/   |______`);
        }

        else if (result.CpuVictory < result.PlayerVictory) {
            console.log(
                `                        \\     /    ____                               _____
                         \\   /   /      \\  |      |       |        |    |    |\\    |       |
                          \\ /    |      |  |      |       |        |    |    | \\   |       |
                           |     |      |  |      |       |        |    |    |  \\  |       | 
                           |     |      |  |      |        \\  /\\  /     |    |   \\ |       |
                           |     \\______/  \\______/         \\/  \\/    __|__  |    \\|       O`
            );
        }
        else {
            console.log(
                `              ____    ____                                     _______  _______ 
             |       /    \\    |       |       /\\     |           |        |     \\        /
             |__     |    |    |       |      /  \\    |           |        |      \\__ __ /
             |       |    |    |       |     /----\\   |           |        |         |
             |____   \\____/\\   \\______ /    /      \\  |_____   ___|___     |         |
                            \\ `);
        }
        let repeat_TheGame = prompt("Do you want to repeat the game? (yes/no): ");
        if (repeat_TheGame === "yes") {
            console.log("Compose '1' to restart the game!");
            TheGame();
        }
        else if (repeat_TheGame === "no") {
            console.log("You left the game!");
            menu.showMenu();
            TheGame();
        }
    }
    else if (playersDecision === 2) {
        howToPlay.howToPlay();
        TheGame();
    }
    else if (playersDecision === 3) {
        console.log("Thank you for playing!");
    }
}
TheGame();

