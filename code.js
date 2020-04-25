var para = document.getElementById("countdown-container");
function onload(){
     function five(){
         para.innerHTML = ("5");
     }
     function four(){
         para.innerHTML = ("4");
     }
     function three(){
         para.innerHTML = ("3");
     }
     function two(){
         para.innerHTML = ("2");
     }
     function one(){
         para.innerHTML = ("1");
     }
     function start(){
         para.innerHTML = ("Workout Starting Now");
     }
     function change(){
         location.replace("workout.html");
     }
     setTimeout(five, 0000);
     setTimeout(four, 1000);
     setTimeout(three, 2000);
     setTimeout(two, 3000);
     setTimeout(one, 4000);
     setTimeout(start, 5000);
     setTimeout(change, 6000);

}