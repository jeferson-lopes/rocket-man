
var bolas = document.querySelector("#bolas")
setInterval(function () {
    bolas.style.top = '535px';
}, 100)

setInterval(function () {
    bolas.style.top = '545px';
}, 120)

var aCores = ['#8e44ad', '#2980b9', '#27ae60', '#f1c40f', '#e74c3c']
setInterval(function () {
var randomColor1 = Math.floor(Math.random() * 6); 
var randomColor2 = Math.floor(Math.random() * 6); 
var randomColor3 = Math.floor(Math.random() * 6); 
var randomColor4 = Math.floor(Math.random() * 6); 
var randomColor5 = Math.floor(Math.random() * 6); 

var bolaRoxa = document.querySelector(".bolaRoxa")
bolaRoxa.style.backgroundColor = aCores[randomColor1];
var fumacaRoxa = document.querySelector(".fumacaRoxa")
fumacaRoxa.style.backgroundColor = aCores[randomColor1];

var bolaAzul = document.querySelector(".bolaAzul")
bolaAzul.style.backgroundColor = aCores[randomColor2];
var fumacaAzul = document.querySelector(".fumacaAzul")
fumacaAzul.style.backgroundColor = aCores[randomColor2];

var bolaVerde = document.querySelector(".bolaVerde")
bolaVerde.style.backgroundColor = aCores[randomColor3];
var fumacaVerde = document.querySelector(".fumacaVerde")
fumacaVerde.style.backgroundColor = aCores[randomColor3];

var bolaAmerela = document.querySelector(".bolaAmerela")
bolaAmerela.style.backgroundColor = aCores[randomColor4];
var fumacaAmarela = document.querySelector(".fumacaAmarela")
fumacaAmarela.style.backgroundColor = aCores[randomColor4];

var bolaVermelha = document.querySelector(".bolaVermelha")
bolaVermelha.style.backgroundColor = aCores[randomColor5];
var fumacaVermelha = document.querySelector(".fumacaVermelha")
fumacaVermelha.style.backgroundColor = aCores[randomColor5];


}, 100)

