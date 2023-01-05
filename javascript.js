
var start = document.getElementById('start');
var click = document.getElementById('click');
var result = document.getElementById('result');
var retry = document.getElementById('retry')
var reactionTime;
var reset;  
var checked = false;

var clickTimer = function clickTimer(){
  click.style.visibility = 'visible'
  click.textContent = 'CLICK'
  click.style.background = '#B90E0A'
  click.style.border = '2px solid white'
  const DateStart = new Date();
  
  function clicked(){  
    const DateClicked = new Date();
    reactionTime = DateClicked.getTime() - DateStart.getTime();
    result.textContent = 'You Clicked in ' + reactionTime + 'MS';
    console.log(reactionTime + 'ms')
    click.removeEventListener('click', clicked)
    retry.style.visibility = 'visible'
  };
  
  click.addEventListener('click', clicked);

  var reset = function reset(){
    checked = false;

    clicked
    console.log("worked")
    retry.style.visibility = 'hidden'
  }

  retry.addEventListener('click', reset)
}

var startClick = function startClick(){
  var time = Math.floor(Math.random() * 6 * 100) / 100;
  console.log(time);
  start.style.backgroundColor = '#a3ebb1'
  setTimeout( clickTimer, time * 1000)
};






start.addEventListener('click', startClick)

