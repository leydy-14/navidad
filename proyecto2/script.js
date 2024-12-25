// archivo script.js
document.addEventListener('DOMContentLoaded', function () {
    const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
    const contenido = document.getElementById('contenido');

    setTimeout(() => {
        pantallaBienvenida.style.display = 'none';
        contenido.style.display = 'block';
    }, 3000); // 6000 milisegundos = 3 segundos
});



//carrusel columna1
let index = 0;

function moveSlide(step) {
  const images = document.querySelector('.imagenes');
  const totalImages = images.children.length;

  index = (index + step + totalImages) % totalImages;
  images.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 6000); // Cambia la imagen cada 3 segundos


//columna 1
document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    let currentMessage = 0;

    function showNextMessage() {
        if (currentMessage < messages.length) {
            messages.forEach((message, index) => {
                message.classList.remove('visible');
                message.style.display = 'none';
            });

            messages[currentMessage].classList.add('visible');
            messages[currentMessage].style.display = 'block';
            
            currentMessage++;
        }
    }

    showNextMessage();
    setInterval(() => {
        if (currentMessage < messages.length) {
            showNextMessage();
        }
    }, 7000); // Cambia al siguiente mensaje después de 7 segundos
});

