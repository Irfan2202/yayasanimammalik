/* Navbar scroll */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  navbar.setAttribute("data-bs-theme", window.scrollY > 50 ? "light" : "dark");
});

/* UNIVERSAL TOGGLE (Tentang + Misi) */
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetClass = this.dataset.target;
    const targets = document.querySelectorAll("." + targetClass);
    const isHidden = targets[0].classList.contains("d-none");

    targets.forEach((el) => el.classList.toggle("d-none"));
    this.textContent = isHidden ? "Tutup" : "Lihat selengkapnya";
  });
});
