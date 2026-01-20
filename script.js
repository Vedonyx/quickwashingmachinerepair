document.addEventListener('DOMContentLoaded', () => {
    console.log('Quick Washing Machine Repair site loaded.');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero section slideshow
    const heroSection = document.getElementById('heroSection');
    const heroImages = [
        'images/hero_image_1.jpg',
        'images/hero_image_2.jpg'
    ];
    let currentImageIndex = 0;

    function changeHeroBackground() {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImages[currentImageIndex]}')`;
    }

    // Change background every 4 seconds
    setInterval(changeHeroBackground, 4000);
});

function sendToWhatsapp(e) {
    e.preventDefault();
    const form = e.target;

    // Get values
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const problem = form.querySelector('textarea').value;

    // Construct WhatsApp Message
    const message = `*New Service Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Problem:* ${problem}`;

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/918151878009?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
