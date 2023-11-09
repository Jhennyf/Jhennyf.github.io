// Criação do objeto Televisão
var Televisao = {
    ligada: false,
    volume: 0,
    canal: 1,
    maxCanal: 32,
    minVolume: 0,
    maxVolume: 20,

    ligarDesligar: function () {
        this.ligada = !this.ligada;
        var janela = document.querySelector('.janela-de-apagao');
        if (this.ligada) {
            janela.style.opacity = '0';
        } else {
            janela.style.opacity = '0.5';
        }
    },

    apagarMensagem: function(){
        var janela = document.querySelector('.janela-de-volumeP');
        setTimeout(function () {
            janela.className = 'janela-de-volumeP oculto';
        }, 5000);
    },

    aumentarVolume: function () {
        if (this.ligada == true) {
            if (this.volume < this.maxVolume) {
                this.volume++;
                var janela = document.querySelector('.janela-de-volumeP');
                janela.querySelector('p').textContent = 'volume: ' + this.volume;
                janela.className = 'janela-de-volumeP visivel';
                this.apagarMensagem()
            } else {
                var janela = document.querySelector('.janela-de-volumeP');
                janela.querySelector('p').textContent = 'volume ta no  ' + this.volume;
                this.apagarMensagem();
            }
        } else {
            var janela = document.querySelector('.janela-de-volumeP');
            janela.querySelector('p').textContent = 'Televisao esta desligada';
            this.apagarMensagem();
        }
    },

    diminuirVolume: function () {
        if (this.ligada == true) {
            if (this.volume > this.minVolume) {
                this.volume--;
                var janela = document.querySelector('.janela-de-volumeP');
                janela.querySelector('p').textContent = 'volume: ' + this.volume;
                janela.className = 'janela-de-volumeP visivel';
                this.apagarMensagem();
            } else {
                var janela = document.querySelector('.janela-de-volumeP');
                janela.querySelector('p').textContent = 'volume ta no minimo ' + this.volume;
                this.apagarMensagem();
            }
        } else {
            var janela = document.querySelector('.janela-de-volumeP');
            janela.querySelector('p').textContent = 'Televisao esta desligada';
            this.apagarMensagem();

        }
    }

};




// Funções do controle remoto
function ligarDesligarTV() {
    Televisao.ligarDesligar();
}

function mudarCanalTV(canal) {
    Televisao.mudarCanal(canal);
}



// Adicionando eventos aos botões do controle remoto
window.onload = function () {
    document.querySelector('.ligar').addEventListener('click', ligarDesligarTV);
    document.querySelector('.desligar').addEventListener('click', ligarDesligarTV);
    var botoesNumero = document.querySelectorAll('.botao-numero li');
    for (var i = 0; i < botoesNumero.length; i++) {
        botoesNumero[i].addEventListener('click', function () {
            mudarCanalTV(parseInt(this.innerText));
        });
    }
    document.querySelector('.controle-de-volume-e-canal li:nth-child(1)').addEventListener('click', function () {
        Televisao.aumentarVolume();
    });
    document.querySelector('.controle-de-volume-e-canal li:nth-child(2)').addEventListener('click', function () {
        Televisao.diminuirVolume();
    });
}
