
var start = document.getElementById('start');
var click = document.getElementById('click');
var result = document.getElementById('result');
var retry = document.getElementById('retry')
var attempts = document.getElementById('attempts')
// var items = Set();
var list = document.querySelector('ul');
var html = '';
var reactionTime;
var reset;  
var checked = false;
start.style.visibility = 'visible'

var startClick = function startClick(){
  var time = Math.floor(Math.random() * 5 * 100) / 100;
  console.log(time);
  start.style.backgroundColor = '#a3ebb1'
  start.innerText = ''
  setTimeout( clickTimer, time * 1000)
};

var clickTimer = function clickTimer(){
  click.style.visibility = 'visible'
  click.textContent = 'CLICK'
  click.style.background = '#B90E0A'
  click.style.border = '2px solid white'
  click.addEventListener('click', clicked);
  var DateStart = new Date();

  function clicked(){  
    var DateClicked = new Date();
    reactionTime = DateClicked.getTime() - DateStart.getTime();
    result.textContent = 'You Clicked in ' + reactionTime + 'MS';
    console.log(reactionTime + 'ms')
    retry.style.visibility = 'visible'
    click.removeEventListener('click', clicked)
  };

}

/* var addItem = function addItem(newItem) {
  // add the new item to the Set
  items.add(newItem);

  // if the Set exceeds a maximum size of 10, remove the highest value
  if (items.size > 10) {
    // convert the Set to an array and sort it in descending order
    var sorted = [...items].sort((a, b) => b - a);

    // remove the highest value
    items.delete(sorted[0]);  
  }
  return items
}

 */

var resetGame = function resetGame(){
    startClick()
    checked = false;
    result.innerText = ''
    click.style.visibility = 'hidden'
    start.style.backgroundColor = '#a3ebb1'
    start.innerText = ''
    retry.style.visibility = 'hidden'
    console.log("worked")
    /* items.add(reactionTime + 'ms')
    for (let item of items) {
      // addItem(item)
      // if (items.size === 10) break;s

      html += '<li>' + item + '</li>';
      list.innerHTML = html;
    } */
  }
  
  
retry.addEventListener('click', resetGame)


start.addEventListener('click', startClick)

