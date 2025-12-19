document.querySelectorAll('.cat_card').forEach(cat => {
	cat.addEventListener('click', () => {
		const filter = cat.dataset.filter

		document.querySelectorAll('.cat_card').forEach(c => c.classList.remove('active'))
		cat.classList.add('active')

		document.querySelectorAll('.card_post').forEach(post => {
			const cats = post.dataset.category || ''

			if (filter === 'all' || cats.includes(filter)) {
				post.style.display = 'flex'
			} else {
				post.style.display = 'none'
			}
		})
	})
})

document.querySelectorAll('.categorias button').forEach(btn => {
	btn.addEventListener('click', () => {
		const filtro = btn.dataset.filter
		const posts = document.querySelectorAll('.card_post')

		posts.forEach(post => {
			const categorias = post.dataset.category || ''

			if (filtro === 'all' || categorias.includes(filtro)) {
				post.style.display = 'flex'
			} else {
				post.style.display = 'none'
			}
		})
	})
})

document.addEventListener("DOMContentLoaded", () => {
	const posts = document.querySelectorAll(".card_post");
	const buttons = document.querySelectorAll(".categorias button");

	const counts = {};

	posts.forEach(post => {
		const categories = post.dataset.category.split(" ");
		categories.forEach(cat => {
			counts[cat] = (counts[cat] || 0) + 1;
		});
	});

	buttons.forEach(btn => {
		const filter = btn.dataset.filter;
		const span = btn.querySelector("span");

		if (!span) return;

		if (filter === "all") {
			span.textContent = `(${posts.length})`;
		} else {
			span.textContent = `(${counts[filter] || 0})`;
		}
	});
});

