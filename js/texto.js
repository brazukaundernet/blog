document.querySelectorAll('.copy_btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const pre = btn.previousElementSibling;
    if (!pre) return;

    const text = pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.innerText = 'copiado';
      btn.classList.add('copied');

      setTimeout(() => {
        btn.innerText = 'copiar';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
});


const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}<>?/";

document.querySelectorAll(".glitch").forEach(el => {
  const original = el.dataset.text;
  let running = false;

  el.addEventListener("mouseenter", () => {
    if (running) return;
    running = true;

    let iterations = 0;
    function animate() {
      el.innerText = original
        .split("")
        .map((char, index) => index < iterations ? original[index] : chars[Math.floor(Math.random() * chars.length)])
        .join("");

      iterations += 0.3;
      if (iterations < original.length) {
        requestAnimationFrame(animate);
      } else {
        el.innerText = original;
        running = false;
      }
    }
    animate();
  });

  el.addEventListener("mouseleave", () => {
    el.innerText = original;
    running = false;
  });
});


const authorBox = document.querySelector('.author-box');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      authorBox.classList.toggle('show', scrollBottom);
      ticking = false;
    });
    ticking = true;
  }
});

