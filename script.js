const text= document.querySelector('.text');
const start = document.querySelector('.start');
const time= document.querySelector('.time');
text.innerHTML = "<h3>Lets check your speed.Click the start button to start.</h3>";
let timer;
start.addEventListener('click',()=>{
    start.innerHTML="Start Again";  
    clearInterval(timer);  
    const index=Math.floor(Math.random()*7);
    text.innerHTML=data[index];
    console.log(index);

    //Timer
    Time(60);
    //Input from user ,comparison and counting of mistakes
     

})

function Time(sec){
      timer= setInterval(()=>{
        time.innerHTML="Time :"+sec;
        sec--;
        if(sec<0){
          clearInterval(timer);//clear Interval is used to stop the the recurring action that was previously started with setInterval() function
          time.classList.add('red');
          time.innerHTML="Times up!!!"
        }
        
     },1000)
    }
  
