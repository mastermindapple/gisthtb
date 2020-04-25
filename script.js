var dad = new Date();
var date = dad.getDate();
var month = dad.getMonth();
var year = dad.getFullYear();
var day = dad.getDay();
var wholeArr = [date,day,month,year];
var singleUnit = wholeArr.join();

// Seperator

var seconds = 0;
var minutes = 0;
var time = [];
var rounds = 0;
var timeHist = [];
var currSec = 0;
var currMin = 0;
var currTime = [];
var timeline = [];
var minTimeline = [];
var secTimeline = [];
var user =  window.localStorage.getItem("step_fit_user_name_2277");
var end = document.getElementById("end");
var rand = Math.random().toString().split(".");
var resId = rand[1];
var least;
var index;
var database = firebase.database();

if(!user){
    alert("Please Go To the Login/Signup Page to Proceed");
    location.replace("login.html")
}
else{
    var timeJoined ;
function clock(){

    seconds++;
    currSec++;
    if(currSec === 60){
        currSec = 0;
        currMin++;
    }
  if(seconds === 60){
      seconds = 0;
      minutes++;
  }

   time = [minutes,seconds];
   currTime = [currMin,currSec];
  
}
       setInterval(clock, 1000);


    function increment(){
        timeJoined = currTime.join(",");
        console.log(currTime);
        rounds++;
        timeHist.push(time);
        console.log("Rounds: "+rounds);
        timeline.push(timeJoined);
        secTimeline.push(currSec);
        minTimeline.push(currMin);
        currSec = 0;
        currMin = 0;
        console.log(singleUnit);
        console.log(timeJoined);
    }
    function display(){
        document.getElementById("currTime").innerHTML =
         (currMin+" Minutes"+"  "+currSec+" Seconds");

         document.getElementById("rounds").innerHTML =
         (rounds);

        if(timeline.length > 10){
            var tenth = timeline.length-10;
            var ninth = timeline.length-9;
            var eighth = timeline.length-8;
            var seventh = timeline.length-7;
            var sixth = timeline.length-6;
            var fifth = timeline.length-5;
            var fourth = timeline.length-4;
            var third = timeline.length-3;
            var second = timeline.length-2;
            var first = timeline.length-1;
            
            document.getElementById("history").innerHTML = ("The Timing of the previous ten Rounds are:"+
            "<br><br>"+"Previous Round:  "+minTimeline[first]+" Minutes  "+secTimeline[first]+" Seconds"+
            "<br>"+minTimeline[second]+" Minutes  "+secTimeline[second]+" Seconds" +"<br>"+
            minTimeline[third]+" Minutes  "+secTimeline[third]+" Seconds"+"<br>"+
            minTimeline[fourth]+" Minutes  "+secTimeline[fourth]+" Seconds"+"<br>"+
            minTimeline[fifth]+" Minutes  "+secTimeline[fifth]+" Seconds"+"<br>"+
            minTimeline[sixth]+" Minutes  "+secTimeline[seventh]+" Seconds"+"<br>"+
            minTimeline[seventh]+" Minutes  "+secTimeline[seventh]+" Seconds"+"<br>"+
            minTimeline[eighth]+" Minutes  "+secTimeline[eighth]+" Seconds"+"<br>"+
            minTimeline[ninth]+" Minutes  "+secTimeline[ninth]+" Seconds"+"<br>"+
            minTimeline[tenth]+" Minutes  "+secTimeline[tenth]+" Seconds"+"<br>"
            
            );
            
        }
        document.getElementById("total").innerHTML = (minutes+" Minutes   "+
        seconds+" Seconds");
        
    }
    setInterval(display,10);
}
    end.addEventListener("click",(e) => {
    e.preventDefault();
    rounds++;
    timeHist.push(time);
    console.log("Rounds: "+rounds);
    timeline.push(timeJoined);
    secTimeline.push(currSec);
    minTimeline.push(currMin);
    currSec = null;
    currMin = null;
    async function write(){
    database.ref("/Users/"+user+"/Workouts/"+singleUnit+"/"+resId).set({
       total_time: time,
       sec_timeline: secTimeline,
       min_timeline: minTimeline
    });

    database.ref("/Users/"+user+"/workout_details").update({
        last_workout: resId,
        last_workout_date: singleUnit
     });
     
}
    write();
    
    function replace(){

        location.replace("result.html");
    }
    setTimeout(replace, 3000);
  
});
    