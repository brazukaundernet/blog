const postagens = document.querySelectorAll('post_content');

const atual = document.getElementById('ultimopost');
atual.addEventListener("click", () =>{
	window.open("posts/spotify_no_ad.html");
});

document.getElementById('blockad').addEventListener("click", () =>{
	window.open("posts/bloqueador_anuncios.html");
});
