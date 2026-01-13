let startStop=document.querySelector("#startStop");
let resetBtn=document.querySelector("#reset");
let sec=0,min=0,hr=0;
let timer;

function start(){
   if(!timer){
      timer=setInterval(Update,1000);
   }
}
function stop() {
    clearInterval(timer);
    timer = null;
}

function Update(){
   sec++;
   if(sec>=60){sec=0;min++}
   if(min>=60){min=0;hr++}

   let h=(hr<10)?"0"+hr:hr;
   let m=(min<10)?"0"+min:min;
   let s=(sec<10)?"0"+sec:sec;
   document.querySelector("#time").innerHTML=h+":"+m+":"+s;
}

function reset() {
    stop();
    sec = 0; min = 0; hr = 0;
    document.querySelector('#time').innerHTML = "00:00:00";
}

let curr="Start";
startStop.addEventListener("click",()=>{
   if(curr==="Start"){
      curr="Stop";
      startStop.innerText=curr;
      start();
   }
   else{
      curr="Start";
      startStop.innerText=curr;
      stop();
   }
})
resetBtn.addEventListener("click",reset)