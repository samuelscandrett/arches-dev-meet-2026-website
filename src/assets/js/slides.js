const slides = document.querySelectorAll('.hero-bg-image');
const progressBar = document.getElementById('progress-bar');
let currentIndex = 0;
const slideDuration = 8000; // 8 seconds

function showNextSlide() {
    // Remove 'active' class from current slide, increment and
    // add to next slide
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');

    // Reset progress bar animation
    resetProgressBar();
}

function resetProgressBar() {
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';

    setTimeout(() => {
        progressBar.style.transition = `width ${slideDuration}ms linear`;
        progressBar.style.width = '100%';
    }, 50);
}

resetProgressBar();
setInterval(showNextSlide, slideDuration);