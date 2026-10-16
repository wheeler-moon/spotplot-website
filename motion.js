// Apple-style motion for the home page: the hero eases in on load, sections rise into place as
// they scroll into view, and the hero screenshot grows to full size as you scroll toward it.
// Everything is off when the visitor has "Reduce motion" turned on, and the page reads fine without it.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  root.classList.add('motion');
  window.spotplotMotion = true;

  // Things that rise into place as they scroll into view. Siblings in a grid are staggered.
  var groups = [
    ['.section-head', 0],
    ['.feature .text', 0],
    ['.feature .media', 0],
    ['.grid .card', 70],
    ['.plans .plan', 90],
    ['.soon .plan', 90],
    ['.faq details', 40],
    ['.band .wrap > *', 80],
    ['.fine', 0],
  ];
  var items = [];
  groups.forEach(function (g) {
    var els = document.querySelectorAll(g[0]);
    Array.prototype.forEach.call(els, function (el, i) {
      if (el.classList.contains('reveal')) return;
      el.classList.add('reveal');
      if (el.matches('.feature .media')) el.classList.add('reveal-media');
      // Stagger within the same parent (cards in a row, plans side by side)
      var index = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.transitionDelay = (g[1] * index) + 'ms';
      items.push(el);
    });
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          el.classList.add('in');
          io.unobserve(el);
          // Once it's in place, drop the stagger delay so hover effects respond straight away
          setTimeout(function () { el.style.transitionDelay = ''; }, 1500 + (parseInt(el.style.transitionDelay) || 0));
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Hero screenshot: starts a little smaller and grows to full size as it scrolls up the screen
  var shot = document.querySelector('.hero .shot');
  if (shot) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var r = shot.getBoundingClientRect();
      var vh = window.innerHeight;
      // 0 when the shot's top is at the bottom of the screen, 1 when it's 30% from the top
      var p = (vh - r.top) / (vh * 0.7);
      p = Math.max(0, Math.min(1, p));
      shot.style.setProperty('--grow', p.toFixed(3));
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
