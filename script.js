const navbar = document.getElementById('navbar');

if (navbar) {
    const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    const navToggleIcon = navToggle.querySelector('i');
    const closeMenu = () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Menüyü aç');
        document.body.classList.remove('menu-open');
        if (navToggleIcon) {
            navToggleIcon.classList.replace('fa-xmark', 'fa-bars');
        }
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.classList.toggle('open');
        navLinks.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
        document.body.classList.toggle('menu-open', isOpen);
        if (navToggleIcon) {
            navToggleIcon.classList.toggle('fa-bars', !isOpen);
            navToggleIcon.classList.toggle('fa-xmark', isOpen);
        }
    });

    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenu();
    });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal');
const homeVideoTrack = document.getElementById('homeVideoTrack');

if (homeVideoTrack) {
    const carouselButtons = document.querySelectorAll('.video-carousel-button[data-video-direction]');
    const updateCarouselButtons = () => {
        const maxScroll = Math.max(0, homeVideoTrack.scrollWidth - homeVideoTrack.clientWidth);
        carouselButtons.forEach(button => {
            const isPrevious = button.dataset.videoDirection === '-1';
            button.disabled = isPrevious
                ? homeVideoTrack.scrollLeft <= 1
                : maxScroll - homeVideoTrack.scrollLeft <= 1;
        });
    };

    carouselButtons.forEach(button => {
        button.addEventListener('click', () => {
            const firstItem = homeVideoTrack.querySelector('.video-item');
            if (!firstItem) return;

            const gap = parseFloat(window.getComputedStyle(homeVideoTrack).columnGap) || 0;
            const direction = button.dataset.videoDirection === '-1' ? -1 : 1;
            homeVideoTrack.scrollBy({
                left: direction * (firstItem.getBoundingClientRect().width + gap),
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });

    homeVideoTrack.addEventListener('scroll', updateCarouselButtons, { passive: true });
    window.addEventListener('resize', updateCarouselButtons);
    updateCarouselButtons();
}

if (window.AOS && !prefersReducedMotion) {
    revealElements.forEach(element => element.setAttribute('data-aos', 'fade-up'));
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            window.AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 70
            });
        });
    });
}

if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector('.note-top')) {
        gsap.to('.note-top', { y: -9, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true });
        gsap.to('.note-bottom', { y: 8, duration: 3.1, ease: 'sine.inOut', repeat: -1, yoyo: true });
    }
}

document.querySelectorAll('.faq-q').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const answer = button.nextElementSibling;
        const willOpen = !item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-a').style.maxHeight = '0';
            otherItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });

        if (willOpen) {
            item.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
    });
});

const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

if (contactForm && submitButton && formMessage) {
    contactForm.addEventListener('submit', async event => {
        event.preventDefault();
        const buttonText = submitButton.querySelector('.btn-text');
        const buttonLoader = submitButton.querySelector('.btn-loader');

        buttonText.hidden = true;
        buttonLoader.hidden = false;
        submitButton.disabled = true;
        formMessage.hidden = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm)
            });
            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Bir hata oluştu');
            }

            formMessage.textContent = 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.';
            formMessage.className = 'form-message success';
            contactForm.reset();
        } catch (error) {
            formMessage.textContent = 'Mesaj gönderilemedi. Lütfen bizi telefonla arayın: +90 552 884 86 91';
            formMessage.className = 'form-message error';
        } finally {
            formMessage.hidden = false;
            buttonText.hidden = false;
            buttonLoader.hidden = true;
            submitButton.disabled = false;
        }
    });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
