const wrapper = document.querySelector('.wrapper');
const field = document.getElementById('field');
const button = document.getElementById('generate-btn');
const qr_image = document.getElementById('qr-code');
let pre_value;

// Function to generate QR code.
button.addEventListener('click', () => {
    let qr_value = field.value.trim();
    if (!qr_value || pre_value === qr_value) return;
    pre_value = qr_value;
    button.innerText = 'Generating ...';
    qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qr_value}`;
    
    qr_image.addEventListener('load', () => {
        wrapper.classList.add('active');
        button.innerText = 'Generate';
    });

    qr_image.addEventListener('error', () => {
        alert('Failed to load the QR code. Please try again.');
        button.innerText = 'Generate';
    });
});
