// Copia o array 'livros' igual ao scripts.js ou importa se usares módulos
const livros = [
  {
    titulo: "Braga e os Caminhos de Ferro - 150 Anos do Ramal de Braga",
    preco: 19,
    imagem: "images/BragaCaminhosFerro3.png",
    linkPagamento: "https://pagamento.mbway.exemplo/BragaCaminhosFerro",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2025<br>Autor: Joaquim da Silva Gomes<br>Páginas: 203"
  },
  {
    titulo: "Os Elétricos em Braga [1914-1963]",
    preco: 18,
    imagem: "images/EletricosBraga.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/EletricosBraga",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2014<br>Autor: Joaquim da Silva Gomes<br>Páginas: 136"
  },
  {
    titulo: "Os Cafés Emblemáticos de Braga",
    preco: 18,
    imagem: "images/CafesEmblemáticos.webp",
    linkPagamento: "https://pagamento.mbway.exemplo/CafesEmblemáticos",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2016<br>Autor: Joaquim da Silva Gomes<br>Páginas: 159"
  },
  {
    titulo: "Correio do Minho - 30 Anos a Colaborar",
    preco: 19,
    imagem: "images/CorreioMinho30.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/CorreioMinho30Anos",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2019<br>Autor: Joaquim da Silva Gomes<br>Páginas: 372"
},
  {
    titulo: "100 Anos da República",
    preco: 18,
    imagem: "images/100AnosRepublica.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/100AnosRepublica",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2010<br>Autor: Joaquim da Silva Gomes<br>Páginas: 223"
},
  {
    titulo: "Antologia dos Bracarenses Ilustres",
    preco: 18,
    imagem: "images/AntologiaBracarensesIlustres.webp",
    linkPagamento: "https://pagamento.mbway.exemplo/AntologiaBracarensesIlustres",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2004<br>Autor: Joaquim da Silva Gomes<br>Páginas: 226"
},
  {
    titulo: "Victor Sá em Livro Aberto",
    preco: 18,
    imagem: "images/VictorSá2.webp",
    linkPagamento: "https://pagamento.mbway.exemplo/VictorSa",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2014<br>Autor: Joaquim da Silva Gomes<br>Páginas: 196"
},
  {
    titulo: "Pinheiro Torres Ilustres",
    preco: 18,
    imagem: "images/PinheiroTorres.jpg",
    linkPagamento: "https://pagamento.mbway.exemplo/PinheiroTorresIlustres",
    resumo: "Uma viagem pela história dos caminhos de ferro em Braga.",
    detalhes: "Ano: 2006<br>Autor: Joaquim da Silva Gomes<br>Páginas: 146"
  }
];

const idx = localStorage.getItem('livroSelecionado');
const livro = livros[idx];

const container = document.getElementById('livro-detalhes');

if (livro) {
  container.innerHTML = `
    <div class="livro-detalhe">
      <img src="${livro.imagem}" alt="${livro.titulo}">
      <h2>${livro.titulo}</h2>
      <p><strong>Resumo:</strong> ${livro.resumo}</p>
      <p><strong>Detalhes:</strong><br>${livro.detalhes}</p>
      <p><strong>Preço:</strong> €${livro.preco}</p>
      <button onclick="window.location.href='${livro.linkPagamento}'">Comprar</button>
      <br><br>
      <a href="index.html" style="color: var(--coffee);">← Voltar à loja</a>
    </div>
  `;
  container.classList.add('fade-in-up'); // <-- Adiciona esta linha
} else {
  container.innerHTML = "<p>Livro não encontrado.</p>";
  container.classList.add('fade-in-up'); // Também para o caso de erro
}

const relacionados = livros.filter(l => l.titulo !== livro.titulo).slice(0, 3);
if (relacionados.length > 0) {
  container.innerHTML += `
    <div class="relacionados">
      <h3>Livros Relacionados</h3>
      <div class="relacionados-list">
        ${relacionados.map(l => `
          <div class="relacionado-card" onclick="verLivro('${l.titulo}')">
            <img src="${l.imagem}" alt="${l.titulo}">
            <p>${l.titulo}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
window.verLivro = function(titulo) {
  const idx = livros.findIndex(l => l.titulo === titulo);
  localStorage.setItem('livroSelecionado', idx);
  window.location.reload();
};


