document.addEventListener("DOMContentLoaded", function () {

const typedText = document.getElementById("typed-text");
const texts = ["Welcome to my portfolio.", "I'm a school student.", "I love web development."];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            typedText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 50); // Adjust typing speed (lower value for faster typing)
        } else {
            charIndex = 0;
            textIndex++;
            setTimeout(type, 1000); // Delay before typing the next text
        }
    }
}

type();


    // Smooth scrolling for navigation links
    var navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                var targetY = targetElement.getBoundingClientRect().top + window.scrollY;
                var startTime = null;

                function scrollAnimation(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = timestamp - startTime;
                    var scrollDistance = targetY - window.scrollY;
                    var easeInOutQuad = function (t) {
                        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                    };
                    var duration = 1000; // Adjust this value for scroll duration (in milliseconds)
                    var scrollValue = easeInOutQuad(Math.min(1, progress / duration)) * scrollDistance;

                    window.scrollTo(0, window.scrollY + scrollValue);

                    if (progress < duration) {
                        requestAnimationFrame(scrollAnimation);
                    }
                }

                requestAnimationFrame(scrollAnimation);
            }
        });
    });
});