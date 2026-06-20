document.addEventListener('DOMContentLoaded', () => {
    console.log('Appliance Repair site loaded.');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle Enquiry Form Submit
    const forms = document.querySelectorAll('.enquiry-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            sendToWhatsapp(e);
        });
    });
});

function sendToWhatsapp(e) {
    const form = e.target;

    // Get values from the form
    const name = form.querySelector('input[name="name"]')?.value || '';
    const phone = form.querySelector('input[name="phone"]')?.value || '';
    const product = form.querySelector('select[name="product"]')?.value || '';
    
    // Warranty radio button (checked)
    const warrantyEl = form.querySelector('input[name="warranty"]:checked');
    const warranty = warrantyEl ? warrantyEl.value : '';

    const email = form.querySelector('input[name="email"]')?.value || '';
    const address = form.querySelector('input[name="address"]')?.value || '';
    const pincode = form.querySelector('input[name="pincode"]')?.value || '';
    const problem = form.querySelector('textarea[name="problem"]')?.value || '';

    // Construct WhatsApp Message
    const message = `*New Service Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Product:* ${product}%0A*Warranty:* ${warranty}%0A*Email:* ${email}%0A*Address:* ${address}%0A*Pincode:* ${pincode}%0A*Problem:* ${problem}`;

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/919035853700?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    form.reset();
}
