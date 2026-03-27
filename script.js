document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    // Add active to clicked button
    button.classList.add('active');

    // Hide all content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    // Show selected content
    const tabId = button.getAttribute('data-tab');
    const tabEl = document.getElementById(tabId);
    tabEl.classList.add('active');

    // Re-observe newly visible elements so scroll-reveal triggers
    tabEl.querySelectorAll('.scroll-reveal:not(.visible)').forEach(el => {
      revealObserver.observe(el);
    });
  });
});

// Scroll reveal setup
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function setupScrollReveal() {
  document.querySelectorAll('.tab-content h2, .tab-content p, .tab-content .image-row, .tab-content .image-text-block').forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.style.transitionDelay = (i % 4) * 0.07 + 's';
    revealObserver.observe(el);
  });
}

window.addEventListener('load', setupScrollReveal);

// Title overflow check
function updateTitle() {
  const title = document.querySelector('.title');
  const topbar = document.querySelector('.topbar');

  // Reset to short first
  title.classList.remove('hidden');

  // If the short text overflows, hide it
  if (topbar.scrollWidth > topbar.clientWidth) {
    title.classList.add('hidden');
  }
}

window.addEventListener('resize', updateTitle);
window.addEventListener('load', updateTitle);