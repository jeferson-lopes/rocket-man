setInterval(function () {
    var bolaRoxa = document.querySelector(".bolaRoxa");
    bolaRoxa.classList.add("aumentaBola1")
    setTimeout(function () {
        bolaRoxa.classList.remove("aumentaBola1")
    }, 1000)
}, 1100)
