script.js
let currentImageIndex = 0;
const images = document.querySelectorAll('#carousel-content img');

function changeImage(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    images.forEach((image, index) => {
        image.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

// Incluye tus números de WhatsApp, imágenes y enlaces de redes sociales en el código HTML.
