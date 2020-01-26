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
let maxWrong = 6;
let mistake = 0;
let guessed = [];

function randomWord(){
    answer = programmingLanguages[Math.floor(Math.random () * programmingLanguages.length)];
    //alert(answer)
}

function generateButtons(){
    let buttonHtml = 'abcdefghijklmnopqrstuvwxyz'.split("")
//     you have an array of abcdefg 
// 1) looop through
buttonHtml.forEach(letter => {
    const button = dom.createElement('<div class="letter">letter</div>')
})
// 2) you need to get keycode of every character (optional)
// 3) const a = dom.createElement('<div>`${letter}`</div>')
// 4) add an event to the element you created
// 5) on click it will check the word and see if it has this character
// 6) if it does display that character
// 7) if not increment mistake


return button
}

generateButtons()
randomWord();

