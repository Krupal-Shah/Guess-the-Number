'use strict';

document.querySelector('.guess').value = "";
let roll = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',
    function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(Number(document.querySelector('.guess').value));

        // No input
        if (!guess){
            document.querySelector('.message').textContent = 'No number';
        }

        if (guess >= 0 && guess <= 20){
            // Player wins
            if (guess === roll){
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.message').textContent = 'Correct number';
                document.querySelector('.number').textContent = roll;

                if (score > highscore){
                    highscore = score;
                    document.querySelector('.highscore').textContent = score;
                }

            } else {
                score--;
                if (score > 0){
                    document.querySelector('.score').textContent = score;
                    if (guess > roll){
                        document.querySelector('.message').textContent = 'Too High!';                        
                    } else {
                        document.querySelector('.message').textContent = 'Too low!';
                    }
                } else {
                    document.querySelector('.score').textContent = 0;
                    document.querySelector('.message').textContent = 'You lost the game';
                }
            }
        }
    }
)

document.querySelector('.again').addEventListener('click',
function() {
    score = 20;
    roll = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = null;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    }
)
