const id = [];
const botao = document.querySelector('#botao');

gerarNumeroAleatorio = () => {
    id.length = 0;
    for(var i=0;i<3;i++){
        id.push(Math.floor(Math.random() * 671))
    }
    return id;
}
botao.onclick = escolherPersonagens;