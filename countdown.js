let timer
let timeleft
let isPaused = false;

function startTimer(){
    const minInp = document.getElementById('mininput')
    const min = parseInt(minInp.value)


    if(isNaN(min) || min <=0){
        alert("Please Enter Valid Number to Start")
        return;
    }

    if(timer){
        clearInterval(timer);
    }

    timeleft = min*60;
    updateTimerDisplay();
    timer =  setInterval(updateTime,1000)


    mininput.addEventListener('input', function() {
        clearInterval(timer);
        timeleft = 0;
        updateTimerDisplay();
      });


}


function updateTime(){
    if (timeleft === 0) {
        clearInterval(timer);
        alert('Countdown finished!');
      } else {
        timeleft--;
        updateTimerDisplay();
      }
}

function pauseTimer() {
    isPaused = !isPaused;
    if (isPaused) {
      clearInterval(timer);
    } else {
      timer = setInterval(updateTime, 1000);
    }
  }
  
  function endTimer() {
    clearInterval(timer);
    timeleft = 0;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const hours = Math.floor(timeleft / 3600);
    const min = Math.floor((timeleft % 3600) / 60);
    const secnds = timeleft % 60;
  
    const displayhours = hours < 10 ? `0${hours}` : hours;
    const displayminutes = min < 10 ? `0${min}` : min;
    const displayseconds = secnds < 10 ? `0${secnds}` : secnds;
  
    document.getElementById('timer').innerText = `${displayhours}:${displayminutes}:${displayseconds}`;
  }