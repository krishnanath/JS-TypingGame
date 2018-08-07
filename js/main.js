window.addEventListener('load', init);


// Globals

//Available Levels
const levels ={
    easy:5,
    medium: 3,
    hard: 2
}

//To change level
const currentLevel = levels.easy;


let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words =[
    'APPRECIATE' ,
    ' APPRECIATION',
    'APPRECIATIVE' , 
    'APPRECIATIVENESS', 
    'ASSERTIVENESS' ,'ASSERTIVE', 
    'ATTENTIVENESS', 'AUDACITY', 'AWARE' ,  'AWARENESS' , 'AUTHENTIC' , 'AUTHENTICITY' , 'ABRACADABRA' , 'ATTRACTION' , 'ALLOW' , 'ALLOWING' , 'AFFECTION' ,  'AFFECTIONATE' , 'ABSORBED', 'ALERT', 'AMAZED', 'AWE' , 'AWED', 'ANIMATE',  'ANIMATED' , 'ANIMATING' , 'ANIMATION' , 'ANIMATENESS' , 'ARDENT' , 'AMAZING' , 'AWESOME' , 'AWESOMENESS' , 'AROUSED' , 'ASTONISHED',   'ASTONISHING' , 'AMUSED' , 'AIR' , 'AIRNESS' , 'ALOHA' , 'ADORE' , 'ADMIRE', 'ADMIRABLE' , 'ALLURE' , 'ANGEL' , 'ANGELIC' , 'ALTRUISM' ,  'ALTRUISTIC' , 'ABOUND' , 'ABOUNDING' , 'ABOUNDS'  , 'ABUNDANT' , 'ABSOLUTE' , 'ABSOLUTELY' , 'ACCESSIBLE' , 'ACCLAIMED' , 'ACCOMMODATE' , 'ACCOMMODATED' ,  'ACCOMMODATION' , 'ACCOMMODATING' , 'AMPLE' , 'APPRECIATIVE', 'JOY' , 'AMIN', 'ACCENTUACTIVITY', 'ACTABILITY', 'AFFABLE', 'ALACRITY', 'ALTRUCAUSE', 'AMIABLE', 'ASTOUNDING', 'ATTRACTIVE' , 'ALIVE' , 'ALIVENESS', 'ACCLAIM',  'ABUNDANT' , 'GRATIFICATION' , 'ACCLAMATION' 
];

//Initialize Game
function init() {
    //Load wordfrom array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call  countdown every sec
    setInterval(countdown , 1000);
    //Check game status
    setInterval(checkStatus, 50);
   
}

//StartMatch
function startMatch() {
    if(matchWords()) {
       isPlaying = true;
       time =6;
       showWord(words);
       wordInput.value ='';
       score++;
 
    }
    //IF SCORE -1, display 0
    if(score === -1){
        scoreDisplay.innerHTML =0;
    }else {
        scoreDisplay.innerHTML = score;
    }
    
}

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML='Correct!!!';
        return true;
        }else{
            message.innerHTML ='';
            return false;
        }
}


//Pick & show random word
function showWord(words){
    const randIndex= Math.floor(Math.random() * words.length);
    //Output random  word

currentWord.innerHTML = words[randIndex];
}

//Countdown timer 
function countdown() 
{
    if(time >0 ){
        //Decrement
        time--;

    }else if(time === 0){
        //Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}
// Check GameStatus
function checkStatus() {
    if(!isPlaying && time ===0) {
     message.innerHTML  = 'Game Over!!!';
     score = -1;

    }
}