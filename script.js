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
    document.getElementById(tabId).classList.add('active');
  });
});

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