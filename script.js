// ===== Welcome Modal (opens instantly on page load) =====
(function() {
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.getElementById('closeModal');
    const orderBtn = document.getElementById('orderNowBtn');

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Prevent background scroll while modal is open
    document.body.style.overflow = 'hidden';

    closeBtn.addEventListener('click', closeModal);

    orderBtn.addEventListener('click', function() {
        closeModal();
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Close on overlay click (but not on content click)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
})();

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Scroll reveal animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.headline-card, .menu-item, .delivery-card, .location-card, .testimonial, .value-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ===== Contact form submission =====
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('お問い合わせありがとうございます。\n24時間以内にご連絡いたします。');
        form.reset();
    });
}
