const id = [];
const botao = document.querySelector('#botao');

gerarNumeroAleatorio = () => {
    id.length = 0;
    for(var i=0;i<3;i++){
        id.push(Math.floor(Math.random() * 671))
    }
    return id;
}
traduzirStatus = (data) => {
    if(data.status == 'Unknown'){
        return 'Desconhecido';
    } else if (data.status == 'Alive'){
        return 'Vivo';
    } else {
        return 'Morto';
    }
}
escolherPersonagens = () => {
    let numerosAle = gerarNumeroAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numerosAle}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        for(let i=0;i<3;i++){
            let tabelaPos = tabela.rows[0].cells;
            tabelaPos[i].innerHTML = 'Nome: '+data[i].name;;
        }
        img1.src = data[0].image;
        img1.alt = data[0].name;
        img2.src = data[1].image;
        img2.alt = data[1].name;
        img3.src = data[2].image;
        img3.alt = data[2].name;
        
        for(let i=0;i<3;i++){
            tabelaPos= tabela.rows[2].cells;
            tabelaPos[i].innerHTML = 'Espécie: '+data[i].species;
        }
        for(let i=0;i<3;i++){
            tabelaPos= tabela.rows[3].cells;
            let estado = traduzirStatus(data[i]);
            tabelaPos[i].innerHTML = 'Condição: '+ estado;
        }
    });
}
botao.onclick = escolherPersonagens;