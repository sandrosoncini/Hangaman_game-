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
    alert(answer)
}

function generateButtons(){
    let buttonHtml = 'abcdefghijklmnopqrstuvwxyz'.split("").map(letter =>
        `
        <button class="btn btn-lg btn-primary m-2">
        
        `
        )
}

randomWord();

