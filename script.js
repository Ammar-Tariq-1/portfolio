/* ═══════════════════════════════════════════════════════
   AMMAR TARIQ — PORTFOLIO SCRIPTS
   Grain & Mortar Inspired: Light Hero → Dark Sections
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const sections = document.querySelectorAll('.section');
  const navItems = document.querySelectorAll('.nav-links li a');
  const landingSection = document.getElementById('landing');

  if (prefersReducedMotion) {
    document.querySelectorAll('.anim-observe, .exp-bullets li, .edu-highlights li, .tech-pill').forEach(el => {
      el.classList.add('visible');
    });
    document.querySelectorAll('.skill-fill').forEach(fill => {
      fill.style.width = fill.getAttribute('data-width') + '%';
    });
    document.querySelectorAll('.skill-pct').forEach(pct => {
      pct.textContent = pct.getAttribute('data-pct') + '%';
    });
    document.querySelectorAll('.stat-number[data-target]').forEach(stat => {
      stat.textContent = stat.getAttribute('data-target');
    });
  }

  // ── Navbar: Light/Dark mode based on scroll ──
  function updateNavbar() {
    const landingBottom = landingSection
      ? landingSection.offsetTop + landingSection.offsetHeight - 100
      : 0;

    if (window.scrollY < landingBottom) {
      // On the light hero
      navbar.classList.add('light-mode');
      navbar.classList.remove('dark-mode');
    } else {
      // Past hero — dark sections
      navbar.classList.remove('light-mode');
      navbar.classList.add('dark-mode');
    }

    // Active section highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // Run on page load

  // ── Mobile nav toggle ──
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ── Intersection Observer for scroll-triggered animations ──
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger children animations
        animateChildren(entry.target);

        // Skill bars
        if (entry.target.classList.contains('skill-category-card')) {
          animateSkillBars(entry.target);
        }

        // Stat counters
        if (entry.target.classList.contains('stat-counter')) {
          animateCounter(entry.target.querySelector('.stat-number'));
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animation targets
  document.querySelectorAll('.anim-observe').forEach(el => {
    observer.observe(el);
  });

  // ── Stagger children animations ──
  function animateChildren(parent) {
    // Bullets
    const bullets = parent.querySelectorAll('.exp-bullets li, .edu-highlights li');
    bullets.forEach((bullet, i) => {
      setTimeout(() => {
        bullet.classList.add('visible');
      }, 120 * i + 300);
    });

    // Tech pills
    const pills = parent.querySelectorAll('.tech-pill');
    pills.forEach((pill, i) => {
      setTimeout(() => {
        pill.classList.add('visible');
      }, 80 * i + 400);
    });
  }

  // ── Skill bar animation ──
  function animateSkillBars(card) {
    const fills = card.querySelectorAll('.skill-fill');
    const pcts = card.querySelectorAll('.skill-pct');

    if (prefersReducedMotion) {
      fills.forEach(fill => { fill.style.width = fill.getAttribute('data-width') + '%'; });
      pcts.forEach(pct => { pct.textContent = pct.getAttribute('data-pct') + '%'; });
      return;
    }

    fills.forEach((fill, i) => {
      const targetWidth = fill.getAttribute('data-width');
      setTimeout(() => {
        fill.style.width = targetWidth + '%';
      }, 120 * i + 200);
    });

    pcts.forEach((pct, i) => {
      const target = parseInt(pct.getAttribute('data-pct'));
      setTimeout(() => {
        animateNumber(pct, 0, target, 1000);
      }, 120 * i + 200);
    });
  }

  // ── Number counter animation ──
  function animateNumber(element, start, end, duration) {
    if (prefersReducedMotion) {
      element.textContent = end + '%';
      return;
    }

    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + range * easeOut);

      element.textContent = current + '%';

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ── Stat counter animation ──
  function animateCounter(element) {
    if (!element) return;
    const target = parseInt(element.getAttribute('data-target'));
    if (prefersReducedMotion) {
      element.textContent = target;
      return;
    }
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * easeOut);

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ── Project cards: stagger tech pills on scroll ──
  document.querySelectorAll('.project-card').forEach(card => {
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger tech pills
          const pills = entry.target.querySelectorAll('.tech-pill');
          pills.forEach((pill, i) => {
            setTimeout(() => {
              pill.classList.add('visible');
            }, 80 * i + 500);
          });

          projectObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    projectObserver.observe(card);
  });

  // ── Contact form: sequential underline draw ──
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const formObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const underlines = entry.target.querySelectorAll('.field-underline');
          underlines.forEach((line, i) => {
            setTimeout(() => {
              line.style.width = '100%';
              setTimeout(() => {
                line.style.width = '0%';
              }, 600);
            }, 250 * i + 500);
          });

          formObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    formObserver.observe(contactSection);
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ── Certification card mouse-follow tilt ──
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -3;
      const rotateY = (x - centerX) / centerX * 3;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ── Quick links stagger animation ──
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const links = entry.target.querySelectorAll('.quick-link');
          links.forEach((link, i) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(16px)';
            link.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

            setTimeout(() => {
              link.style.opacity = '1';
              link.style.transform = 'translateY(0)';
            }, 120 * i + 500);
          });

          aboutObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    aboutObserver.observe(aboutSection);
  }

  // ── Back to Top button (scroll arrow in footer area) ──
  // If the user scrolls to the bottom, the scroll indicator hides
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '';
        scrollIndicator.style.pointerEvents = '';
      }
    });
  }
});
