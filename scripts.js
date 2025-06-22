const livros = [
  {
    titulo: "Braga e os Caminhos de Ferro - 150 Anos do Ramal de Braga",
    preco: 19,
    imagem: "images/BragaCaminhosFerro3.png",
    linkPagamento: "https://pagamento.mbway.exemplo/BragaCaminhosFerro",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
  },
  {
    titulo: "Os Eletricos em Braga",
    preco: 18,
    imagem: "images/EletricosBraga.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/EletricosBraga",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
  },
  {
    titulo: "Os Cafés Emblemáticos de Braga",
    preco: 18,
    imagem: "images/CafesEmblemáticos.webp",
    linkPagamento: "https://pagamento.mbway.exemplo/CafesEmblemáticos",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
  },
  {
    titulo: "Correio do Minho - 30 Anos a Colaborar",
    preco: 19,
    imagem: "images/CorreioMinho30.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/CorreioMinho30Anos",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
},
  {
    titulo: "100 Anos da República",
    preco: 18,
    imagem: "images/100AnosRepublica.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/100AnosRepublica",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
},
  {
    titulo: "Antologia dos Bracarenses Ilustres",
    preco: 18,
    imagem: "images/AntologiaBracarensesIlustres.webp",
    linkPagamento: "https://pagamento.mbway.exemplo/AntologiaBracarensesIlustres",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
},
  {
    titulo: "Victor Sá em Livro Aberto",
    preco: 18,
    imagem: "images/VictorSá2.webp",
    linkPagamento: "https://pagamento.mbway.exemplo/VictorSa",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
  },
  {
    titulo: "Pinheiro Torres Ilustres",
    preco: 18,
    imagem: "images/PinheiroTorres.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/PinheiroTorresIlustres",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2023<br>Autor: José Silva<br>Páginas: 200"
  }
];

const container = document.getElementById('livros-container');

livros.forEach((livro, idx) => {
  const card = document.createElement('div');
  card.className = 'livro';
  card.style.animationDelay = (idx * 0.12) + "s"; // <-- esta linha faz o efeito em cascata
  card.innerHTML = `
    <img src="${livro.imagem}" alt="${livro.titulo}" style="cursor:pointer" data-idx="${idx}">
    <h2>${livro.titulo}</h2>
    <p class="preco-livro">€${livro.preco}</p>
    <button onclick="window.location.href='${livro.linkPagamento}'">Comprar</button>
  `;
  container.appendChild(card);
});

// Evento para abrir página de detalhes ao clicar na imagem
container.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG' && e.target.dataset.idx) {
    localStorage.setItem('livroSelecionado', e.target.dataset.idx);
    window.location.href = 'livro.html';
  }
});


window.onscroll = function() {
  document.getElementById("topBtn").style.display = (window.scrollY > 300) ? "block" : "none";
};
document.getElementById("topBtn").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

const pesquisaInput = document.getElementById('pesquisaInput');
pesquisaInput.addEventListener('input', function() {
  const termo = this.value.toLowerCase();
  document.querySelectorAll('.livro').forEach(card => {
    const titulo = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = titulo.includes(termo) ? '' : 'none';
  });
});


