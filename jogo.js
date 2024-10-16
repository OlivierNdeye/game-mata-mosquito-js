var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 20;
var criarVelocidadeMosquito = 1500;


//criar os niveis de dificuldade do jogo
var nivel = window.location.search;
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    tempo = 20;
    criarVelocidadeMosquito = 1500;
} else if (nivel === 'dificil') {
    tempo = 40;
    criarVelocidadeMosquito = 1000;
} else if(nivel === 'Kratos') {
    tempo = 60;
    criarVelocidadeMosquito = 550;
}

//função responsável por capturar  a altura e largura da tela
function ajustaTamPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    //console.log(altura, largura);
}

ajustaTamPalcoJogo()

function posicaoRandomica() {
    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }


var cronometro = setInterval(function(){
    tempo -= 1;

    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(maisMosquitos)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000)

function posicaoRandomica() {
    //remover o mosquito anterior(caso exista...)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        //console.log('v' + vidas)
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src="img/coracao_vazio.png";
    
            vidas++
        }
    }
    
    
    //gerar a posição do objeto randomicamente, baseado na altura e largura da pagina
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;
    
    //calculo para  evitar que o objeto saia da tela
    posicaoX = posicaoX  < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    
    
    //console.log(posicaoX, posicaoY);
    

    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    function criarMosquito() {
        var mosquito = document.createElement('img');
        mosquito.src = 'img/mosquito.png';
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
        mosquito.style.left = posicaoX + 'px';
        mosquito.style.top = posicaoY + 'px';
        mosquito.style.position = 'absolute';
        mosquito.id = 'mosquito';
        mosquito.onclick = function() {
            this.remove()
            somTapa()
        }

        function somMosquito() {
            var somMosquito = document.getElementById('somMosquito');
            somMosquito.play();
        }

        function somTapa() {
            var tapa = document.getElementById('somTapa');
            tapa.play()
        }

        somMosquito();
        
        document.body.appendChild(mosquito);

    }
    
    criarMosquito()

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

//criar mais mosquitos baseado no valor presente na variável
var maisMosquitos = setInterval(function() { 
        posicaoRandomica();
    }, criarVelocidadeMosquito);
}