var textHiden = document.getElementById("texte");
var afficher = document.getElementsByTagName("a")[0];
var masquer = document.getElementsByTagName("a")[1];


afficher.addEventListener("click", function(){

    textHiden.style.visibility = "visible";
})
masquer.addEventListener("click", function(){
    textHiden.style.visibility = "hidden";
})