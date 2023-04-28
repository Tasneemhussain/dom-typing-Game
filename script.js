// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];
// PART 1
// 1. getRandomWord
// 2. addWordToDOM
// 3. add event listener to text element
// 4. updateScore

// PART 2
// 5. get the cursor automatically in input
// 6. Counting down - timer
// 7. update time
// 8. gameOver
// 9. eventlistener => time += 5;

// PART 3
// 10. settings btn
// 11. settings select
// 12. pull from local storage
// 13. set difficulty select value
// 14. set time depending on difficulty in the eventlistener

// initializing word
let randomWord;

// initializing score
let score = 0;

// initializing time
let time = 10;

// initializing difficulty ...localstoreage is a bilt in funtion were we can setitem n get item
  let difficulty = 
  localStorage.getItem("difficulty") !== null
  ?localStorage.getItem("difficulty")
  :"medium";


// set difficulty select value
  difficultySelect.value =
  localStorage.getItem("difficulty") !== null
  ?localStorage.getItem("difficulty")
  :"medium";
  

// focus text input at start focus is a built in function in js
// the focus will be on the text writing area
  text.focus();
  
  // COUNTING DOWN function its a built in function 1000 is miliseconds
const timeInterval = setInterval(updateTime,1000);

// Random word function to get random word to type
 function getRandomWord() {
     return words[Math.floor(Math.random() * words.length)];
     // floor will just round down
     // function to get a random word from our word array
 }

//  add word to dom
 function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
 
 }

//  update score functin it update your score
  function updateScore(){
    score++;
    scoreEl.innerHTML = score;

  };

  // updatetime function
  function updateTime() {
    // console.log(1);  calling out to check if its working
    time--;
    timeEl.innerHTML = time + "s";
    if (time===0) {
      clearInterval(timeInterval);

      gameOver();
    }
    
  }
  // GAME OVER FUNCTION built in function in js for reload again game page
  function gameOver() {
    endgameEl.innerHTML = `<h1> Time ran out!</h1> <p> Your final score is ${score}</p> <button onclick="location.reload()">Reload</button>`;
    
    // we can add styles in js like css
    endgameEl.style.display = "flex"
  }

  addWordToDOM();

  text.addEventListener("input", (event) => {
    const insertedText = event.target.value;
  //  console.log(insertedText);

    if(insertedText === randomWord ){
         addWordToDOM();

       updateScore();
      // clear input feild
        event.target.value = "";

      // increment the time after correct input
        // time += 5;
        if (difficulty === "hard") {
          time += 2;
        } else if (difficulty === "medium"){
          time += 3;
        } else {
          time += 5;
        }
        updateTime();
     }
 });
  //  SETTING BTN CLICK toggle is built in function
    settingsBtn.addEventListener("click",() => settings.classList.toggle("hide"));

  // SETTINGS SELECT
    settingsForm.addEventListener("change",(event) => {
      difficulty = event.target.value;

      localStorage.setItem("difficulty",difficulty);
    })