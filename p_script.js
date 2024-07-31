document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const cards = carousel.children;
    let currentCard = 0;
    const intervalTime = 2500; // Tiempo en milisegundos entre cada desplazamiento

    function scrollCarousel() {
        currentCard++;
        if (currentCard >= cards.length) {
            currentCard = 0; // Reiniciar desplazamiento al principio
        }
        const translateX = -currentCard * 170;
        carousel.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(scrollCarousel, intervalTime);

    // Clonar todos los elementos del carrusel y agregarlos al final
    Array.prototype.forEach.call(cards, function(card) {
        const clone = card.cloneNode(true);
        carousel.appendChild(clone);
    });
});

