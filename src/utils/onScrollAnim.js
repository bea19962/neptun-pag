export function setupScrollAnimation({ selector, animationClass = 'animate', delayStep = 100, threshold = 0.5 }) {
 const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.style.animationDelay = `${delayStep * parseInt(entry.target.dataset.index)}ms`;
       entry.target.classList.add(animationClass);
     } else {
       entry.target.classList.remove(animationClass);
       entry.target.style.animationDelay = '1ms';
     }
   });
 }, { threshold });

 document.querySelectorAll(selector).forEach((element, index) => {
   element.dataset.index = index;
   observer.observe(element);
 });
}
