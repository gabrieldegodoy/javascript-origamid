// ANIMAÇÃO AO SCROLL
export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    const windowMetade =window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const inSectionVisible = (sectionTop - windowMetade) < 0;
        if(inSectionVisible) {
          section.classList.add('ativo');
        }
      });
    }
    animaScroll()

    window.addEventListener('scroll', animaScroll);
  }
}