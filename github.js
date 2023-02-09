var user = document.getElementsByClassName("user-text");
var pass = document.getElementsByClassName("pass");
var btn = document.getElementsByClassName("btn");

btn.addEventListener("click",redirect);

function redirect(){
    if(user == "user" && pass == 123456){
        alert("welcome user");
        localStorage.setItem("name",user.value);
        localStorage.setItem("pass",pass.value);
    } else {
        alert("no user found");
    }
}