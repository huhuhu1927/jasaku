document.getElementById("formBooking").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let hp = document.getElementById("hp").value;
  let alamat = document.getElementById("alamat").value;
  let layanan = document.getElementById("layanan").value;
  let tanggal = document.getElementById("tanggal").value;

  document.getElementById("formBooking").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let hp = document.getElementById("hp").value;
  let alamat = document.getElementById("alamat").value;
  let layanan = document.getElementById("layanan").value;
  let tanggal = document.getElementById("tanggal").value;

  let pesan = `Halo Admin ServisKu,%0A
Saya ingin booking layanan:%0A
====================%0A
Nama: ${nama}%0A
No HP: ${hp}%0A
Alamat: ${alamat}%0A
Layanan: ${layanan}%0A
Tanggal: ${tanggal}%0A
====================%0A
Mohon konfirmasi ya 🙏`;

  let nomor = "6285215300670";

  let url = `https://wa.me/${nomor}?text=${pesan}`;
  window.open(url, "_blank");
});
});

const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const posisi = el.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;

    if (posisi < tinggiLayar - 50) {
      el.classList.add('show');
    }
  });
});

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
});

let nomor = "6285215300670"; // nomor kamu

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker aktif"))
    .catch(err => console.log("SW gagal", err));
}