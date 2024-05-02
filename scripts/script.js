//variables for navbar toggle button

const toggleButton = document.getElementById('togglenav');
const navBar = document.getElementById('navBar');

//making the toggle button for navbar
toggleButton.addEventListener('click', function() {
	navBar.classList.toggle('hidden'); 
	toggleButton.classList.toggle('toggleUp');
});

//making slideshow

var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides(); // Start slideshow