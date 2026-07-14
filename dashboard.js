document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.list');
  if (list) {
    const items = Array.from(list.children);
    items.forEach((item, index) => {
      item.style.opacity = '0.8';
      item.style.transform = 'translateY(4px)';
      item.animate([
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 0.8, transform: 'translateY(0)' }
      ], { duration: 300 + index * 150, fill: 'forwards' });
    });
  }
});
