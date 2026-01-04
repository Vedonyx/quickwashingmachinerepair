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
    const whatsappUrl = `https://wa.me/919035853700?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
