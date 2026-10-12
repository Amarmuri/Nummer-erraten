let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber(){
   tries = tries + 1;
   displayTries.innerHTML = 'Versuche: ' + tries;
   if(numberToGuess == myNumber.value){
   headlinee.innerHTML = 'Du hast gewonnen!!!🎉';
   headline.innerHTML = 'Glückwunsch!!!🎉';
   tipp1.innerHTML = '';
   tipp2.innerHTML = '';
   const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti();
   }
   if(numberToGuess > myNumber.value){
   headline.innerHTML = 'Die Zahl ist größer';
   tipp2.innerHTML = '';
   tipp1.innerHTML = '';
   }
   if(numberToGuess < myNumber.value){
   headline.innerHTML = 'Die Zahl ist kleiner';
   tipp1.innerHTML = '';
   tipp2.innerHTML = '';
   }
   myNumber.value = '';
}
function reset(){
   window.location.reload();
}
