const postagens = document.querySelectorAll('.post_content');
function abrirPost(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", () => {
    window.open(url, "_blank");
  });
}

//Posts
abrirPost("ultimopost", "posts/spotify_no_ad.html");
abrirPost("blockad", "posts/bloqueador_anuncios.html");

