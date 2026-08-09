

(function() {
  'use strict';

  // ----- mobile menu toggle -----
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });

    // close menu on any link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });

    // click outside closes menu
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ----- simple scroll reveal (Intersection Observer) -----
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // fallback: show all
    revealElements.forEach(el => el.classList.add('in'));
  }

  // ----- placeholder image hint (optional) -----
  document.querySelectorAll('.product-card img, .gallery-item img, .dtr-pane img, .hero-media img').forEach(img => {
    // if image fails to load, show a subtle placeholder
    img.addEventListener('error', function() {
      this.style.background = '#e8dfd2';
      this.style.minHeight = '120px';
      this.style.display = 'flex';
    });
      });

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}
