self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("servisku-cache").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

const filter = document.getElementById('filterLayanan');
const cards = document.querySelectorAll('.card');

filter.addEventListener('change', () => {
  const value = filter.value;
  cards.forEach(card => {
    if (value === 'all' || card.textContent.toLowerCase().includes(value)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 200) backTop.style.display = 'block';
  else backTop.style.display = 'none';
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const form = document.getElementById('formBooking');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("Booking berhasil! Terima kasih telah menggunakan JASAKU.");
  form.reset();
});

