let open = !1;
document.querySelector('.menu').addEventListener('click', e => {
  open = !open;
});

document.querySelectorAll('section').forEach(section => {
  section.setAttribute('tabindex', 0);
});
