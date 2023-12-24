const header = document.querySelector('header');
document.querySelector('.buttons-container').onclick = () => header.dataset.ativo = +!~~header.dataset.ativo;

const parent = document.querySelector ('.produtos')

function criarProduto(info){

    const produto = document.createElement('div');
    produto.classList.add('produto');

    const imageAnchor = document.createElement('a');
    imageAnchor.href = info.link;

    const image = document.createElement('img');
    image.src = info.img;
    image.alt = `Foto de ${info.nome}`;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('informacoes');

    const nome = document.createElement('h3');
    nome.innerText = info.nome;

    const preco = document.createElement('p');
    preco.innerText = `R$ ${info.preco}`;

    const descricao = document.createElement('p');
    descricao.innerText = info.descricao;

    imageAnchor.appendChild(image);

    infoDiv.appendChild(nome);
    infoDiv.appendChild(preco);

    produto.appendChild(imageAnchor);
    produto.appendChild(infoDiv);
    produto.appendChild(descricao);

    produto.onclick = () => location.href = info.link;
    return produto;
}

produtos.forEach(info => {
    const produto = criarProduto(info);
    parent.appendChild(produto);
});