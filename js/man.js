var homem = document.querySelector("#homem")
var bolas = document.querySelector("#bolas")

setInterval(function(){
    homem.style.top = '255px';
    bolas.style.top = '535px';
}, 100)

setInterval(function(){
    homem.style.top = '250px';
    bolas.style.top = '545px';
}, 120)