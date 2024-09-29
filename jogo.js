var altura = 0;
var largura = 0;

//função responsável por capturar  a altura e largura da tela
function ajustaTamPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamPalcoJogo()

function posicaoRandomica() {
    //gerar a posição do objeto randomicamente, baseado na altura e largura da pagina
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;
    
    //calculo para  evitar que o objeto saia da tela
    posicaoX = posicaoX  < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    
    console.log(posicaoX, posicaoY);
    
    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';

    document.body.appendChild(mosquito);
    //console.log(tamanhoAleatorio());
    console.log(ladoAleatorio());   

}

function tamanhoAleatorio() {
    //variavel que vai receber o tamanho aleatorio
    var classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0:
            return 'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    //variavel que vai fazer o mosquito olhar para direita e para esquerda

    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';
    }
}


