
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {//Criei essa função e coloquei a logica dentro.
    //Esta é a logica inserida na função
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)//Para ver n console se estao recuperando
}

ajustaTamanhoPalcoJogo()

var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

console.log(posicaoX, posicaoY)




