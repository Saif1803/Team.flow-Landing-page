// hamburger-menu
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
})


// email-validation

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  console.log(email);

  if (!isValidEmail(email)) {
    alert("Invalid email!");
    event.preventDefault();
  }
});

function isValidEmail(email) {
  // A regular expression to match valid email addresses
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Test the email against the regex
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

// testimonial-carousel
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

function showTestimonialItem() {
  for (let i = 0; i < testimonialItems.length; i++) {
    testimonialItems[i].classList.remove('active');
  }
  testimonialItems[currentIndex].classList.add('active');
}

function nextTestimonialItem() {
  currentIndex++;
  if (currentIndex >= testimonialItems.length) {
    currentIndex = 0;
  }
  showTestimonialItem();
}

setInterval(nextTestimonialItem, 3000);
// benefits-button

const benefitsButton = document.getElementById("Benefits-btn");
const benefits = document.querySelectorAll(".benefit");

benefitsButton.addEventListener("click", () => {
  benefitsButton.classList.add("hidden");
  benefits.forEach(benefit => {
    benefit.classList.remove("hidden");
    benefit.classList.add("block");
  });
});

// footer dropdowns

const dropDown1 = document.querySelector('.dropdown1');
const dropDown2 = document.querySelector('.dropdown2');
const dropDown3 = document.querySelector('.dropdown3');
const dropMenu1 = document.querySelector('.dropmenu1');
const dropMenu2 = document.querySelector('.dropmenu2');
const dropMenu3 = document.querySelector('.dropmenu3');

dropDown1.addEventListener("click", () =>{
  dropMenu1.classList.toggle("hidden");
})

dropDown2.addEventListener("click", () =>{
  dropMenu2.classList.toggle("hidden");
})

dropDown3.addEventListener("click", () =>{
  dropMenu3.classList.toggle("hidden");
})
