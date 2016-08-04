/**
 * Created by Awar on 2016-08-04.
 */

 // method for capitalizing first letter in strings
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase().concat(this.slice(1));
}

// game settings
_gameOptions = {
    1: { name : "rock",
         beats: 3,
         claim: "crushes" },
    2:  { name : "paper",
         beats: 1,
         claim: "covers" },
    3: { name : "scissors",
         beats: 2,
         claim: "cuts" }
}

// the game
var app = {
    init: function() {
        this.gameSetup();
        this.gamePlay();
    },

    gameSetup: function() {

        $('[data-game]').find('input').each(function(index) {
            $(this).val(index + 1);
        });

    },

    gamePlay: function() {

        $('[data-game]').on('change', function(){
            var userChoice = parseInt($(':checked').val(), 10),
                computerChoice = Math.round(Math.random() * (3 - 1) + 1);

            if (userChoice === computerChoice) {
                $('[data-winner]').text("It's a tie!");
            }
            else if (_gameOptions[userChoice].beats === computerChoice) {
                $('[data-winner]').text(_gameOptions[userChoice].name.capitalize() + " " + _gameOptions[userChoice].claim + " " + _gameOptions[computerChoice].name + ". You win!");
            }
            else {
                $('[data-winner]').text(_gameOptions[computerChoice].name.capitalize()  + " " + _gameOptions[computerChoice].claim  + " " +  _gameOptions[userChoice].name + ". Computer wins!");
            }
        });
    }
};

$(document).ready(function() {
    app.init();
});
