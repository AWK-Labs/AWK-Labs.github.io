const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const overlay = document.querySelector('[data-modal-overlay]');
const modalTriggers = document.querySelectorAll('[data-modal-target]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('[data-modal-close]');

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal || !overlay) return;
  modal.classList.add('open');
  overlay.classList.add('open');
}

function closeModals() {
  modals.forEach((modal) => modal.classList.remove('open'));
  overlay?.classList.remove('open');
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const target = trigger.getAttribute('data-modal-target');
    if (target) openModal(target);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closeModals);
});

overlay?.addEventListener('click', closeModals);

document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') closeModals();
});

const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = contactForm.querySelector('button[type="submit"]');
  if (button) {
    button.textContent = 'Message Sent!';
    setTimeout(() => {
      button.textContent = 'Send Message';
      contactForm.reset();
    }, 2000);
  }
});
