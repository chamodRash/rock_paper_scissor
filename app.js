const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    // Start the game
    const startGame = () => {
        const startPage = document.querySelector('.start-page');
        const gamePage = document.querySelector('.game-page');
        const startBtn = document.querySelector('.start-btn');
        const exitBtn = document.querySelector('.exit-btn');
    
        startBtn.addEventListener('click', () => {
            startPage.classList.add('fadeOut');
            gamePage.classList.add('fadeIn');
        });
        exitBtn.addEventListener('click', () => {
            startPage.classList.remove('fadeOut');
            gamePage.classList.remove('fadeIn');
        });
    };
    
    // Playe the game 
    const playGame = () => {
        const handsArray = ['rock', 'paper', 'scissor'];
        const winner = document.querySelector('.winner');
        const hands = document.querySelectorAll('.hands img');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const optionBtns = document.querySelectorAll('.option-btns .btn');
        const restartBtn = document.querySelector('.restart-btn');

        // Update Player Score
        function updatePlayerScore(score) {
            document.querySelector('.player-score p').innerHTML = score;
        };
        // Update Computer Score
        function updateComputerScore(score) {
            document.querySelector('.computer-score p').innerHTML = score;
        };
        // Generate a number between 0 and max
        function generateRandomInteger(max) {
            return Math.floor(Math.random() * max);
        };

        // Reset animation to none after the previous animation end
        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });

        optionBtns.forEach(optionBtns => {
            optionBtns.addEventListener('click', function() {
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                const computerChoice = handsArray[generateRandomInteger(3)];

                // set a time until the animation end and then change the img src
                setTimeout(() => {
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;

                    // passing the values to compare player and computer
                    compareHands(this.textContent, computerChoice);
                }, 2000);

                // Set Shake Animation for hands
                playerHand.style.animation = 'shakePlayer 2s ease-in-out';
                computerHand.style.animation = 'shakeComputer 2s ease-in-out';
            });
        });


        const compareHands = (playerHand, computerHand) => {
            // Check whether the hands are same
            if (playerHand === computerHand) {
                winner.innerHTML = "It's a tie!";
                return;
            };

            // Check when the player win 
            if (playerHand === 'rock' && computerHand === 'scissor' || playerHand === 'paper' && computerHand === 'rock' || playerHand === 'scissor' && computerHand === 'paper') {
                playerScore++;
                winner.innerHTML = "Player wins!";
                updatePlayerScore(playerScore);
                return;
            } else { // Check when the computer win 
                computerScore++;
                winner.innerHTML = "Computer wins!";
                updateComputerScore(computerScore);
                return;
            };
        };

        restartBtn.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            updatePlayerScore(playerScore);
            updateComputerScore(computerScore);
        });
    };
    
    
    // -------- Calling Inner Functions ----------------
    startGame();
    playGame();
};

// -------------- Calling the Game ----------------
game();