// ===== Welcome modal: instant open =====
(function () {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeModal");
  const orderBtn = document.getElementById("orderNowBtn");
  if (!modal) return;

  document.body.style.overflow = "hidden";

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  orderBtn.addEventListener("click", function () {
    closeModal();
    const target = document.getElementById("course");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
})();

// ===== Smooth scroll for hash links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(
  ".reason, .course-card, .way, .shop, .voice, .menu-block",
);
revealEls.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
);
revealEls.forEach((el) => io.observe(el));

// ===== Form: handle submit =====
const form = document.querySelector(".reserve-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "お問い合わせを承りました。\n二営業日以内にご返信いたします。\n\n— Naoki Pizza",
    );
    form.reset();
  });
}

// ===== Header shadow on scroll =====
const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 1px 0 rgba(243, 237, 225, 0.06)";
    } else {
      header.style.boxShadow = "none";
    }
  });
}
