function sendViaEmail() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var destination = document.getElementById('destination').value.trim();
  var message = document.getElementById('message').value.trim();

  if (!name || !email || !destination || !message) {
    alert('Please fill in all fields.');
    return;
  }

  var serviceID = 'YOUR_SERVICE_ID';     // e.g. service_xxxxx
  var templateID = 'YOUR_TEMPLATE_ID';   // e.g. template_xxxxx

  var templateParams = {
    from_name: name,
    from_email: email,
    destination: destination,
    message: message,
    to_email: 'wasturwantravels@gmail.com'
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then(function () {
      alert('Email sent successfully!');
      closeBooking(); // your modal close function
    })
    .catch(function (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send email. Please try again.');
    });
}
