const endDate = new Date("2025-05-15T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = endDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}, 1000);




document.querySelectorAll('.file-upload input[type="file"]').forEach(input => {
    input.addEventListener('change', function () {
      const fileName = this.files[0] ? this.files[0].name : this.dataset.placeholder;
      this.parentElement.querySelector('.file-name').textContent = fileName;
    });
  });

  function openPopup(src) {
    const popup = document.getElementById('imagePopup');
    const img = document.getElementById('popupImg');
    img.src = src;
    popup.style.display = 'flex';
  }
  
  // Close popup if clicking outside the image
  document.addEventListener('click', function (e) {
    const popup = document.getElementById('imagePopup');
    const img = document.getElementById('popupImg');
  
    if (popup.style.display === 'flex' && popup.contains(e.target) && !img.contains(e.target)) {
      popup.style.display = 'none';
    }
  });
  

  function openPolicyPopup() {
    document.getElementById('policyModal').style.display = 'flex';
  }
  
  function closePolicyPopup() {
    document.getElementById('policyModal').style.display = 'none';
  }


  
  function closePolicyPopup1() {
    document.getElementById('policyModal1').style.display = 'none';
  }
  
      
    // JavaScript Infinite Scroll Effect
    const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.getElementById('scrollText');

// Duplicate the content to ensure seamless scrolling
scrollContent.innerHTML += scrollContent.innerHTML;

let scrollAmount = 0;

// Detect if on mobile
const isMobile = window.innerWidth <= 600; // Adjust breakpoint if needed
const speed = isMobile ? 6 : 2; // Triple speed on mobile

function scrollText() {
    scrollAmount -= speed;
    if (Math.abs(scrollAmount) >= scrollContent.clientWidth / 2) {
        scrollAmount = 0;
    }
    scrollContent.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(scrollText);
}

scrollText();

    
    




  
  const title = document.querySelector('.title');

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 10;
    const y = (window.innerHeight / 2 - e.clientY) / 10;

    title.style.transform = `translate(${x}px, ${y}px)`;
  });


