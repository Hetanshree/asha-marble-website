let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 3000);
showSlide(currentSlide);

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill in all fields.");
      e.preventDefault();
    }
  });
}