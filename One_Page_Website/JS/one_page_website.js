
// Script for the one-page-website.html

// Open the Modal
function openModal() {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "block";
  }
}

// Close the Modal
function closeModal() {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "none";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) { // Display the slides
  const slides = document.getElementsByClassName("mySlides"); // Get all slides
  const dots = document.getElementsByClassName("dot");  // Get all dots
  const captionText = document.getElementById("caption"); // Get the caption text element

  if (!slides.length || !dots.length || !captionText) {  // Check if elements exist
    return;
  }

  // Adjust slideIndex if out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  Array.from(slides).forEach(slide => {
    slide.style.display = "none";
  });

  // Remove active class from all dots
  Array.from(dots).forEach(dot => {
    dot.className = dot.className.replace(" active", "");
  });

  // Show current slide and activate corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    plusSlides(-1);
  } else if (e.key === 'ArrowRight') {
    plusSlides(1);
  }
});