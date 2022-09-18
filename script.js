// GLOBAL VARIABLES

let shuffled = document.getElementById('shuffled');
let hint = document.getElementById('hint');
let inputElement = document.getElementById('input-field');
let refreshBtn = document.getElementById('refresh-word');
let checkBtn = document.getElementById('check-word');
let result = document.getElementById('result');

// Global variables (declaration only)
let randNo, randomObj;

//calling this function everytime the web page refreshes or loads for the first time
initializeGame();

// When refresh button is pressed, once again call initializeGame()
refreshBtn.addEventListener('click', initializeGame);

// When check button is called, the arrow function is executed
checkBtn.addEventListener('click', () => {
    let inputText = inputElement.value.toLocaleLowerCase().trim();  
    //toLocalLowerCase() converts the original string and toLowerCase() does not modify the original string
    
    if(inputText === '') {
        result.innerHTML = "<h1 class='red'>Please enter a word</h1>";
        return;
    }
    if(inputText.length < randomObj.word.length) {
        result.innerHTML = "<h1 class='red'>The word is too short</h1>";
        return;
    }
    if(inputText.length > randomObj.word.length) {
        result.innerHTML = "<h1 class='red'>The word is too long</h1>";
        return;
    }
    if(inputText === randomObj.word.toLocaleLowerCase()) {
        result.innerHTML = "<h1 class='green'>Congrats! Your answer is correct.</h1>";
        return;
    }
    result.innerHTML = "<h1 class='red'>Oops! The correct answer was "+ randomObj.word +"</h1>";
    return;
});

function initializeGame() {
    result.innerHTML = "";  //clearing the previous result
    inputElement.value = "";  //clearing previous value in input textbox
    
    randNo = Math.floor(Math.random()*words.length);
    randomObj = words[randNo];  //choosing a random word from words[] array using random number
    let charArray = randomObj.word.split("");  //converting string to char[] array

    // shuffling the letters using another random number
    for(i=0; i<charArray.length; i++) {
        j = Math.floor(Math.random()*charArray.length); //another random number
        //swapping two indexes
        temp = charArray[j];
        charArray[j] = charArray[i];
        charArray[i] = temp;
    }
    jumbledWord = charArray.join("");
    shuffled.innerText = jumbledWord;
    hint.innerText = randomObj.hint;
}