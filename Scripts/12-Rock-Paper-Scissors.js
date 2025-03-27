let score = JSON.parse(localStorage.getItem
  ('score')) || {
    Win: 0,
    Loose: 0,
    Tie: 0
   }; 

updateScoreElements();
  
// same as above after ||
  /* if (!score){ 
   score = {
    Win: 0,
    Loose: 0,
    Tie: 0
   };
} 
   */ 

let autoPlaying = false;
let intervalID;

//const autoPlay = () => {
//};

function autoPlay(){
  if(!autoPlaying){
  intervalID = setInterval(()=>{
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 1000);
autoPlaying = true;
}
else{
  clearInterval(intervalID);
  autoPlaying = false;
}
};

// const playGame = (playerMove) =>{};

document.querySelector('.js-Rock-button')
.addEventListener('click', () => {
  playGame('Rock');
});

document.querySelector('.js-Paper-button')
.addEventListener('click', () => {
  playGame('Paper');
}
);

document.querySelector('.js-Scissors-button')
.addEventListener('click', () => {
  playGame('Scissors');
}
);

document.body.addEventListener('keydown', (event)=>{
  if(event.key==='r'){
     playGame('Rock');
  } else if (event.key === 'p'){
    playGame('Paper');
  } else if (event.key === 's'){
    playGame('Scissors');
  }
});

function playGame(playerMove){
          const computerMove = pickComputerMove();

          let results='';

          if(playerMove === 'Rock'){
            if (computerMove === 'Rock')
          {
          results = 'Tie';
          }
          else if(computerMove === 'Paper' )
          {
          results = 'Loose';
          }
          else if(computerMove === 'Scissors')
          {
          results = 'Win';
          } } 

          else if(playerMove === 'Paper'){
            if(computerMove === 'Rock')
          {
          results = 'Win';
          }
          else if(computerMove === 'Paper' )
          {
          results = 'Tie';
          }
          else if(computerMove === 'Scissors')
          {
          results = 'Loose';
          }}

          else if(playerMove === 'Scissors'){ 
          if (computerMove === 'Rock')
          {
          results = 'Loose';
          }
          else if(computerMove === 'Paper' )
          {
          results = 'Win';
          }
          else if(computerMove === 'Scissors')
          {
          results = 'Tie';
          }};

          if(results === 'Win'){
            score.Win +=1;
          }
          else if(results === 'Tie'){
            score.Tie +=1;
          }
          else if(results === 'Loose'){
            score.Loose +=1;
          }

          localStorage.setItem('score', JSON.stringify
          (score));

          updateScoreElements();

          document.querySelector('.js-result')
          .innerHTML= results;

          document.querySelector('.js-moves').innerHTML = playerMove;

          document.querySelector('.js-moves').innerHTML
          = `You: <img src="image/${playerMove}-emoji.png" class="move-icon">
           <img src="image/${computerMove}-emoji.png" class="move-icon"> : Computer `;

          //alert(`You picked ${playerMove}, Computer picked ${computerMove}, and results are: You ${results} Win: ${score.Win} Losses: ${score.Loose} Tie: ${score.Tie}`);

          console.log(`${results}`);
        }

function updateScoreElements(){
  document.querySelector('.js-score')
            .innerHTML = `Win: ${score.Win} Losses: ${score.Loose} Tie: ${score.Tie}`;
};


function pickComputerMove (){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber>=0 && randomNumber <1/3)
    {
    computerMove = 'Rock';
    }
    else if(randomNumber >=1/3 && randomNumber <2/3)
    {
    computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber <1)
    {
    computerMove = 'Scissors';
    };
    return computerMove;
}