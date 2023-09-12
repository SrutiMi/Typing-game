const text = document.querySelector('.text');
const textarea = document.getElementById('gameTextarea');
const start = document.querySelector('.start');
const time = document.querySelector('.time');
const WPM = document.querySelector('.WPM');
const mistakesDisplay = document.querySelector('.mistakes'); // Define the mistakesDisplay variable
text.innerHTML = "<h3>Lets check your speed. Click the start button to start.</h3>";
let timer;
let mistakes=0;
start.addEventListener('click', () => {
    start.innerHTML = "Start Again";
    const startTime= Date.now()/60000;
    mistakesDisplay.textContent = "Mistakes: 0";
    time.innerHTML = "Time: 0";
    WPM.textContent = "WPM: 0";
    const index = Math.floor(Math.random() * 7);
    text.innerHTML = data[index];
    const expectedText = text.textContent;
    textarea.value = '';
    textarea.style.display = "block";
    textarea.focus();
    time.classList.remove('red');
     // Timer
        clearInterval(timer);
        Time(60);
    // Input from the user, comparison, and counting of mistakes
     
    textarea.addEventListener('input', () => {
       
        const userInput = textarea.value;

        // To get the no of mistakes
         mistakes = checkInput(userInput, expectedText);
        mistakesDisplay.textContent = "Mistakes: " + mistakes;
        

        //To count the WPM ----->

       // When the user starts typing, we are recording the start time
        if (startTime === null) {
            startTime = Date.now();
        }

        const endTime = Date.now() / 60000; // Dividing by 60000 to get the time in minutes
        
        // Calculating the number of words typed
        const wordsArray = userInput.trim().split(/\s+/); // Split by spaces to count words
        totalWordsTyped = wordsArray.length;

        // Update WPM only if words have been typed and the timer has started
        if (startTime !== null && totalWordsTyped > 0) {
            const timeElapsed = endTime - startTime;
            const wordsPerMinute = (totalWordsTyped / timeElapsed).toFixed(0);
            WPM.textContent = "WPM: " + wordsPerMinute;
        }



        // Highlighting mistakes in the expected text
        highlightMistakes(userInput, expectedText);
    });
   
        
    });
    

//for the timer 
function Time(sec) {
    timer = setInterval(() => {
        time.innerHTML = "Time: " + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            time.classList.add('red');
            time.innerHTML = "Times up!!!"
            textarea.style.display = "none";
        }
    }, 1000);
    // console.log(sec);This will display the initial value of 'sec' before the timer starts
    
}


//Function to display the mistakes
function checkInput(userInput, expectedText) {
    // Split the user input and expected text into individual characters
    const userInputChars = userInput.split('');
    const expectedTextChars = expectedText.split('');
    let mistakes = 0;
    // Comparing each character
    for (let i = 0; i < userInputChars.length; i++) {
        if (userInputChars[i] !== expectedTextChars[i]) {
            mistakes++;
        }
    }

    return mistakes;
}


//Function to highlight 
function highlightMistakes(userInput, expectedText) {
    const userInputChars = userInput.split('');
    const expectedTextChars = expectedText.split('');
    let highlightedText = '';
    // console.log(userInputChars);
    for (let i = 0; i < expectedTextChars.length; i++) {
        
        if (i<userInputChars.length && userInputChars[i] !== expectedTextChars[i]) {
            highlightedText += '<span class="incorrect">' + expectedTextChars[i] + '</span>';
        } else if(i<userInputChars.length && userInputChars[i] === expectedTextChars[i]){
            highlightedText += '<span class="correct">' + expectedTextChars[i] + '</span>';
        }else{
          highlightedText += '<span class="current">' + expectedTextChars[i] + '</span>';
        }
        
    }

    text.innerHTML = highlightedText;
}
