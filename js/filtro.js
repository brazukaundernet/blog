const catCards = document.querySelectorAll('.cat_card');
const posts = document.querySelectorAll('.card_post');
const buttons = document.querySelectorAll('.categorias button');

function aplicarFiltro(filtro) {
  posts.forEach(post => {
    const categorias = post.dataset.category || '';
    post.style.display = (filtro === 'all' || categorias.includes(filtro)) ? 'flex' : 'none';
  });
}

catCards.forEach(cat => {
  cat.addEventListener('click', () => {
    const filtro = cat.dataset.filter;
    catCards.forEach(c => c.classList.remove('active'));
    cat.classList.add('active');

    aplicarFiltro(filtro);
  });
});
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filtro = btn.dataset.filter;
    aplicarFiltro(filtro);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const counts = {};

  posts.forEach(post => {
    const categories = (post.dataset.category || '').split(" ");
    categories.forEach(cat => {
      counts[cat] = (counts[cat] || 0) + 1;
    });
  });

  buttons.forEach(btn => {
    const filtro = btn.dataset.filter;
    const span = btn.querySelector("span");
    if (!span) return;

    if (filtro === "all") {
      span.textContent = `(${posts.length})`;
    } else {
      span.textContent = `(${counts[filtro] || 0})`;
    }
  });
});

