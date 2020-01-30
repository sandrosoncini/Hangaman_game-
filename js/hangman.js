const programmingLanguages = [
    "java",
    "python",
    "javascript",
    "ruby",
    "css",
    "c",
    "php",
    "sql",
    'html'
]

let answer = '';
let mistake = 0;
let guessed = [];
let wordStatus = null;
let maxWrong = 6;
document.getElementById('maxWrong').innerHTML = maxWrong;




function randomWord(){
     answer = programmingLanguages[Math.floor(Math.random () * programmingLanguages.length)];
};

function generateButtons(){
    let letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split("");

    const buttonsHtml = letterArray.map(letter =>
        `
        <button
            class="key"
            id='`+ letter +`'
            onClick="handleGuess('`+ letter +`')"
        >
            `+ letter +`
        </button>
        `).join(" ");

    document.getElementById("keyboard").innerHTML = buttonsHtml
}; 

function handleGuess(letter){
    
    guessed.indexOf(letter) === -1 ? guessed.push(letter) : null;
    document.getElementById(letter).setAttribute('disabled', true);

    if(answer.indexOf(letter) >= 0){
        guessedWords()
        gameWin()
    }else if (answer.indexOf(letter) === -1) {
        mistake += 1
        updateMistake()
        changePic()
        gameLost()
    };
};

function gameWin(){
    if(wordStatus === answer){
        document.getElementById('keyboard').innerHTML = "YOU WIN MY LOVE"
    };
};

function gameLost(){
    if(mistake === maxWrong){
        document.getElementById('keyboard').innerHTML = "YOU LOST MTF"
    };
};

function guessedWords(){
    wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("");
    document.getElementById("wordSpotlight").innerHTML = wordStatus
};

function updateMistake(){
    document.getElementById('mistakes').innerHTML = mistake;
};
    


function changePic(){
    if(mistake === 1){
        document.getElementById('hangmanImage').src = "./images/gallows+head.jpg"
    } else if(mistake === 2){
        document.getElementById('hangmanImage').src = "./images/gallows+head+torso.jpg"
    } else if(mistake === 3){
        document.getElementById('hangmanImage').src = "./images/gallows+head+torso+arm.jpg"
    } else if(mistake === 4){
        document.getElementById('hangmanImage').src = "./images/gallows+head+torso+2leg.jpg"
    } else if(mistake === 5){
        document.getElementById('hangmanImage').src = "./images/gallows+head+torso+2leg+arm.jpg"
    }else if(mistake === 6){
        document.getElementById('hangmanImage').src = "./images/gallows+head+torso+2leg+2arm.jpg"
    }else{
        null;
    };
};

function reset(){
    mistake = 0;
    guessed = [];
    document.getElementById('hangmanImage').src = "./images/gallows.jpg"
   
    generateButtons();
    randomWord();
    guessedWords();
    updateMistake();
};


generateButtons();
randomWord();
guessedWords();

 