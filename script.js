
const reveals = document.querySelectorAll(
  '.glass-card, .grade-card, .subject-card, .timeline-item, .panel-left, .device-frame'
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(item => {
    const rect = item.getBoundingClientRect();

    if(rect.top < triggerBottom){
      item.classList.add('reveal');
      setTimeout(() => {
        item.classList.add('active');
      }, 100);
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const floatingItems = document.querySelectorAll('.floating');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  floatingItems.forEach((item, index) => {
    const speed = (index + 1) * 8;

    item.style.transform = `
      translate(
        ${x * speed}px,
        ${y * speed}px
      )
    `;
  });
});

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  hero.style.transform = `translateY(${scrollY * 0.1}px)`;
});
