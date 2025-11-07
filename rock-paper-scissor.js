let score = JSON.parse(localStorage.getItem('score')) ||  {
      wins: 0,
      losses: 0,
      ties: 0
      }
       document.querySelector('.js-score').innerHTML = `Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;

    function gameMove(playerMove) {  
      let computerMove = pickPlayerMove();  

      let result = '';

    if (playerMove === 'Scissor') {
      if (computerMove === 'Rock') {
        result = 'you lose.(bsdk khelna seekh)'; 
      }
      else if (computerMove === 'Paper') {
        result = 'you win.';
      } 
      else if (computerMove === 'Scissor') {
        result = 'Tie.';
      }  
    }
     else if (playerMove === 'Paper') {
       if (computerMove === 'Rock') {
        result = 'you win.'; 
       }
       else if (computerMove === 'Paper') {
        result = 'Tie.';
       } 
       else if (computerMove === 'Scissor') {
        result = 'you lose.(bsdk khelna seekh)';
       }  
    }
     else if (playerMove === 'Rock') {
       if (computerMove === 'Rock') {
        result = 'Tie.'; 
       }
       else if (computerMove === 'Paper') {
        result = 'you lose.(bsdk khelna seekh)';
       } 
       else if (computerMove === 'Scissor') {
        result = 'you win.';
       }
    }
      if (result === 'you win.') {
         score.wins += 1;
        }
      else if (result === 'you lose.(bsdk khelna seekh)') {
         score.losses += 1;
        }
      else if (result === 'Tie.') {
         score.ties += 1;
        }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-move').innerHTML= `you picked <img src="images/${playerMove}-emoji.png" class="style-img"> &nbsp;&nbsp;computer picked <img src="images/${computerMove}-emoji.png" class="style-img">`;
    document.querySelector('.js-result').innerHTML= result;     
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;

        }
   function pickPlayerMove() {

    const randoMove = Math.random();
    
    let computerMove = '';

     if (randoMove >=0 && randoMove < 1/3) {
         computerMove = 'Rock';
       }
     else if (randoMove >= 1/3 && randoMove < 2/3) {
         computerMove = 'Paper';
       }
     else if (randoMove >= 2/3 && randoMove < 1) {
         computerMove = 'Scissor';
       }
     return computerMove;
       }