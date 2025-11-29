let timerEl = document.getElementById("timer");
let defuseEl = document.getElementById("defuser");
let countdown = 10;

let intervalid = setInterval(function(){
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if(countdown === 0){
        timerEl.textContent = "BOOM!!";
        clearInterval(intervalid);
    }
},1000);

defuseEl.addEventListener("keydown",function(event){
    let boomdefuseEl = defuseEl.value;
    if(event.key === "Enter" && boomdefuseEl === "defuse" && countdown !== 0){
        timerEl.textContent = "You did it!";
        clearInterval(intervalid);
    }

})