var database = firebase.database();
var signUp = document.getElementById("sign-up-btn");
signUp.addEventListener('click',(e) => {
    e.preventDefault();
    var userId = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("password-confirm").value;
    
    if(!userId || !password || !passwordConfirm){
        alert("Please fill in all the fields")
    }
    else{
        var regex = /\W/g;
        var result = userId.match(regex);
    if(result){
        alert("Your Username cannot contain special characters");
    }
    if(!result){
   if(password === passwordConfirm){
    window.localStorage.setItem("step_fit_user_name_2277",userId);
    database.ref("/Users/"+userId).set({
        password: password,
        min_sec: 0,
        min_min: 60,
        workout_history_minutes: 0,
        workout_history_seconds: 0,
        total_workout_time: 0,
        personal_best_minutes: 0,
        personal_best_seconds: 0,
        personal_best_rounds: 0,
        total_rounds: 0,
        total_workouts: 0
    });
    document.getElementById("textbox").innerHTML = ("Please Wait While We Redirect You");

    function redirect(){
        location.replace("home.html");
    }
    setTimeout(redirect, 3000);
}
else{
        alert("Your Passwords Do not Match");
}
    }
}
});







