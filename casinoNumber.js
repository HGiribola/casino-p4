// picking a number

var player1 = prompt("Insert player 1 number: ");
player1Number = parseInt(player1);

var player2 = prompt("Insert player 2 number: ");
player2Number = parseInt(player2);

// draw

if (player1Number === player2Number) {
  alert("Draw!");
}
else{

    // randomizer

    var randomizer = Math.random();
    calc = randomizer * 2;
    rand = parseFloat(calc);

    //bigger or smaller wins

    if (rand > 1) {
        alert("Bigger number wins!");

        if (player1Number > player2Number) {
            alert("Player 1 wins!");
        }
        else {
            alert("Player 2 wins!");
        }
    }
    else {
        alert("Smaller number wins!");

        if (player1Number < player2Number) {
            alert("Player 1 wins!");
        }
        else {
            alert("Player 2 wins!");
        }
    }
}