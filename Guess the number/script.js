const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let run = true;

document.getElementById("PLAY").onclick = function()
{

while (run) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer)
         {
      window.alert("TOO LOW! TRY AGAIN!");
    } else if (guess > answer)
         {  
      window.alert("TOO HIGH! TRY AGAIN!");
    } else {
      window.alert(`YOU GOT IT! The answer was ${answer}. Attempts made: ${attempts}`);
      run = false;
    }
  }
}
}