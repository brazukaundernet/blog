document.querySelectorAll('.copy_btn').forEach(btn => {
btn.addEventListener('click', () => {
	const pre = btn.previousElementSibling
	const text = pre.innerText

	navigator.clipboard.writeText(text).then(() => {
		btn.innerText = 'copiado'
		btn.classList.add('copied')

		setTimeout(() => {
			btn.innerText = 'copiar'
			btn.classList.remove('copied')
		}, 2000)
	})
})
})

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}<>?/";

document.querySelectorAll(".glitch").forEach(el => {
  const original = el.dataset.text;
  let interval = null;
  let running = false;

  el.addEventListener("mouseenter", () => {
    if (running) return;
    running = true;

    let iterations = 0;

    interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map((char, index) => {
          if (index < iterations) return original[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iterations >= original.length) {
        clearInterval(interval);
        running = false;
        el.innerText = original;
      }

      iterations += 1 / 3;
    }, 20);
  });

  el.addEventListener("mouseleave", () => {
    clearInterval(interval);
    running = false;
    el.innerText = original;
  });
});

