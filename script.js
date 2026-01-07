// Initialize EmailJS
emailjs.init('your_public_key'); // Replace with your EmailJS public key

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Initialize Swiper
const swiper = new Swiper('.hero-slider', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Modal functions
function openBooking() {
  const modal = document.getElementById("bookingModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBooking() {
  const modal = document.getElementById("bookingModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById("bookingModal");
  if (event.target == modal) {
    closeBooking();
  }
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// Form submission functions
function sendViaEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;
  const message = document.getElementById('message').value;

  // EmailJS parameters - Replace with your actual IDs
  const serviceID = 'your_service_id'; // Replace with your EmailJS service ID
  const templateID = 'your_template_id'; // Replace with your EmailJS template ID

  const templateParams = {
    from_name: name,
    from_email: email,
    destination: destination,
    message: message,
    to_email: 'wasturwantravels@gmail.com' // Replace with your email
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
      alert('Email sent successfully!');
      closeBooking(); // Close modal after sending
    }, function(error) {
      alert('Failed to send email. Please try again.');
      console.error('EmailJS error:', error);
    });
}

function sendViaWhatsApp() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;
  const message = document.getElementById('message').value;

  const whatsappMessage = `Booking Request:\nName: ${name}\nEmail: ${email}\nDestination: ${destination}\nMessage: ${message}`;
  const whatsappLink = `https://wa.me/917006594976?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappLink, '_blank');
}
