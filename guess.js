const number = parseInt(Math.random() * 100+1);
console.log(number);
const submitbutton = document.querySelector('#btn');
const textarea = document.querySelector('#guessfield');
const guesstukkta = document.querySelector('.Guessess');
const resultans = document.querySelector('.Lastresult');
const low = document.querySelector('.gameoverline');
const decisions  = document.querySelector('.decision');
const gameover = document.querySelector('.gameover');
let gameplay = true;
let array = [];
let attempt = 0;

if(gameplay){
    submitbutton.addEventListener('click', (e)=>{
 e.preventDefault();
 let guess = parseInt(textarea.value);
 console.log(guess);
 vaildationguess(guess);

    })
}
function vaildationguess(guess){
if(isNaN(guess)){
    alert ('please the vaild number');
}
else if(guess<1){
    alert('please enter the number between 1 and 100');
}
else if (guess>100){
    alert('please enter the number between 1 and 100');
}
else{
    array.push(guess); 
    if(attempt===11){
        displayclean(guess);
        displaymessage(`game over you lost the game the number was ${number}`);
        endgame();

    }
    else{
        displayclean(guess);
        cheackguess(guess);


    }
}
}

  function cheackguess(guess){
    if(guess== number){
        displaymessage(`Congratulation You Won The Game The Number Was: ${number}`);
        endgame();
    }
    else if (guess<number){
        displaymessage('too low');
    }
     else if(guess>number){
        displaymessage('too high');
     }
        
  }
 function displayclean(guess){
    textarea.value = '';
    guesstukkta.innerHTML += `${guess}, `
    attempt++;
    resultans.innerHTML = `you have ${10-attempt} attempt left only`
 }

    function displaymessage(message){
      decisions.innerHTML = `<h2>${message}</h2>`;
    }

    function endgame(){
        textarea.value = '';
        textarea.setAttribute('disabled', '');
        gameover.innerHTML = `<h2>Game Over</h2>`;
        guesstukkta.innerHTML = '';
        resultans.innerHTML = '';
        gameplay = false;

    }

 function restart(){
    const resetbutton = document.querySelector('#btn-2');
    resetbutton.addEventListener('click',(e)=>{
        e.preventDefault();
    textarea.removeAttribute('disabled');
    gameplay = true;
    array = [];
    attempt = 0;
    decison.innerHTML = '';
    gameover.innerhtml = '';
    guesstukkta.innerhtml = '';
    resultans.innerhtml = '';
    number =  parseInt(Math.random() * 100+1);
    console.log(number);
})

 }



