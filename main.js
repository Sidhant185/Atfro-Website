document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  var toggle = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobileMenu');

  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.addEventListener('click', function (event) {
      var target = event.target;
      if (target.tagName === 'A') {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  function trackEvent(name, params) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  var ctas = document.querySelectorAll('.btn-primary, .ctaButton, .mobileCtaButton');
  ctas.forEach(function (el) {
    el.addEventListener('click', function () {
      trackEvent('cta_click', {
        label: el.textContent || '',
        location: window.location.pathname
      });
    });
  });

  var contactForm = document.querySelector('form');
  if (contactForm && window.location.pathname.indexOf('contact') !== -1) {
    contactForm.addEventListener('submit', function () {
      trackEvent('form_submit', {
        location: window.location.pathname
      });
    });
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (target && target.tagName === 'A') {
      var href = target.getAttribute('href') || '';
      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (_) {
        return;
      }
      if (url.hostname !== window.location.hostname) {
        trackEvent('outbound_click', { destination: url.href });
      }
    }
  });

  // Scroll Animation - Reveal on Scroll (respect reduced motion preferences)
  var revealElements = document.querySelectorAll('section, .problem-card, .pillar-card, .stage-card, .card');

  var prefersReducedMotion = false;
  if (window.matchMedia) {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  if (!prefersReducedMotion && 'IntersectionObserver' in window && revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function(el) {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });
  }

  setTimeout(function () {
    if (document.visibilityState === 'visible') {
      trackEvent('engaged_session', { location: window.location.pathname });
    }
  }, 60000);
});
