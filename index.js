
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {//Criei essa função e coloquei a logica dentro.
    //Esta é a logica inserida na função
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)//Para ver n console se estao recuperando
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {//Essa função encapsuloutodo este bloco
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())
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



