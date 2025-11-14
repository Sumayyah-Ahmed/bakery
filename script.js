// Loader hide after short delay
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.style.display = 'none', 900);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Gallery modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.dataset.img || card.querySelector('img')?.src;
    modalImg.src = img;
    modalImg.alt = card.dataset.title || card.querySelector('figcaption')?.textContent || 'Cake';
    modalTitle.textContent = card.dataset.title || 'Custom Cake';
    modalDesc.textContent = card.dataset.desc || 'A hand-crafted cake designed to your story.';
    modalPrice.textContent = card.dataset.price || '';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
});

const hideModal = () => {
  modal.classList.remove('show');
  document.body.style.overflow = '';
};
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) hideModal();
});

// CTA to contact section
document.getElementById('orderBtn')?.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Contact form fake submission (replace with Formspree/Netlify)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  note.textContent = 'Sending...';
  // Simulate network delay
  await new Promise(r => setTimeout(r, 800));
  note.textContent = 'Thank you! I’ll email you within 24–48 hours.';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
