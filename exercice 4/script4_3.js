var initial = document.getElementById("motdepasse");
var confirm = document.getElementById("confirmation");
var btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function(){
    if (initial.value != confirm.value){
        initial.style.borderColor = "red";
        confirm.style.borderColor = "red";}
    else {
        initial.style.borderColor = "green";
        confirm.style.borderColor = "green";
    }
     
})