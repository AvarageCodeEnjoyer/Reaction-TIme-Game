
var start = document.getElementById('start');
var click = document.getElementById('click');
var result = document.getElementById('result');
var text = document.getElementById('text')
var retry = document.getElementById('retry')
var attempts = document.getElementById('attempts')
// var items = Set();
var list = document.querySelector('ul');
var html = '';
var reactionTime;
var reset;  
var checked = false;

start.style.visibility = 'visible'

//* Runs when you press "Start Game" Button
//* Makes a random time in seconds
//* Makes "Start Game" button lose text and change background color 
var startClick = function startClick(){
  var time = Math.floor(Math.random() * 5 * 100) / 100;
  console.log(time);
  start.style.backgroundColor = '#a3ebb1'
  start.innerText = ''
  start.removeEventListener('click' , startClick)
  setTimeout( clickTimer, time * 1000)
};


//* Runs after a random time after startClick, 
//* makes "CLICK" button visible and adds event listener,
//* Records the time that it becomes visible
var clickTimer = function clickTimer(){
  click.style.visibility = 'visible'
  click.textContent = 'CLICK'
  click.style.background = '#B90E0A'
  click.style.border = '2px solid white'
  click.addEventListener('click', clicked);
  var DateStart = new Date();

  //* Runs when you click the button, 
  //* Records time that you clicked the button at,
  //* Makes reactionTime = the date to clicked at - the date when the button showed up 
  function clicked(){  
    var DateClicked = new Date();
    reactionTime = DateClicked.getTime() - DateStart.getTime();
    if(reactionTime >= 1000){
      text.textContent = "wow, you'er REALLY slow"
    }
      else if(reactionTime >= 750){
        text.textContent = "did you even try?"
      }
      else if(reactionTime >= 500){
        text.textContent = "really slow"
      }
      else if(reactionTime >= 300){
        text.textContent = "Ok, not bad"
      }
      else if(reactionTime >= 250){
        text.textContent = "Wow, Thats really fast"
      }
      else if(reactionTime >= 175){
        text.textContent = "Ok, How did you do that?"
      }
      else if(reactionTime >= 100){
        text.textContent = "Alright, you definitely cheated"
      }
    result.textContent = 'You Clicked in ' + reactionTime + 'MS';
    console.log(reactionTime + 'ms')
    retry.style.visibility = 'visible'
    click.removeEventListener('click', clicked)
  };

}

//* Runs startClick() and resets styles on buttons
//* Adds reactionTime to an array of reactionTimes to display previous times
var resetGame = function resetGame(){
    startClick()
    checked = false;
    result.innerText = ''
    click.style.visibility = 'hidden'
    start.style.backgroundColor = '#a3ebb1'
    start.innerText = ''
    retry.style.visibility = 'hidden'
    text.textContent = ''
    console.log("worked")
    /* items.add(reactionTime + 'ms')
    for (let item of items) {
      html += '<li>' + item + '</li>';
      list.innerHTML = html;
    } */
  }
  
//* Adds event listener to start button to activate game 
start.addEventListener('click', startClick)

//* Adds event listener to click to reset game
retry.addEventListener('click', resetGame)


