/*selection and manipulation
//textContent:: to change the text content
document.querySelector('.message').textContent='Correct answer';

document.querySelector('.score').textContent=12;
document.querySelector('.number').textContent=13;

//log to console
console.log(document.querySelector('.score').textContent);

//value:: to manipulate the value
document.querySelector('.guess').value=12;
*/


//handling click events
/*
     1. select the selector
     2. Add addEventListener function for handling the event 
        which wait for a certain event and then react to it 
        acc to the function which is given into it
        --It takes two args 
          ->name of the event
          ->a function that specify what to happen when 
            the event occur
*/

/*
    Generate random number
    Math.random()-> it will generate number b/w 0 and 1 floating numbers
    ->to generate upto a given number than multiply the above function
      with the given number but there is still floating numbers
    -> to avoid floating numbers embedd that function into 
      Math.trunc(Math.random)*10   :: to generate upto 10
    -> but still the last digit no include while generating
       so to do so add 1

       and it will be like::
       Math.trunc(Math.random()*10)+1

 */

//generate secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;


//create variable for score
let score = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click',
    function () {
        const guessNum = Number(document.querySelector('.guess').value);
        // console.log(typeof guessNum);   

        //if the user enter nothing
        if (!guessNum) {
            //prints a message
            document.querySelector('.message').textContent = '🛑 No number!';
        }
        //if the guess number is equal to the secret number
        else if (guessNum === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct answer';
           //hide the secret number and displays when the player wins
          document.querySelector('.number').textContent = secretNumber;
            // document.querySelector('body').style.backgroundColor='cyan';
          document.querySelector('.number').style.width='80px';
          document.querySelector('.number').style.backgroundColor='black';
          document.querySelector('.number').style.color='white';
          
          
          //highscore
          if(score>highscore)
          {
              highscore=score;
              document.querySelector('.highscore').textContent=highscore;
          }

        }
        //when guess is too high
        else if (guessNum > secretNumber) {

            if (score > 1) {
                document.querySelector('.message').textContent = "📈 Too high!!";

                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "😥 You lost the Game!!";
                document.querySelector('.score').textContent = 0;
            }
        }
        //when guess is too low
        else if (guessNum < secretNumber) {

            if (score > 1) {
                document.querySelector('.message').textContent = "📉 Too low!!";

                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "😥 You lost the Game!!";
                document.querySelector('.score').textContent = 0;
            }
        }
    }
)

//Reset game functionality
document.querySelector('.reset').addEventListener('click',function(){

      score=20; //restore score value
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.score').textContent=score;
      document.querySelector('.message').textContent='😈 Start guessing';
      document.querySelector('.guess').value='';
      document.querySelector('.number').textContent='?';

      document.querySelector('.number').style.width='60px';
      document.querySelector('.number').style.color="black";
      document.querySelector('.number').style.background='none';
})