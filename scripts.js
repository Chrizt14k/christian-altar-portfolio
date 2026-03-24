document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const sections = document.querySelectorAll('.auto-scroll');
    const speed = 85; // pixels per second

    sections.forEach((section, idx) => {
      const originalChildren = Array.from(section.children);
      const originalCount = originalChildren.length;
      if (originalCount === 0) return;

      originalChildren.forEach(child => section.appendChild(child.cloneNode(true)));

      section.dataset.spent = '0';
      section.classList.remove('paused');

      let prevTime = null;
      let paused = false;
      const direction = (section.dataset.direction || 'ltr').toLowerCase();
      const halfWidth = section.scrollWidth / 2;

      if (direction === 'rtl') {
        section.scrollLeft = halfWidth;
      }

      const step = (time) => {
        if (prevTime === null) prevTime = time;
        const dt = (time - prevTime) / 1000;
        prevTime = time;

        if (!paused) {
          if (direction === 'rtl') {
            section.scrollLeft -= speed * dt;
            if (section.scrollLeft <= 0) section.scrollLeft += halfWidth;
          } else {
            section.scrollLeft += speed * dt;
            if (section.scrollLeft >= halfWidth) section.scrollLeft -= halfWidth;
          }
        }

        requestAnimationFrame(step);
      };

      section.addEventListener('mouseenter', () => {
        paused = true;
        section.classList.add('paused');
      });

      section.addEventListener('mouseleave', () => {
        paused = false;
        section.classList.remove('paused');
      });

      section.addEventListener('touchstart', () => { paused = true; section.classList.add('paused'); });
      section.addEventListener('touchend', () => { paused = false; section.classList.remove('paused'); });

      requestAnimationFrame(step);
    });

  }, 100);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.auto-scroll').forEach(sec => sec.scrollLeft = 0);
    }
  });

  // scroll reveal sections
  const revealSections = document.querySelectorAll('section');
  revealSections.forEach(section => section.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.15 });

  revealSections.forEach(section => revealObserver.observe(section));
});
