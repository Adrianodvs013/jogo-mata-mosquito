
var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {//Criei essa função e coloquei a logica dentro.
    //Esta é a logica inserida na função
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)//Para ver n console se estao recuperando
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {//Essa função encapsulou todo este bloco

    //Remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {

            alert('interromper o jogo (game over)')
        } else {
            document.getElementById('v' + vidas).src = "imagens/coração_vaio.png"
            vidas++
        }
    }

    document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//Aqui criamos o elemento html de forma programatica
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}


function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}


