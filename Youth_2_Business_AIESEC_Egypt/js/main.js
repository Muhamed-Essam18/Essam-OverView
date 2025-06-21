const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minuites');
const secondsDisplay = document.getElementById('secoends');

const targetDate =new Date("May 3 2025 00:00:00").getTime();

function timer (){
  const currentDate =new Date().getTime();
  const distance = targetDate - currentDate;

  const days= Math.floor(distance/1000/60/60/24);
  const hours= Math.floor(distance/1000/60/60)%24;
  const minutes= Math.floor(distance/1000/60)%60;
  const secoends= Math.floor(distance/1000)%60;

  daysDisplay.innerHTML=days;
  hoursDisplay.innerHTML=hours;
  minutesDisplay.innerHTML=minutes;
  secondsDisplay.innerHTML=secoends;

}

setInterval(timer,1000);

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  const phoneInput = document.getElementById('phone');
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phoneInput.value)) {
      alert('Please enter a valid 10-digit phone number.');
      event.preventDefault();
  }
});

let currentIndex = 0;
const images = document.querySelectorAll(".registration-image img"); // Ensure this matches your actual class

function nextImage() {
  if (images.length === 0) return; // Prevent errors if no images exist


  images[currentIndex].classList.remove("active");

  // Move to the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Add "active" class to the next image 
  images[currentIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-link");
  let navbarToggler = document.querySelector(".navbar-toggler");
  let navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
          // Check if the navbar is open
          if (navbarCollapse.classList.contains("show")) {
              navbarToggler.click(); // Simulate a button click to close the navbar
          }
      });
  });
});
// Attach event listener to click on the container
document.querySelector('.registration-image').addEventListener('click', nextImage);
