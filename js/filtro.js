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

