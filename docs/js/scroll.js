// Smooth scroll with a small delay for anchor links
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;
  var targetId = link.getAttribute('href').slice(1);
  if (!targetId) return;
  var target = document.getElementById(targetId);
  if (!target) return;
  e.preventDefault();
  setTimeout(function () {
    target.scrollIntoView({ behavior: 'smooth' });
  }, 150);
});
