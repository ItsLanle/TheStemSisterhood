/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("toggle");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register click event
themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - Add RSVP participants dynamically

***/

// Step 1: Select RSVP button
const rsvp = document.querySelector("#rsvp-button");
let count = 3;

const addParticipant = (event) => {
    event.preventDefault();

    // Get input values
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    // Create new participant
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${name} has RSVP'd! Email: ${email}, Phone: ${phone}`;

    const participants = document.querySelector(".rsvp-participants");
    participants.appendChild(newParticipant);

    // Update counter
    const oldCounter = document.querySelector("#rsvp-count");
    if (oldCounter) oldCounter.remove();

    count++;

    const newCounter = document.createElement("p");
    newCounter.id = "rsvp-count";
    newCounter.textContent = `⭐ ${count} people have RSVP'd to this event!`;

    participants.appendChild(newCounter);
}


/*** Form Validation ***
  
  Purpose:
  - Prevent invalid submissions

***/

const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;
  let rsvpInputs = document.getElementById("rsvp-form").elements;

  for (let i = 0; i < rsvpInputs.length; i++) {

    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }

    // Email validation
    if (rsvpInputs[i].id === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(rsvpInputs[i].value)) {
        containsErrors = true;
        rsvpInputs[i].classList.add("error");
      }
    }
  }

  // If valid → add participant + clear form
  if (!containsErrors) {
    addParticipant(event);

    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
}

// Attach validation to button
rsvp.addEventListener("click", validateForm);


/*** Scroll Animations (HEADER ONLY NOW) ***
  
  Purpose:
  - Hide header on scroll down
  - Show header on scroll up

***/

// Track last scroll position
let lastScrollTop = 0;

// Header scroll behavior
const handleHeaderScroll = () => {

  // Stop animations if reduce motion is on
  if (document.body.classList.contains("reduce")) return;

  let currentScroll = window.scrollY;
  let header = document.querySelector(".header-container");

  // Ignore tiny scrolls (prevents jitter)
  if (Math.abs(currentScroll - lastScrollTop) < 10) return;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    // Scroll DOWN → hide header
    header.classList.add("hide-header");
  } else {
    // Scroll UP → show header
    header.classList.remove("hide-header");
  }

  lastScrollTop = currentScroll;
}

// Attach scroll listener
window.addEventListener("scroll", handleHeaderScroll);


/*** Reduce Motion ***
  
  Purpose:
  - Disable animations for accessibility

***/

// Select button
let motion = document.getElementById("reduce");

// Toggle reduce motion class
const reduceMotion = () => {
  document.body.classList.toggle("reduce");

  // If reduce motion is now ON, immediately show all revealable elements without animation
  if (document.body.classList.contains("reduce")) {
    document.querySelectorAll(".revealable").forEach(el => {
      el.classList.add("active");
    });
  }
}

// Attach event listener
motion.addEventListener('click', reduceMotion);


/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
