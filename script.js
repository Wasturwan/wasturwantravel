//  EmailJS
emailjs.init("RPuODtzx4oLJPXBR3"); 

//  AOS
AOS.init({
  duration: 800,
  once: true,
});

//  Swiper
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

// Prefill booking form when a "Book Now" inside a tour card is clicked

document.addEventListener('click', function (e) {
  try {
    const btn = e.target.closest && e.target.closest('.btn-primary');
    if (!btn) return; 

    // Only act when the button is inside a tour card
    const card = btn.closest && btn.closest('.tour-card');
    if (!card) return;

    // Extract package details from the card
    const titleEl = card.querySelector('h3');
    const title = titleEl ? titleEl.textContent.trim() : '';

    // duration and price are typically in .tour-details spans
    let duration = '';
    let price = '';
    const detailSpans = card.querySelectorAll('.tour-details span');
    if (detailSpans && detailSpans.length > 0) {
      duration = detailSpans[0].textContent.trim();
      if (detailSpans.length > 1) price = detailSpans[1].textContent.trim();
    }

    
    const destEl = card.querySelector('.tour-content > p') || card.querySelector('p');
    const destinationText = destEl ? destEl.textContent.trim() : '';

    
    const parts = [];
    if (title) parts.push(title);
    if (duration) parts.push(duration);
    if (price) parts.push(price);
    if (destinationText) parts.push(destinationText);
    const summary = parts.join(' | ');

    if (summary) {
      
      document.querySelectorAll('#destination').forEach(function (input) {
        try { input.value = summary; } catch (err) { /*  */ }
      });
    }
  } catch (err) {
    
    console.error('Prefill booking error:', err);
  }
}, true);

// Form submission functions
function sendViaEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;
  const travelDateEl = document.getElementById('travelDate');
  const travelDate = travelDateEl ? travelDateEl.value : '';
  const message = document.getElementById('message').value;

  // EmailJS parameters 
  const serviceID = "service_7wpca56"; 
  const templateID = "template_4525ddd"; 

  const templateParams = {
    from_name: name,
    from_email: email,
    destination: destination,
    travel_date: travelDate,
    message: message,
    to_email: 'wasturwantravels@gmail.com' 
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
      alert('Email sent successfully!');
      document.getElementById('bookingForm').reset(); 
      closeBooking(); 
    }, function(error) {
      alert('Failed to send email. Please try again.');
      console.error('EmailJS error:', error);
    });
}

function sendViaWhatsApp() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;
  const travelDateEl = document.getElementById('travelDate');
  const travelDate = travelDateEl ? travelDateEl.value : '';
  const message = document.getElementById('message').value;
  const whatsappMessage = `Booking Request:\nName: ${name}\nEmail: ${email}\nDestination: ${destination}\nTravel Date: ${travelDate}\nMessage: ${message}`;
  const whatsappLink = `https://wa.me/917006594976?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappLink, '_blank');
}


document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});


document.addEventListener('keydown', function (e) {
  
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
   return false;
  }

  
  if (e.ctrlKey && e.shiftKey) {
    const key = (e.key || '').toUpperCase();
    if (key === 'I' || key === 'J' || key === 'C' || key === 'K') {
      e.preventDefault();
      return false;
    }
  }

  
  if (e.ctrlKey) {
    const key = (e.key || '').toUpperCase();
    if (key === 'U' || key === 'S') {
      e.preventDefault();
      return false;
    }
  }
});


document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

