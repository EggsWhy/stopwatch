const minutesElement = document.getElementById('watch-minutes');
const secondsElement = document.getElementById('watch-seconds');
const millisecondsElement = document.getElementById('watch-milliseconds');
const startstopBtn = document.getElementById('start-stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;


function updateWatch(){

    minutesElement.textContent = minutes.toString().padStart(2, 0);
    secondsElement.textContent = seconds.toString().padStart(2, 0);
    millisecondsElement.textContent = milliseconds.toString().padStart(3, 0);
}

function toggleStartStopBtn(){

    if (!(isRunning)){

        isRunning = true; 
 
        startstopBtn.textContent = 'Stop';

        timer = setInterval(
            
            () => {

            milliseconds += 10;
 
            if (milliseconds>=999){
                milliseconds = 0 ;
                seconds++;
            }

            if (seconds>=59){
                seconds = 0;
                minutes++;
            }

            updateWatch();  

        },10
    ) 

    }

    else if (isRunning){

        isRunning = false;
        
        startstopBtn.textContent = 'Start';

        clearInterval(timer)
        
    }
}

function resetWatch(){

    minutes = 0;
    seconds = 0;
    milliseconds =0;

    updateWatch();
}