// Hero Slider
let slides = document.querySelectorAll('.hero-slider img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// Contact Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all fields!");
        return false;
    }
    if(!/^\d+$/.test(phone)) {
        alert("Phone number should contain only digits!");
        return false;
    }
    if(!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
// Testimonials Carousel
let testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});
document.querySelector('.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);
// Countdown Timer
const deadline = new Date("Dec 31, 2025 23:59:59").getTime();
const timer = document.getElementById('timer');

function updateCountdown() {
    let now = new Date().getTime();
    let t = deadline - now;

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000*60*60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000*60));
    let seconds = Math.floor((t % (1000*60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
setInterval(updateCountdown, 1000);
var animation = lottie.loadAnimation({
  container: document.getElementById('lottie-edu'), // the container
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets7.lottiefiles.com/packages/lf20_6mfjry3b.json' // free "kids learning" Lottie JSON
});
const text = "Welcome to XYZ School! Learning is Fun! 📚🎨";
let index = 0;
const typingSpeed = 150; // milliseconds per character

function typeText() {
    const typingElement = document.getElementById("typing-text");
    typingElement.innerText = text.slice(0, index);
    index++;

    if(index > text.length) {
        index = 0; // loop the typing
    }
}

setInterval(typeText, typingSpeed);
