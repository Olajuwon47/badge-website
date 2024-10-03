// QR Code Generation
function generateQRCode() {
  const qrCodeCanvas = document.getElementById('qr-code-canvas');

  // Badge details
  const recipientEmail = 'Lawal.olajuwonwaheed@gmail.com';
  const issuedDate = 'October 10, 2024';
  const badgeLink = `https://ai.mlsc-amity.tech?badge=${recipientEmail}&issued=${issuedDate}`;

  // menu-toggle
  document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu-toggle').classList.toggle('active');
});

  // Create QR code
  const qrCode = new QRious({
    element: qrCodeCanvas,
    size: 200,
    value: `Badge awarded to: ${recipientEmail}\nIssued on: ${issuedDate}\nLink: ${badgeLink}`,
  });

  // Download QR button functionality
  document.getElementById('download-qr-button').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = qrCodeCanvas.toDataURL();
    link.download = 'badge-qr.png';
    link.click();
  });
}

// Particles.js effect
function initializeParticles() {
  particlesJS("particles-js", {
    // Your particle configuration...
    "particles": {
      "number": {
        "value": 189,
        "density": {
          "enable": true,
          "value_area": 1657.2100474277727
        }
      },
      "color": {
        "value": "#5961e3"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#4d56d7"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.30464829156444934,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 87.70433892854527,
          "size_min": 24.362316369040354,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 80.17060304327615,
        "color": "#ffffff",
        "opacity": 0.2886141709557941,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

// Typing Effect for Badge Title
function startTypingEffect() {
  const badgeTitle = document.getElementById('typingeffect');
  const badgeTitleText = badgeTitle.innerText;
  badgeTitle.innerText = '';
  let index = 0;
  let typingSpeed = 100;
  let isTyping = true;

  function typeEffect() {
    if (isTyping) {
      if (index < badgeTitleText.length) {
        badgeTitle.innerText = badgeTitleText.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, typingSpeed);
      } else {
        isTyping = false;
        setTimeout(typeEffect, 2000);
      }
    } else {
      if (index > 0) {
        badgeTitle.innerText = badgeTitleText.substring(0, index - 1);
        index--;
        setTimeout(typeEffect, typingSpeed);
      } else {
        isTyping = true;
        setTimeout(typeEffect, 500);
      }
    }
  }

  typeEffect(); // Start typing effect
}

window.onload = function () {
  startTypingEffect();
  generateQRCode();
  initializeParticles();
};
