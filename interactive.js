// interactive.js
// All interactive features for Bonnie Martial Arts Fitness Hub

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.navbar-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});

// Gallery enlarge on click
const galleryImages = document.querySelectorAll('.gallery-list img');
const galleryOverlay = document.getElementById('galleryOverlay');
let enlargedImg = null;
galleryImages.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    galleryOverlay.innerHTML = '';
    galleryOverlay.style.display = 'flex';
    enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlargedImg.className = 'enlarged-img';
    galleryOverlay.appendChild(enlargedImg);
  });
});
galleryOverlay.addEventListener('click', () => {
  galleryOverlay.style.display = 'none';
  galleryOverlay.innerHTML = '';
});

// Contact form handler for fitness assessment
const assessmentForm = document.getElementById('contact-form');
const medicalDropdown = document.getElementById('medical-conditions');
const medicalDetails = document.getElementById('medical-details');
const injuriesDropdown = document.getElementById('injuries-limitations');
const injuryDetails = document.getElementById('injury-details');

function toggleDetailField(dropdown, detailField) {
  if (!dropdown || !detailField) return;
  detailField.classList.toggle('hidden', dropdown.value !== 'Yes');
}

if (medicalDropdown) {
  medicalDropdown.addEventListener('change', () => {
    toggleDetailField(medicalDropdown, medicalDetails);
  });
}

if (injuriesDropdown) {
  injuriesDropdown.addEventListener('change', () => {
    toggleDetailField(injuriesDropdown, injuryDetails);
  });
}

if (assessmentForm) {
  assessmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const agreement = document.getElementById('agree-checkbox');
    if (agreement && !agreement.checked) {
      showToast('Please agree to the terms before submitting.');
      return;
    }

    const fullName = document.getElementById('full-name').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const emailAddress = document.getElementById('email-address').value.trim();
    const emergencyContact = document.getElementById('emergency-contact').value.trim();
    const occupation = document.getElementById('occupation').value.trim();
    const medicalConditionsValue = medicalDropdown ? medicalDropdown.value : '';
    const medicalDetailsValue = medicalDetails ? medicalDetails.value.trim() : '';
    const onMedication = document.getElementById('on-medication')?.value || '';
    const injuriesLimitationsValue = injuriesDropdown ? injuriesDropdown.value : '';
    const injuryDetailsValue = injuryDetails ? injuryDetails.value.trim() : '';
    const selectedGoals = Array.from(document.querySelectorAll('input[name="goals"]:checked')).map(el => el.value).join(', ') || 'None';

    const message = `Bonnie Martial Arts & Fitness Hub Fitness Assessment%0A%0A` +
      `Full Name: ${fullName}%0A` +
      `Date of Birth: ${dob}%0A` +
      `Gender: ${gender}%0A` +
      `Phone Number: ${phoneNumber}%0A` +
      `Email Address: ${emailAddress}%0A` +
      `Emergency Contact: ${emergencyContact}%0A` +
      `Occupation: ${occupation}%0A%0A` +
      `Medical Conditions: ${medicalConditionsValue}%0A` +
      `If yes, specify: ${medicalDetailsValue}%0A` +
      `On Medication: ${onMedication}%0A` +
      `Injuries or Limitations: ${injuriesLimitationsValue}%0A` +
      `If yes, explain: ${injuryDetailsValue}%0A%0A` +
      `Fitness Goals: ${selectedGoals}%0A%0A` +
      `Agreement: Confirmed`;

    const phone = '256775970970';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
    showToast('Opening WhatsApp with your assessment details...');
    assessmentForm.reset();
    if (medicalDetails) medicalDetails.classList.add('hidden');
    if (injuryDetails) injuryDetails.classList.add('hidden');
  });
}

// Button ripple effect
const joinBtn = document.querySelector('.join-btn');
if (joinBtn) {
  joinBtn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

// Section reveal on scroll
const revealSections = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Toast notification (example usage)
function showToast(msg) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}
// Example: showToast('Welcome to Bonnie Martial Arts Fitness Hub!');
