document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href.includes('login.html')) {
      link.setAttribute('data-role', 'auth');
    }
  });
});
