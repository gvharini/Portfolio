//navber header

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");
  const navList = document.querySelector(".navbar ul");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});

//Contectus

document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  emailjs.init({
    publicKey: "cun7euVZLgG9JzkdU",
  });

  // Define sendMail function
  window.sendMail = function (event) {
    event.preventDefault(); // Prevent default form submission

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_22guiwb";
    const templateID = "template_s0xwaav";

    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Your message was sent successfully!");
        console.log(res);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("There was an error. Please try again later.");
      });
  };
});




document.addEventListener("DOMContentLoaded", () => {
  async function fetchSkills() {
    try {
      const response = await fetch("skills.json");
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching skills:", err);
    }
  }

  function showSkills(skills) {
    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) {
      console.error("Element with ID 'skillsContainer' not found.");
      return;
    }

    let skillHTML = "";
    skills.forEach((skill) => {
      skillHTML += `
        <div class="bar">
          <div class="info">
            <img src="${skill.icon}" alt="skill icon" />
            <span>${skill.name}</span>
          </div>
        </div>`;
    });

    skillsContainer.innerHTML = skillHTML;
  }

  fetchSkills().then((data) => {
    if (data) showSkills(data);
  });
});

document.addEventListener("mousemove", (e) => {
  createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  document.body.appendChild(particle);

  // Random color (you can use just white or customize colors)
  const colors = ["#ffffff", "#ffb6c1", "#e0ffff", "#dda0dd", "#add8e6"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  particle.style.background = color;

  // Set position
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Animate particle
  const size = Math.random() * 4 + 4;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const animationDuration = 1000;
  const deltaX = (Math.random() - 0.5) * 50;
  const deltaY = (Math.random() - 0.5) * 50;
  const rotation = Math.random() * 360;

  particle.animate([
    {
      transform: `translate(0, 0) rotate(0deg)`,
      opacity: 1
    },
    {
      transform: `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`,
      opacity: 0
    }
  ], {
    duration: animationDuration,
    easing: "ease-out"
  });

  // Remove after animation
  setTimeout(() => {
    particle.remove();
  }, animationDuration);
}

