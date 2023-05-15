//--------------------------------------------------------------
var altura = 0
var largura = 0
var vidas = 1
//--------------------------------------------------------------
function ajustaTamanhoPalcoJogo() {
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)
}
//--------------------------------------------------------------
ajustaTamanhoPalcoJogo()
//--------------------------------------------------------------
function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

        vidas++
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criação do html programatico
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)


}
//------------------------------------------------------------
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
//-----------------------------------------------------------
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}
//-----------------------------------------------------------





