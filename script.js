// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const overlay = document.getElementById("babe_overlay");
const popup = document.getElementById("babe_overlay_container");
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closePopup");

openBtn.onclick = () => {
  overlay.style.display = "block";
  popup.style.display = "block";
  popup.style.opacity = "1";
};

closeBtn.onclick = closePopup;
overlay.onclick = closePopup;

function closePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";
  popup.style.opacity = "0";
}

/* WhatsApp auto-send */
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const pack = document.getElementById("package").value;
  const msg = document.getElementById("message").value;

  const whatsapp = "919906733155";

  const text =
    `Hello Wasturwan Travels,%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Date: ${date}%0A` +
    `Package: ${pack}%0A` +
    `Message: ${msg}`;

  window.open(`https://wa.me/${whatsapp}?text=${text}`, "_blank");

  closePopup();
});
