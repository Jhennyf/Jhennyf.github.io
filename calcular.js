var gasolina, etanol;

function melhor(){
    etanol=parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina = parseFloat(frdados.txgasolina.value.replace(",","."));
    if(etanol < 0.7*gasolina){
        document.getElementById("imagem").src="imagens/imagemcombustivel/combus2.png";
    }
    else{
        document.getElementById("imagem").src="imagens/imagemcombustivel/combus3.png";
    }
    function limpar(){
        document.getElementById("imagem").src="imagens/imagemcombustivel/combus1.png";
    }
}