var textColor = document.getElementById("texte");
var vert = document.getElementsByClassName("green")[0];
var rouge = document.getElementsByClassName("red")[0];
var bleu = document.getElementsByClassName("blue")[0];



vert.addEventListener("click", function(){
    textColor.style.color = "green";
})

rouge.addEventListener("click", function(){
    textColor.style.color = "red";
})

bleu.addEventListener("click", function(){
    textColor.style.color = "blue";
})
