const prompt = require("prompt-sync")();
function showMenu() {
    console.log("--------------------------§ CARD GAME §------------------------------------");
    console.log("                    ________________________                               ");
    console.log("                   |     1- Play Game       |                              ");
    console.log("                   |     2- How To play     |                              ");
    console.log("                   |     3- Quit            |                              ");
    console.log("                   |________________________|                              ");
    console.log("---------------------------------------------------------------------------");
}

exports.showMenu = showMenu;